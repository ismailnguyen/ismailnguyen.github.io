<template>
    <footer id="portfolio" ref="footer" class="footer parallax-container reel-footer" :class="{ 'is-in': isIn }">
        <Portfolio class="reel-footer__reel" />

        <div class="content has-text-centered">
            <p class="is-pulled-left">
                <small>
                    Crafted without tracking, neither cookies, only passion.
                </small>
            </p>
            <p class="is-pulled-right">
                <router-link to="/terms">
                    <small>
                        Terms
                    </small>
                </router-link>
            </p>
        </div>
    </footer>
</template>

<script>
    import '../styles/footer.css';
	import Portfolio from './Portfolio.vue';
    import initParallax from '../parallax-scroll-animation.js';

    export default {
        components: {
            Portfolio
        },
        data() {
            return { isIn: false };
        },
        mounted() {
            initParallax();

            // The footer is fixed behind the page; it is revealed when the placeholder scrolls into view
            const placeholder = document.querySelector('.placeholder');
            this.observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    this.isIn = true;
                    this.observer.disconnect();
                }
            }, { threshold: 0.25 });
            this.observer.observe(placeholder);
        },
        beforeUnmount() {
            this.observer?.disconnect();
        }
	}
</script>

<style scoped lang="scss">
    .reel-footer {
        background: #f5f8ef;
        color: #08482d;
        font-family: "Inter", system-ui, sans-serif;
        padding-top: clamp(3rem, 6vw, 5.5rem);

        .content p,
        .content a {
            color: #08482d !important;
        }

        .content {
            letter-spacing: normal;
            font-weight: 500;
        }
    }

    .reel-footer__reel {
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.9s ease, transform 1.1s cubic-bezier(0.2, 0.7, 0.2, 1);
    }

    .is-in .reel-footer__reel {
        opacity: 1;
        transform: none;
    }

    @media (prefers-reduced-motion: reduce) {
        .reel-footer__reel {
            opacity: 1;
            transform: none;
            transition: none;
        }
    }
</style>
