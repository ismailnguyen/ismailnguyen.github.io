<template>
    <div class="wd-page">
        <div class="wd-frame">
            <!-- Hero: the drone flight runs behind the copy -->
            <section class="wd-hero" :class="{ 'wd-hero--compact': compact }">
                <canvas ref="mountains" class="wd-mountains" aria-hidden="true"></canvas>

                <router-link :to="back.to" class="wd-home" :aria-label="'Back to ' + back.label">
                    <i class="fas fa-arrow-left" aria-hidden="true"></i>
                    {{ back.label }}
                </router-link>

                <div class="wd-hero__copy">
                    <slot name="hero" />
                </div>
            </section>

            <slot />

            <template v-if="columns.length">
                <div class="wd-hatch"></div>

                <div class="wd-grid" :style="{ '--rows': rows, '--cols': columns.length }">
                    <div class="wd-brand">
                        <div class="wd-brand__name">
                            <img v-if="brand.logo" :src="brand.logo" alt="" loading="lazy">
                            {{ brand.title }}
                        </div>
                        <p class="wd-brand__text" v-if="brand.text">{{ brand.text }}</p>

                        <div class="wd-brand__social">
                            <a href="//www.linkedin.com/in/ismailnguyen" target="_blank" rel="noopener" aria-label="LinkedIn profile"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
                            <a href="//www.npmjs.com/~ismailnguyen" target="_blank" rel="noopener" aria-label="NPM profile"><i class="fab fa-npm" aria-hidden="true"></i></a>
                            <a href="//github.com/ismailnguyen" target="_blank" rel="noopener" aria-label="GitHub profile"><i class="fab fa-github" aria-hidden="true"></i></a>
                        </div>
                    </div>

                    <template v-for="(col, c) in columns" :key="col.title">
                        <div class="wd-cell wd-cell--head" :style="{ '--c': c, '--r': 0 }">{{ col.title }}</div>
                        <template v-for="r in rows" :key="col.title + r">
                            <component
                                v-if="col.items[r - 1]"
                                :is="col.items[r - 1].to ? 'router-link' : (col.items[r - 1].href ? 'a' : 'span')"
                                v-bind="linkAttrs(col.items[r - 1])"
                                class="wd-cell"
                                :style="{ '--c': c, '--r': r }">
                                {{ col.items[r - 1].text }}
                            </component>
                            <span v-else class="wd-cell" :style="{ '--c': c, '--r': r }"></span>
                        </template>
                    </template>
                </div>
            </template>

            <div class="wd-hatch"></div>

            <div class="wd-bottom">
                <span>Crafted without tracking, neither cookies, only passion.</span>
                <span class="wd-bottom__links">
                    <a href="/privacy.html">Privacy</a>
                    <router-link to="/terms">Terms</router-link>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import startMountainFlight from '../mountain-flight.js'

    // Footer columns shared by every page about one work
    export function workColumns(work) {
        if (!work || !work.id) return [];
        const id = encodeURIComponent(work.id);
        const link = l => l && l.text && l.url ? { text: l.text, href: l.url, external: true } : null;
        return [
            { title: 'Links', items: [link(work.primaryLink), link(work.secondaryLink)].filter(Boolean) },
            { title: 'Tags', items: (work.tags || []).map(text => ({ text })) },
            { title: 'Legal', items: [
                work.markdownPrivacyUrl && { text: 'Privacy Policy', to: `/work/${id}/privacy` },
                work.markdownLicenseUrl && { text: 'License', to: `/work/${id}/license` },
                { text: 'Terms', to: '/terms' },
            ].filter(Boolean) },
        ];
    }

    export default {
        props: {
            back: { type: Object, default: () => ({ to: '/', label: 'Ismaïl' }) },
            compact: Boolean,
            brand: { type: Object, default: () => ({}) },
            columns: { type: Array, default: () => [] },
            minRows: { type: Number, default: 2 },
        },
        computed: {
            rows() {
                return Math.max(this.minRows, ...this.columns.map(c => c.items.length));
            },
        },
        mounted() {
            document.documentElement.classList.add('is-paper');
            this.stopFlight = startMountainFlight(this.$refs.mountains);
        },
        beforeUnmount() {
            document.documentElement.classList.remove('is-paper');
            this.stopFlight && this.stopFlight();
        },
        methods: {
            linkAttrs(item) {
                if (item.to) return { to: item.to };
                if (item.href) return { href: item.href, target: item.external ? '_blank' : null, rel: item.external ? 'noopener' : null };
                return {};
            },
        },
    }
</script>

<!-- Not scoped: pages fill the slots with .wd-* rows, all prefixed to stay contained -->
<style lang="scss">
    html.is-paper {
        background: #f2f0eb !important;
    }

    .wd-page {
        --paper: #f2f0eb;
        --paper-2: #e8e6e1;
        --ink: #141413;
        --muted: #6f6e69;
        --rule: 1px solid var(--ink);

        min-height: 100vh;
        padding: clamp(12px, 2.4vw, 36px);
        background: var(--paper);
        color: var(--ink);
        font-family: "Google Sans", "Inter", system-ui, sans-serif;
        font-size: 1rem;
        -webkit-font-smoothing: antialiased;

        ::selection {
            background: var(--ink);
            color: var(--paper);
        }

        :focus-visible {
            outline: 1px solid var(--ink);
            outline-offset: 3px;
        }
    }

    .wd-frame {
        max-width: 1848px;
        margin: 0 auto;
        border: var(--rule);
    }

    /* ---------- Hero ---------- */

    .wd-hero {
        position: relative;
        min-height: clamp(560px, 92vh, 900px);
        overflow: hidden;
    }

    .wd-hero--compact {
        min-height: clamp(480px, 70vh, 700px);
    }

    .wd-mountains {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        image-rendering: pixelated;
        background: var(--paper);
    }

    .wd-home {
        position: absolute;
        z-index: 1;
        top: clamp(1rem, 2vw, 1.75rem);
        left: clamp(1rem, 2.2vw, 2.6rem);
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        font-size: 1.05rem;
        color: var(--ink);

        i {
            font-size: 0.8em;
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        &:hover {
            color: var(--ink);

            i { transform: translateX(-4px); }
        }
    }

    .wd-hero__copy {
        position: relative;
        z-index: 1;
        max-width: 54rem;
        margin: 0 auto;
        padding: clamp(4.5rem, 9vh, 6.5rem) 16px 0;
        text-align: center;
    }

    .wd-title {
        display: flex;
        flex-direction: column;
        font-size: clamp(2.3rem, 4.4vw, 4.4rem);
        font-weight: 400;
        line-height: 1.12;
        letter-spacing: -0.03em;
        color: var(--ink);
        text-wrap: balance;
        outline: none !important;
    }

    .wd-title__line {
        animation: wd-rise 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;

        & + & { animation-delay: 0.12s; }
    }

    .wd-title__line--muted {
        color: var(--muted);
    }

    .wd-description {
        max-width: 30rem;
        margin: 1.1rem auto 0;
        font-size: 1.05rem;
        line-height: 1.35;
        color: var(--ink);
        text-wrap: balance;
        animation: wd-rise 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.24s both;
    }

    .wd-buttons {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.9rem;
        margin-top: 1.6rem;
        animation: wd-rise 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.34s both;
    }

    .wd-btn {
        display: inline-grid;
        place-items: center;
        min-width: 10rem;
        height: 2.65rem;
        padding: 0 1.6rem;
        font-size: 1.02rem;
        letter-spacing: -0.01em;
        transition: background-color 0.25s, color 0.25s, background-size 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .wd-btn--solid {
        background: var(--ink);
        color: var(--paper);

        &:hover {
            background: #33332f;
            color: var(--paper);
        }
    }

    /* hairline box with darker corner ticks, like a crop mark */
    .wd-btn--ghost {
        --tick: 7px;
        color: var(--ink);
        border: 1px solid rgba(20, 20, 19, 0.3);
        background:
            linear-gradient(var(--ink), var(--ink)) top left / var(--tick) 1px,
            linear-gradient(var(--ink), var(--ink)) top left / 1px var(--tick),
            linear-gradient(var(--ink), var(--ink)) bottom right / var(--tick) 1px,
            linear-gradient(var(--ink), var(--ink)) bottom right / 1px var(--tick),
            rgba(242, 240, 235, 0.75);
        background-repeat: no-repeat;
        background-origin: border-box;

        &:hover {
            --tick: 100%;
            color: var(--ink);
        }
    }

    /* ---------- Rules ---------- */

    .wd-hatch {
        height: 26px;
        border-block: var(--rule);
        background: repeating-linear-gradient(45deg, transparent 0 4px, var(--ink) 4px 5px);
    }

    /* ---------- Gallery & embeds ---------- */

    .wd-gallery {
        display: grid;
        gap: 1px;
        background: var(--ink);
    }

    .wd-gallery--2 { grid-template-columns: repeat(2, 1fr); }
    .wd-gallery--3 { grid-template-columns: repeat(3, 1fr); }

    .wd-shot {
        display: grid;
        place-items: center;
        padding: clamp(1rem, 2.6vw, 2.6rem);
        background: var(--paper-2);
        overflow: hidden;

        img {
            width: 100%;
            aspect-ratio: 16 / 10;
            object-fit: contain;
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        &:hover img {
            transform: scale(1.03);
        }
    }

    .wd-gallery--1 .wd-shot img {
        aspect-ratio: auto;
        max-height: 70vh;
        width: auto;
        max-width: 100%;
    }

    .wd-embed {
        padding: clamp(1rem, 2.6vw, 2.6rem);
        background: var(--paper-2);
    }

    /* ---------- Long-form text (markdown, legal) ---------- */

    .wd-prose {
        padding: clamp(2rem, 5vw, 4.5rem) clamp(1rem, 4vw, 3rem);

        .message,
        .message-body,
        > .wd-prose__body {
            max-width: 70ch;
            margin: 0 auto;
            padding: 0;
            background: none;
            border: none;
            color: var(--ink);
            font-size: 1.05rem;
            line-height: 1.65;
        }

        .content,
        .wd-prose__body {
            h1, h2, h3, h4 {
                font-family: inherit;
                font-weight: 400;
                letter-spacing: -0.025em;
                color: var(--ink);
                margin: 2.4em 0 0.6em;
                line-height: 1.15;
            }

            h1 { font-size: 2.4rem; }
            h2 { font-size: 1.7rem; }
            h3 { font-size: 1.3rem; }

            > :first-child { margin-top: 0; }

            p, li { color: #34332f; }
            p + p { margin-top: 1em; }

            a {
                color: var(--ink);
                text-decoration: underline;
                text-decoration-thickness: 1px;
                text-underline-offset: 3px;
            }

            hr {
                height: 1px;
                margin: 2.5rem 0;
                background: var(--ink);
            }

            pre {
                padding: 1rem 1.25rem;
                background: var(--paper-2);
                border: var(--rule);
                border-radius: 0;
                color: var(--ink);
            }

            code {
                background: var(--paper-2);
                color: var(--ink);
                border-radius: 0;
                font-size: 0.88em;
            }

            pre code { background: none; }

            img { border: var(--rule); }
        }
    }

    .wd-empty {
        padding: clamp(2rem, 5vw, 4.5rem) 1rem;
        text-align: center;
        color: var(--muted);
    }

    /* ---------- Footer grid ---------- */

    .wd-grid {
        display: grid;
        grid-template-columns: 1.33fr repeat(var(--cols), 1fr);
        grid-auto-rows: minmax(4.55rem, auto);
        gap: 1px;
        background: var(--ink);
        font-size: 1.1rem;
    }

    .wd-brand,
    .wd-cell {
        background: var(--paper);
    }

    .wd-brand {
        grid-column: 1;
        grid-row: 1 / span calc(var(--rows) + 1);
        display: flex;
        flex-direction: column;
        padding: 3.4rem 2.6rem 2.4rem;
    }

    .wd-brand__name {
        display: flex;
        align-items: center;
        gap: 0.7rem;
        font-size: 1.65rem;
        letter-spacing: -0.02em;

        img {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid var(--ink);
        }
    }

    .wd-brand__text {
        max-width: 28rem;
        margin-top: 0.5rem;
        font-size: 1rem;
        line-height: 1.3;
        color: var(--muted);
    }

    .wd-brand__social {
        display: flex;
        gap: 1.6rem;
        margin-top: auto;
        padding-top: 2rem;

        a {
            color: var(--ink);
            font-size: 1.3rem;
            transition: opacity 0.2s;

            &:hover { opacity: 0.6; }
        }
    }

    .wd-cell {
        grid-column: calc(var(--c) + 2);
        grid-row: calc(var(--r) + 1);
        display: grid;
        place-items: center;
        padding: 0.5rem;
        text-align: center;
        color: var(--ink);
    }

    a.wd-cell {
        transition: background-color 0.2s;

        &:hover {
            color: var(--ink);
            background: var(--paper-2);
        }
    }

    .wd-cell--head {
        min-height: 5.6rem;
        font-size: 1.45rem;
        letter-spacing: -0.015em;
        background: var(--paper-2);
    }

    .wd-bottom {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 0.5rem 1.5rem;
        padding: 1.4rem 2.6rem 1.2rem;
        font-size: 1.1rem;
    }

    .wd-bottom__links {
        display: flex;
        gap: 1.5rem;

        a {
            color: var(--ink);

            &:hover {
                text-decoration: underline;
                text-underline-offset: 3px;
            }
        }
    }

    /* ---------- Small screens ---------- */

    @media (max-width: 768px) {
        .wd-hero {
            min-height: 88svh;
        }

        .wd-hero--compact {
            min-height: 72svh;
        }

        .wd-gallery--2,
        .wd-gallery--3 {
            grid-template-columns: 1fr;
        }

        .wd-grid {
            grid-template-columns: repeat(var(--cols), 1fr);
            font-size: 0.95rem;
        }

        .wd-cell {
            grid-column: calc(var(--c) + 1);
        }

        .wd-cell--head {
            min-height: 3.8rem;
            font-size: 1.1rem;
        }

        .wd-brand {
            grid-column: 1 / -1;
            grid-row: calc(var(--rows) + 2);
            padding: 2rem 1.25rem;
        }

        .wd-bottom {
            padding: 1.1rem 1.25rem;
            font-size: 0.9rem;
        }
    }

    /* ---------- Loading & motion ---------- */

    .wd-skeleton {
        height: 3.4rem;
        width: 70%;
        margin: 0.6rem auto;
        background: linear-gradient(90deg, var(--paper-2), var(--paper), var(--paper-2));
        background-size: 200% 100%;
        animation: wd-shine 1.2s linear infinite;
    }

    .wd-skeleton--short { width: 45%; }

    @keyframes wd-shine { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

    @keyframes wd-rise {
        from {
            opacity: 0;
            filter: blur(10px);
            transform: translateY(0.4em);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .wd-title__line,
        .wd-description,
        .wd-buttons {
            animation: none;
        }
    }
</style>
