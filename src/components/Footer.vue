<template>
    <footer class="footer parallax-container">
        <div class="content has-text-centered">
            <p class="is-pulled-left">
                <small>
                    Handcrafted without AI, no tracking, no cookies, only passion.
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
    import initParallax from '../parallax-scroll-animation.js';

    export default {
        mounted() {
            initParallax();
        }
    }
</script>