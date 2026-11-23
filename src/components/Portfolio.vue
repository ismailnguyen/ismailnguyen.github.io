<template>
    <div
        ref="band"
        class="reel"
        :class="{ 'is-loading': isLoading, 'is-dragging': dragging }"
        :style="{ height: bandHeight + 'px', '--u': u + 'px' }"
        @pointerdown="onPointerDown"
        @click.capture="onClickCapture">

        <!-- hand-drawn doodles (no text) -->
        <svg class="doodle doodle--slashes" viewBox="0 0 40 40" aria-hidden="true">
            <path pathLength="1" d="M14 6 L4 34" />
            <path pathLength="1" d="M30 6 L20 34" />
        </svg>
        <svg class="doodle doodle--arrow" viewBox="0 0 120 120" aria-hidden="true">
            <path pathLength="1" d="M6 14 C 60 4, 112 18, 108 56 C 105 84, 88 100, 70 112" />
            <path pathLength="1" d="M70 112 L 92 108 M70 112 L 76 92" />
        </svg>

        <component
            :is="work.id ? 'router-link' : 'div'"
            v-for="(work, i) in cards"
            :key="i"
            :to="work.id ? '/work/' + encodeURIComponent(work.id) : undefined"
            :ref="el => (cardEls[i] = el && (el.$el || el))"
            :title="work.title"
            :aria-label="work.title"
            class="reel__card"
            draggable="false">
            <img v-if="work.coverImage" :src="work.coverImage.url" :alt="work.coverImage.alt || work.title" loading="lazy" draggable="false">
            <span class="reel__badge" aria-hidden="true">
                <img v-if="work.logo" :src="work.logo.url" alt="" draggable="false">
                <i v-else class="fas fa-arrow-right"></i>
            </span>
        </component>
    </div>
</template>

<script>
    import WorksService from '@/services/WorksService.js'

    // Curved "inside of a cylinder" carousel. All geometry is in frame units (u).
    const PITCH = 196;      // card spacing
    const SPEED = 50;       // auto-scroll, u per second
    const BAND = 420;       // band height
    const CORNER = 15;

    function roundedQuad(pts, r) {
        const n = pts.length;
        let d = '';
        for (let i = 0; i < n; i++) {
            const [px, py] = pts[(i + n - 1) % n], [cx, cy] = pts[i], [nx, ny] = pts[(i + 1) % n];
            const toward = (x, y) => {
                const len = Math.hypot(x - cx, y - cy) || 1;
                return [cx + (x - cx) / len * r, cy + (y - cy) / len * r];
            };
            const a = toward(px, py), b = toward(nx, ny);
            d += `${i ? 'L' : 'M'}${a[0].toFixed(1)} ${a[1].toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${b[0].toFixed(1)} ${b[1].toFixed(1)} `;
        }
        return d + 'Z';
    }

    export default {
        data () {
            return {
                works: [],
                isLoading: true,
                u: 1,
                bandHeight: BAND,
                dragging: false,
            }
        },
        created() {
            this.cardEls = [];
            this.offset = 0;      // u scrolled so far
            this.velocity = 0;    // u per second, from flings
        },
        async mounted() {
            this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            this.resize = () => {
                const w = this.$refs.band.clientWidth;
                this.width = w;
                this.u = w / (w <= 820 ? 640 : 1440);
                this.bandHeight = BAND * this.u;
            };
            this.resize();
            window.addEventListener('resize', this.resize);

            let last = performance.now();
            const tick = (now) => {
                const dt = Math.min((now - last) / 1000, 0.1);
                last = now;
                if (!this.dragging) {
                    this.offset += ((this.reducedMotion ? 0 : SPEED) + this.velocity) * dt;
                    this.velocity *= Math.pow(0.05, dt); // loses ~95% per second
                }
                this.layout();
                this.raf = requestAnimationFrame(tick);
            };
            this.raf = requestAnimationFrame(tick);

            try {
                this.works = await new WorksService().getAllPages();
            } finally {
                this.isLoading = false;
            }
        },
        beforeUnmount() {
            cancelAnimationFrame(this.raf);
            window.removeEventListener('resize', this.resize);
        },
        computed: {
            cards () {
                const list = this.works.length
                    ? [...this.works.filter(w => w.isPinned), ...this.works.filter(w => !w.isPinned)]
                    : Array.from({ length: 8 }, () => ({}));
                // repeat until the loop is comfortably wider than the screen
                const out = [...list];
                while (out.length * PITCH < 2400) out.push(...list);
                return out;
            },
        },
        methods: {
            layout() {
                const u = this.u, els = this.cardEls, count = this.cards.length;
                const cx = this.width / u / 2;   // frame centre in u
                const half = cx - 14;            // normalisation distance
                const loop = count * PITCH;
                const norm = x => Math.min(Math.abs(x - cx) / half, 1.6);

                for (let i = 0; i < count; i++) {
                    const el = els[i];
                    if (!el) continue;

                    // unpushed offset from centre, wrapped into [-loop/2, loop/2)
                    let t = (((i * PITCH - this.offset) % loop) + loop) % loop - loop / 2;
                    if (Math.abs(t) > half + 260) { el.style.visibility = 'hidden'; continue; }

                    const x = cx + t * (1 + 0.083 * (t / half) ** 2);
                    const d = norm(x);
                    const w = 170 + 48 * d * d;
                    const xl = x - w / 2, xr = x + w / 2;
                    const hl = 280 + 92 * norm(xl) ** 2.6;
                    const hr = 280 + 92 * norm(xr) ** 2.6;
                    const cy = BAND / 2 - 12 * d * d;
                    const top = cy - Math.max(hl, hr) / 2;
                    const h = Math.max(hl, hr);

                    // local quad, in px
                    const pts = [
                        [0, (cy - hl / 2 - top) * u],
                        [w * u, (cy - hr / 2 - top) * u],
                        [w * u, (cy + hr / 2 - top) * u],
                        [0, (cy + hl / 2 - top) * u],
                    ];

                    const s = el.style;
                    s.visibility = 'visible';
                    s.width = `${w * u}px`;
                    s.height = `${h * u}px`;
                    s.transform = `translate(${xl * u}px, ${top * u}px)`;
                    s.clipPath = `path('${roundedQuad(pts, CORNER * u)}')`;
                    s.setProperty('--bottom-left', `${pts[3][1]}px`);
                }
            },

            onPointerDown(e) {
                if (e.button !== 0) return;
                const band = this.$refs.band;
                let lastX = e.clientX, lastT = performance.now();
                this.dragging = true;
                this.moved = 0;
                this.velocity = 0;
                band.setPointerCapture(e.pointerId);

                const move = (ev) => {
                    const now = performance.now();
                    const dx = (ev.clientX - lastX) / this.u;
                    this.offset -= dx;
                    this.moved += Math.abs(dx);
                    const dt = Math.max((now - lastT) / 1000, 0.001);
                    this.velocity = 0.8 * (-dx / dt) + 0.2 * this.velocity;
                    lastX = ev.clientX;
                    lastT = now;
                };
                const up = () => {
                    this.dragging = false;
                    if (performance.now() - lastT > 80) this.velocity = 0; // held still before release
                    band.removeEventListener('pointermove', move);
                    band.removeEventListener('pointerup', up);
                    band.removeEventListener('pointercancel', up);
                };
                band.addEventListener('pointermove', move);
                band.addEventListener('pointerup', up);
                band.addEventListener('pointercancel', up);
            },

            // a drag must not open the work it ended on
            onClickCapture(e) {
                if (this.moved > 6) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            },
        },
    }
</script>

<style scoped lang="scss">
    .reel {
        --ink: #08482d;
        position: relative;
        width: 100%;
        overflow: hidden;
        cursor: grab;
        touch-action: pan-y;
        user-select: none;
        -webkit-user-select: none;

        &.is-dragging {
            cursor: grabbing;
        }
    }

    .reel__card {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        visibility: hidden;
        background: #dae7c7;
        will-change: transform, clip-path;

        > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            pointer-events: none;
            transition: transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        &:hover > img {
            transform: scale(1.04);
        }
    }

    .is-loading .reel__card {
        animation: pulse 1s infinite alternate;
    }

    /* frosted round badge pinned to the card's bottom-left corner */
    .reel__badge {
        position: absolute;
        left: calc(var(--u) * 14);
        top: calc(var(--bottom-left) - var(--u) * 52);
        display: grid;
        place-items: center;
        width: calc(var(--u) * 34);
        height: calc(var(--u) * 34);
        border-radius: 50%;
        color: #fff;
        font-size: calc(var(--u) * 13);
        background: rgba(255, 255, 255, 0.35);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.4);

        img {
            width: 60%;
            height: 60%;
            object-fit: contain;
        }
    }

    /* doodles */
    .doodle {
        position: absolute;
        z-index: 1;
        fill: none;
        stroke: var(--ink);
        stroke-width: 2.4;
        stroke-linecap: round;
        stroke-linejoin: round;
        pointer-events: none;

        path {
            stroke-dasharray: 1;
            stroke-dashoffset: 1;
        }
    }

    .doodle--slashes {
        left: calc(var(--u) * 240);
        top: calc(var(--u) * 6);
        width: calc(var(--u) * 34);
    }

    .doodle--arrow {
        right: calc(var(--u) * 150);
        top: calc(var(--u) * -20);
        width: calc(var(--u) * 120);
    }

    /* parent footer adds .is-in once it scrolls into view */
    .is-in .doodle path {
        animation: draw 0.9s cubic-bezier(0.6, 0, 0.3, 1) forwards;
    }

    .is-in .doodle path + path {
        animation-delay: 0.35s;
    }

    @media (max-width: 820px) {
        .doodle {
            display: none;
        }
    }

    @keyframes draw {
        to { stroke-dashoffset: 0; }
    }

    @keyframes pulse {
        from { opacity: 0.5; }
        to   { opacity: 1; }
    }

    @media (prefers-reduced-motion: reduce) {
        .doodle path {
            stroke-dashoffset: 0;
            animation: none !important;
        }
    }
</style>
