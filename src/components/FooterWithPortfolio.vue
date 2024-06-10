<template>
    <footer id="portfolio" class="footer parallax-container">
        <Portfolio />

        <div class="content has-text-centered">
            <p class="is-pulled-left">
                <small>
                    Handcrafted with passion
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
         mounted() {
            initParallax();
        }
	}
</script>
