<template>
    <nav class="navbar is-transparent is-fixed-top" :class="isMenuOpen ? 'is-blurred' : ''" role="navigation" aria-label="main navigation">

        <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
                <div id="brand" class="logo">
                    isma&iuml;l
                </div>
            </router-link>

            <a v-on:click="isMenuOpen ? closeMenu() : openMenu()" role="button" :class="isMenuOpen ? 'navbar-burger burger is-active' : 'navbar-burger burger'" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div :class="isMenuOpen ? 'navbar-menu is-active' : 'navbar-menu'">
            <div class="navbar-start" @click="closeMenu()">
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
                        <a class="button button-cta" @click="toggleSocialButtons()" href="https://docs.google.com/document/d/1z-7fn0zN01tiEKbpnxmlNfx1EiSaNcAwgQxBGVaCjLA/edit?usp=sharing" target="_blank" rel="noopener" v-else>
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
            openMenu: function () {
                if (this.isMenuOpen)
                    return;

                this.isMenuOpen = true
            },

            closeMenu: function () {
                if (!this.isMenuOpen)
                    return;

                this.isMenuOpen = false
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
        font-size: 2.75vw;
        text-shadow: 0px 2px #6b65a7, 3px 3px #6b65a7, 4px 4px #6b65a7;
    }

    @media only screen and (max-width: 500px) {
        .logo {
            font-size: 8.35vw;
            text-shadow: 0px 1px #6b65a7, 1px 1px #6b65a7, 2px 2px #6b65a7;
        }
    }

    .navbar.is-transparent,
    .navbar-menu.is-active,
    .navbar .navbar-item,
    .button-social {
        background: none !important;
    }

    .navbar .burger {
        color: #6b65a7;
        font-size: 22px;
    }

    .navbar.is-blurred {
        position: fixed;
        backdrop-filter: blur(8px);
        right: 0;
        left: 0;
        z-index: 100;
        overflow: auto;
        top: 0;
        bottom: 0;
    }

    .navbar .navbar-menu.is-active {
        box-shadow: none !important;
    }
    
    .navbar .button {
        border-radius: 0;
        transition: box-shadow 300ms ease, background-color 300ms ease;
    }
    
    .has-background-light .navbar .button-cta {
        color: #f8faff;
        background-color: #6b65a7;
    }

    .has-background-light .navbar .button-cta:hover {
        background-color: #6b65a7;
        box-shadow: 8px 8px 20px 0 rgba(106, 53, 255, 0.32);
    }

    .has-background-dark .navbar .button-cta {
        color: ;
        background-color: rgba(67, 83, 255, 0.1);
        border: none;
    }

    .has-background-dark .navbar .button-cta:hover {
        background-color: #6b65a7;
    }

    .navbar.is-dark .button-social {
        color: #f8faff;
    }

    .has-background-dark .button-social.is-light:not(:hover) {
        color: #f8faff;
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

    .has-background-light .navbar .navbar-menu.is-active {
        background-color: #eef0f3;
    }

    .has-background-dark .navbar .navbar-menu.is-active {
        background-color: #2e363b;
    }

    .navbar-menu .navbar-item {
        padding-right: 22px;
        padding-left: 22px;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: -0.01em;
    }

    .navbar .navbar-menu.is-active  .navbar-item {
        font-size: 1.25rem;
        margin: 1rem;
    }

    .has-background-light .navbar .navbar-menu .navbar-item {
        color: #2d3958;
    }

    .has-background-dark .navbar .navbar-menu .navbar-item {
        color: #f8faff;
        opacity: 0.5;
        background: none;
    }

    .navbar-menu .navbar-start .navbar-item:hover,
    .navbar-menu .navbar-start .navbar-item.is-active {
        font-weight: bold;
        border: none;
        background: none;
    }
    
    .has-background-light .navbar .navbar-menu .navbar-start .navbar-item:hover,
    .has-background-light .navbar .navbar-menu .navbar-start .navbar-item.is-active {
        color: #6b65a7;
    }

    .has-background-dark .navbar .navbar-menu .navbar-start .navbar-item:hover,
    .has-background-dark .navbar .navbar-menu .navbar-start .navbar-item.is-active {
        opacity: 1;
    }

    /* Animations */

    .navbar {
      animation-duration: 500ms;
      animation-name: slideDown;
      animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1.5);
      animation-delay: 200ms;
    }

    .navbar.is-blurred .navbar-menu {
        animation-duration: 500ms;
        animation-name: slideRight;
        animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1.5);
    }

    .navbar .burger span {
        transition: all 0.2s ease-in-out 0s;
    }

    .button-social {
      animation-duration: 500ms;
      animation-name: slideDown;
      animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1.5);
      animation-fill-mode: both;
    }

    .button-social:nth-child(5) {
      animation-delay: 200ms;
    }

    .button-social:nth-child(4) {
      animation-delay: 300ms;
    }

    .button-social:nth-child(3) {
      animation-delay: 400ms;
    }

    .button-social:nth-child(2) {
      animation-delay: 500ms;
    }

    .button-social:nth-child(1) {
      animation-delay: 600ms;
    }
</style>