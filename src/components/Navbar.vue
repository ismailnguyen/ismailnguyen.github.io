<template>
    <nav class="navbar is-transparent" :class="this.$route.name == 'WorkDetail' ? 'is-dark': 'is-light'" role="navigation" aria-label="main navigation">

        <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
                <div id="brand" class="logo">
                    isma&iuml;l
                </div>
            </router-link>

            <a v-on:click="toggleMenu()" role="button" :class="isMenuOpen ? 'navbar-burger burger is-active' : 'navbar-burger burger'" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div :class="isMenuOpen ? 'navbar-menu is-active' : 'navbar-menu'">
            <div class="navbar-start" @click="toggleMenu()">
                <router-link to="/portfolio" class="navbar-item" :class="this.$route.name == 'WorkDetail' ? 'is-active': ''">
                    My works
                </router-link>

                <router-link to="/now" class="navbar-item">
                    Now
                </router-link>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <transition name="slide-left">
                            <a v-show="showSocialButtons" class="button is-light button-social button-paypal" href="//www.paypal.me/ismailnguyen" target="_blank" rel="noopener">
                                <i class="fab fa-paypal"></i>
                            </a>
                        </transition>

                        <transition name="slide-left">
                            <a v-show="showSocialButtons" class="button is-light button-social button-npm" href="//www.npmjs.com/~ismailnguyen" target="_blank" rel="noopener">
                                <i class="fab fa-npm"></i>
                            </a>
                        </transition>

                        <transition name="slide-left">
                            <a v-show="showSocialButtons" class="button is-light button-social button-github" href="//github.com/ismailnguyen" target="_blank" rel="noopener">
                                <i class="fab fa-github"></i>
                            </a>
                        </transition>

                        <transition name="slide-left">
                            <a v-show="showSocialButtons" class="button is-light button-social button-linkedin" href="//www.linkedin.com/in/ismailnguyen" target="_blank" rel="noopener">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </transition>

                        <transition name="slide-left">
                            <a v-show="showSocialButtons" class="button is-light button-social button-twitter" href="https://twitter.com/ishmaa_el" target="_blank" rel="noopener">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </transition>

                        <button class="button button-cta" @click="toggleSocialButtons()" v-if="!showSocialButtons">
                            <strong>Get in touch</strong>
                        </button>
                        <a class="button button-cta" @click="toggleSocialButtons()" href="https://github.com/ismailnguyen/resume/raw/master/CV_Ismail-Nguyen.pdf" target="_blank" rel="noopener" v-else>
                            <strong>Resum&eacute;</strong>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import animate from '../logo-animation'
    
    export default {
        data() {
            return {
                isMenuOpen: false,
                showSocialButtons: false
            }
        },
        mounted () {
            animate('brand');
        },
        methods: {
            toggleMenu: function () {
                this.isMenuOpen = !this.isMenuOpen
            },

            toggleSocialButtons: function () {
                this.showSocialButtons = !this.showSocialButtons
            }
        }
    }
</script>

<style scoped>
    @import url('https://themes.googleusercontent.com/fonts/css?kit=Qx6FPcitRwTC_k88tLPc-UdBEiE9uD1gMwjC8j0e9UVOHzq4pOkkVVXAxa-PHMp_TxxFasp78LYLHii6Z8AzWrPkbmw9Z2nKh64fN9qFysw');

    .logo {
        line-height: 1.15;
        text-align: center;
        color: #f8faff;
        font-weight: 400;
        text-decoration: none;
        vertical-align: baseline;
        font-family: "Bowlby One SC";
        font-style: normal;
        font-size: 2.5vw;
        text-shadow: 0px 2px #6b65a7, 3px 3px #6b65a7, 4px 4px #6b65a7;
    }

    @media only screen and (max-width: 500px) {
    .logo {
            font-size: 8.35vw;
            text-shadow: 0px 1px #6b65a7, 1px 1px #6b65a7, 2px 2px #6b65a7;
        }
    }
    
    .navbar .burger {
        color: #6b65a7;
        font-size: 22px;
    }
    
    .navbar .button {
        border-radius: 0;
        transition: box-shadow 300ms ease, background-color 300ms ease;
    }
    
    .navbar.is-light .button-cta {
        color: #fff;
        background-color: #6b65a7;
    }

    .navbar.is-light .button-cta:hover {
        background-color: #5a27e7;
        box-shadow: 8px 8px 20px 0 rgba(106, 53, 255, 0.32);
    }

    .navbar.is-dark .button-cta {
        color: #fff;
        background-color: rgba(67, 83, 255, 0.1);
        border: none;
    }

    .navbar.is-dark .button-cta:hover {
        background-color: #5a27e7;
    }

    .button-social {
        background: none !important;
    }

    .has-background-dark .button-social.is-light:not(:hover) {
        color: #fff;
    }

    .button-paypal:hover {
        color: #15aabf;
    }

    .button-npm:hover {
        color: #cb3837;
    }

    .button-github:hover {
        color: black;
    }

    .button-twitter:hover {
        color: #1aa4ef;
    }

    .button-linkedin:hover {
        color: #0073b1;
    }

    .navbar.is-light .navbar-menu.is-active {
        background-color: #eef0f3;
    }

    .navbar.is-dark .navbar-menu.is-active {
        background-color: #2e363b;
    }

    .navbar-menu .navbar-item {
        padding-right: 22px;
        padding-left: 22px;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: -0.01em;
    }

    .navbar.is-light .navbar-menu .navbar-item {
        color: #2d3958;
    }

    .navbar .navbar-item {
        background: none !important;
    }

    .navbar.is-dark .navbar-menu .navbar-item {
        color: #fff;
        opacity: 0.5;
        background: none;
    }

    .navbar-menu .navbar-start .navbar-item:hover,
    .navbar-menu .navbar-start .navbar-item.is-active {
        font-weight: bold;
        border: none;
        background: none;
    }
    
    .navbar.is-light .navbar-menu .navbar-start .navbar-item:hover,
    .navbar.is-light .navbar-menu .navbar-start .navbar-item.is-active {
        color: #6b65a7;
    }

    .navbar.is-dark .navbar-menu .navbar-start .navbar-item:hover,
    .navbar.is-dark .navbar-menu .navbar-start .navbar-item.is-active {
        opacity: 1;
    }
</style>