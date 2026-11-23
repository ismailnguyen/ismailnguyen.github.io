<template>
    <section class="scene">
        <!-- Landscape (everything that gets the VHS wobble) -->
        <div class="world" aria-hidden="true">
            <canvas ref="scene" class="world__canvas"></canvas>
            <img v-if="!hasScene" class="world__fallback" src="/resources/images/avatar/full_walking.png" alt="">
        </div>

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
    import startMeadowScene from '../meadow-scene.js';

    export default {
        data() {
            return { hasScene: true };
        },
        mounted() {
            this.stopScene = startMeadowScene(this.$refs.scene, '/resources/images/avatar/full_walking.png');
            this.hasScene = !!this.stopScene;
        },
        beforeUnmount() {
            this.stopScene && this.stopScene();
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
        background: linear-gradient(180deg, #4d70d8, #9aa0e4 45%, #f2b6c8 62%, #2c4a5c 63%, #16303a);
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

    .world__canvas {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
    }

    /* only without WebGL: a painted sky and the plain avatar */
    .world__fallback {
        position: absolute;
        left: 50%;
        bottom: 0;
        height: min(56vh, 600px);
        transform: translateX(-50%);
    }

    /* ---------- Overlays ---------- */

    .fx {
        position: absolute;
        inset: 0;
        pointer-events: none;
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

    /* ---------- Animations ---------- */

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
        .fx {
            animation: none !important;
        }

        .fx--roll {
            display: none;
        }
    }
</style>
