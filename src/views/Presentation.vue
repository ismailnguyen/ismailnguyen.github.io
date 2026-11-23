<template>
    <section class="scene">
        <!-- Landscape (everything that gets the VHS wobble) -->
        <div class="world" aria-hidden="true">
            <div class="sky"></div>
            <div class="sun"></div>

            <svg class="mountains mountains--far" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path d="M0 260 L120 190 L230 230 L360 120 L470 200 L560 160 L700 60 L820 170 L930 130 L1060 210 L1180 110 L1300 190 L1440 150 L1440 320 L0 320Z" />
            </svg>
            <svg class="mountains mountains--near" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path d="M0 280 L160 220 L300 260 L420 200 L560 250 L760 170 L900 240 L1040 200 L1200 250 L1320 210 L1440 240 L1440 320 L0 320Z" />
            </svg>

            <div class="clouds">
                <span v-for="(c, i) in clouds" :key="'c' + i" class="cloud" :style="c"></span>
            </div>

            <svg class="hill" viewBox="0 0 1440 400" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="hill-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stop-color="#4f6f9c" />
                        <stop offset="0.5" stop-color="#2c4a6e" />
                        <stop offset="1" stop-color="#1b3049" />
                    </linearGradient>
                </defs>
                <path fill="url(#hill-gradient)" d="M0 120 C 240 40, 520 60, 760 90 S 1200 70, 1440 130 L1440 400 L0 400Z" />
            </svg>

            <div class="flowers flowers--back">
                <span v-for="(f, i) in flowersBack" :key="'b' + i" class="flower" :style="f"></span>
            </div>

            <img class="avatar" src="/resources/images/avatar/full_walking.png" alt="">

            <div class="flowers flowers--front">
                <span v-for="(f, i) in flowersFront" :key="'f' + i" class="flower" :style="f"></span>
            </div>
        </div>

        <!-- Colour grading (lifted blacks + blue/pink tint, like old film) -->
        <div class="fx fx--lift" aria-hidden="true"></div>
        <div class="fx fx--tint" aria-hidden="true"></div>

        <!-- Content -->
        <nav class="hero-nav" aria-label="main navigation">
            <router-link to="/" class="hero-nav__logo">Isma&iuml;l</router-link>

            <ul class="hero-nav__links">
                <li><a href="//www.linkedin.com/in/ismailnguyen" target="_blank" rel="noopener" aria-label="LinkedIn profile"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a href="//www.npmjs.com/~ismailnguyen" target="_blank" rel="noopener" aria-label="NPM profile"><i class="fab fa-npm" aria-hidden="true"></i></a></li>
                <li><a href="//github.com/ismailnguyen" target="_blank" rel="noopener" aria-label="GitHub profile"><i class="fab fa-github" aria-hidden="true"></i></a></li>
            </ul>
        </nav>

        <div class="hero-content">
            <p class="hero-subhead">Hi there 👋🏽 !</p>
            <h1 class="hero-title">I am Isma&iuml;l NGUYEN</h1>
            <p class="hero-subtitle">
                What we uncover has always been — and was always meant to be revealed.
            </p>
        </div>

        <!-- Retro VHS layers, on top of everything -->
        <div class="fx fx--scanlines" aria-hidden="true"></div>
        <div class="fx fx--roll" aria-hidden="true"></div>
        <div class="fx fx--grain" aria-hidden="true"></div>
        <div class="fx fx--vignette" aria-hidden="true"></div>
    </section>
</template>

<script>
    // Seeded random so the landscape is identical on every visit
    function random(seed) {
        return () => {
            seed = (seed * 16807) % 2147483647;
            return (seed - 1) / 2147483646;
        };
    }

    const FLOWER_COLORS = ['#a9c4ff', '#cfdcff', '#8fb0ec', '#d9b8ea', '#b99be0', '#eef2ff', '#7d9fe0'];

    function flowers(count, seed, minY, maxY) {
        const rand = random(seed);
        return Array.from({ length: count }, () => {
            const y = minY + rand() * (maxY - minY); // % from bottom, higher = farther
            const depth = Math.max(0, 1 - y / 85);    // 1 = close, 0 = far
            const size = 4 + depth * 22 * (0.5 + rand());
            return {
                left: `${rand() * 102 - 1}%`,
                bottom: `${y}%`,
                width: `${size}px`,
                height: `${size * 0.8}px`,
                background: FLOWER_COLORS[Math.floor(rand() * FLOWER_COLORS.length)],
                filter: `blur(${(1 - depth) * 1.5 + (depth > 0.85 ? 2 : 0)}px)`,
                opacity: 0.55 + depth * 0.45,
            };
        });
    }

    function clouds() {
        const rand = random(42);
        return Array.from({ length: 9 }, (_, i) => ({
            left: `${i * 12 - 10 + rand() * 6}%`,
            bottom: `${rand() * 8}%`,
            width: `${22 + rand() * 18}vw`,
            height: `${6 + rand() * 6}vw`,
            animationDelay: `${-rand() * 60}s`,
            animationDuration: `${50 + rand() * 40}s`,
        }));
    }

    export default {
        data() {
            return {
                clouds: clouds(),
                flowersBack: flowers(240, 7, 8, 80),
                flowersFront: flowers(50, 13, -4, 14),
            };
        },
    };
</script>

<style scoped lang="scss">
    .scene {
        --serif: "Instrument Serif", "LMRoman10", Georgia, serif;
        --sans: "Inter", system-ui, -apple-system, sans-serif;

        position: relative;
        height: 100vh;
        height: 100svh;
        min-height: 620px;
        overflow: hidden;
        isolation: isolate;
        background: #4a6bd0;
        color: #fff;
        font-family: var(--sans);
        animation: flicker 6s steps(1) infinite;
    }

    /* ---------- Landscape ---------- */

    .world {
        position: absolute;
        inset: -8px;
        animation: wobble 7s steps(1) infinite;
    }

    .world > * {
        position: absolute;
    }

    .sky {
        inset: 0;
        background: linear-gradient(
            180deg,
            #3d5fcf 0%,
            #5b7de0 18%,
            #8b98e2 34%,
            #c6a3d9 46%,
            #f0aac2 56%,
            #f6c4bd 62%,
            #e7b5c9 70%
        );
    }

    .sun {
        left: 50%;
        top: 58%;
        width: 120vw;
        height: 40vh;
        transform: translate(-50%, -50%);
        background: radial-gradient(closest-side, rgba(255, 214, 200, 0.75), rgba(255, 190, 200, 0) 70%);
    }

    .mountains {
        left: 0;
        width: 100%;
        filter: blur(5px);
    }

    .mountains--far {
        bottom: 34%;
        height: 26vh;
        fill: #b8a6d9;
        opacity: 0.55;
    }

    .mountains--near {
        bottom: 30%;
        height: 22vh;
        fill: #9d93cf;
        opacity: 0.65;
    }

    .clouds {
        left: 0;
        right: 0;
        bottom: 27%;
        height: 18vh;
    }

    .cloud {
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(closest-side, rgba(238, 226, 245, 0.95), rgba(214, 196, 232, 0.6) 60%, transparent);
        filter: blur(14px);
        animation: drift linear infinite alternate;
    }

    .hill {
        left: 0;
        bottom: 0;
        width: 100%;
        height: 34%;
    }

    .flowers {
        left: 0;
        right: 0;
        bottom: 0;
        height: 34%;
    }

    .flower {
        position: absolute;
        border-radius: 50%;
        box-shadow: inset -2px -2px 0 rgba(30, 50, 110, 0.25);
    }

    .avatar {
        left: 50%;
        bottom: 1%;
        height: min(50vh, 560px);
        transform: translateX(-46%);
        /* soft & faded like the scene, with a RGB fringe on the edges */
        filter:
            saturate(0.7)
            contrast(0.92)
            drop-shadow(3px 0 0 rgba(255, 70, 140, 0.35))
            drop-shadow(-3px 0 0 rgba(70, 170, 255, 0.35));
    }

    /* ---------- Overlays ---------- */

    .fx {
        position: absolute;
        inset: 0;
        pointer-events: none;
    }

    /* lifts pure blacks to a navy, the washed-out film look */
    .fx--lift {
        background: #2a3a7a;
        mix-blend-mode: lighten;
        opacity: 0.7;
    }

    .fx--tint {
        background: linear-gradient(180deg, rgba(60, 90, 220, 0.45), rgba(240, 150, 190, 0.3) 55%, rgba(60, 90, 210, 0.5));
        mix-blend-mode: soft-light;
    }

    .fx--scanlines {
        z-index: 3;
        background: repeating-linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.07) 0 1px,
            rgba(10, 20, 60, 0.22) 1px 2px,
            transparent 2px 4px
        );
        animation: scan 0.5s steps(4) infinite;
    }

    .fx--roll {
        z-index: 3;
        top: -30%;
        height: 30%;
        bottom: auto;
        background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.12) 45%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.12) 55%, transparent);
        mix-blend-mode: overlay;
        animation: roll 7s linear infinite;
    }

    .fx--grain {
        z-index: 3;
        inset: -50%;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        opacity: 0.14;
        mix-blend-mode: overlay;
        animation: grain 0.6s steps(6) infinite;
    }

    .fx--vignette {
        z-index: 3;
        background: radial-gradient(ellipse at 50% 45%, transparent 55%, rgba(15, 20, 60, 0.45));
    }

    /* ---------- Content ---------- */

    .hero-nav,
    .hero-content {
        position: relative;
        z-index: 2;
    }

    .hero-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 1.4rem clamp(16px, 7vw, 56px);
        animation: slideDown 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) 0.2s both;
    }

    .hero-nav a {
        color: #fff;
    }

    .hero-nav__logo {
        font-family: var(--serif);
        font-size: 1.5rem;
        letter-spacing: -0.02em;
    }

    .hero-nav__links {
        display: flex;
        gap: 1.6rem;
        font-size: 1.15rem;

        a {
            opacity: 0.9;
            transition: opacity 0.2s;

            &:hover {
                opacity: 1;
                text-shadow: 0 0 12px rgba(255, 255, 255, 0.6);
            }
        }
    }

    .hero-content {
        max-width: 760px;
        margin: clamp(1.5rem, 6vh, 4.5rem) auto 0;
        padding: 0 16px;
        text-align: center;

        > * {
            animation: slideUp 1s cubic-bezier(0, 0.5, 0, 1) both;
        }
    }

    .hero-subhead {
        font-size: clamp(0.95rem, 1.5vw, 1.1rem);
        letter-spacing: 0.08em;
        opacity: 0.9;
        animation-delay: 0.4s !important;
    }

    .hero-title {
        font-family: var(--serif);
        font-weight: 400;
        font-size: clamp(2.6rem, 6.4vw, 5rem);
        margin-top: 0.8rem;
        line-height: 1.02;
        letter-spacing: -0.02em;
        color: #fff;
        /* chromatic aberration */
        text-shadow:
            -1.5px 0 rgba(255, 60, 130, 0.45),
            1.5px 0 rgba(60, 170, 255, 0.45),
            0 0 30px rgba(255, 255, 255, 0.25);
        animation-delay: 0.5s !important;
    }

    .hero-subtitle {
        max-width: 560px;
        margin: 1.6rem auto 0;
        font-size: clamp(0.9rem, 1.4vw, 1rem);
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.92);
        animation-delay: 0.7s !important;
    }

    @media (max-width: 767.98px) {
        .avatar {
            height: 46vh;
        }
    }

    /* ---------- Animations ---------- */

    @keyframes drift {
        from { transform: translateX(-4vw); }
        to   { transform: translateX(4vw); }
    }

    @keyframes scan {
        from { background-position: 0 0; }
        to   { background-position: 0 4px; }
    }

    @keyframes roll {
        from { transform: translateY(0); }
        to   { transform: translateY(470%); }
    }

    @keyframes grain {
        0%   { transform: translate(0, 0); }
        17%  { transform: translate(-5%, 3%); }
        33%  { transform: translate(4%, -6%); }
        50%  { transform: translate(-7%, -2%); }
        67%  { transform: translate(6%, 5%); }
        83%  { transform: translate(-2%, 7%); }
    }

    /* tiny tracking-error jumps */
    @keyframes wobble {
        0%   { transform: translate(0, 0); }
        12%  { transform: translate(-1px, 0); }
        13%  { transform: translate(1px, 0); }
        40%  { transform: translate(0, 0); }
        71%  { transform: translate(2px, 0) skewX(-0.4deg); }
        72%  { transform: translate(-2px, 1px); }
        73%  { transform: translate(0, 0); }
        90%  { transform: translate(1px, 0); }
    }

    @keyframes flicker {
        0%   { filter: brightness(1); }
        31%  { filter: brightness(1.04); }
        32%  { filter: brightness(0.97); }
        33%  { filter: brightness(1); }
        77%  { filter: brightness(1.03); }
        78%  { filter: brightness(1); }
    }

    @media (prefers-reduced-motion: reduce) {
        .scene,
        .world,
        .cloud,
        .fx {
            animation: none !important;
        }

        .fx--roll {
            display: none;
        }
    }
</style>
