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
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <transition name="slide-left">
                            <a class="button is-light button-social button-linkedin" href="//www.linkedin.com/in/ismailnguyen" target="_blank" rel="noopener">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </transition>

                        <transition name="slide-left">
                            <a class="button is-light button-social button-paypal" href="//www.paypal.me/ismailnguyen" target="_blank" rel="noopener">
                                <i class="fab fa-paypal"></i>
                            </a>
                        </transition>

                        <transition name="slide-left">
                            <a  class="button is-light button-social button-npm" href="//www.npmjs.com/~ismailnguyen" target="_blank" rel="noopener">
                                <i class="fab fa-npm"></i>
                            </a>
                        </transition>

                        <transition name="slide-left">
                            <a class="button is-light button-social button-github" href="//github.com/ismailnguyen" target="_blank" rel="noopener">
                                <i class="fab fa-github"></i>
                            </a>
                        </transition>

                        <transition name="slide-left">
                            <a class="button is-light button-social button-twitter" href="https://twitter.com/ishmaa_el" target="_blank" rel="noopener">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import animate from '../logo-animation'
    
    export default {
        data () {
            return {
                isMenuOpen: false,
                showSocialButtons: false,
                isDarkMode: true
            }
        },
        components: {
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
            },

            onThemeSwitched: function (isSwitched) {
                this.setTheme(isSwitched);
                this.saveThemePreference(isSwitched);
            },

            setTheme: function (isDark) {
                if (isDark) {
                    document.body.classList.remove('has-background-light');
                    document.body.classList.add('has-background-dark');
                }
                else {
                    document.body.classList.remove('has-background-dark');
                    document.body.classList.add('has-background-light');
                }

                this.isDarkMode = isDark;
            },

            isThemePreferenceSaved: function () {
                return localStorage.getItem('theme');
            },

            isSavedThemePreferenceDark: function () {
                return localStorage.getItem('theme') === 'dark';
            },

            saveThemePreference: function (isDark) {
                localStorage.setItem('theme', isDark ? 'dark' : 'light')
            },

            isNight: function () {
                var date = new Date();
                return (date.getHours() >= 22 || date.getHours() < 6);
            },

            isWindowColorSchemeDark: function () {
                return window.matchMedia 
                        && window.matchMedia('(prefers-color-scheme: dark)').matches;
            },

            listenToWindowColorSchemeUpdate: function () {
                window.matchMedia('(prefers-color-scheme: dark)')
                       .addEventListener('change', e => this.setTheme(e.matches));
            },

            initializeTheme: function () {
                if (this.isThemePreferenceSaved()) {
                    this.setTheme(this.isSavedThemePreferenceDark());

                    return;
                }
                
                this.setTheme(
                    this.isNight()
                    || this.isWindowColorSchemeDark()
                );

                this.listenToWindowColorSchemeUpdate();
            }
        },
        beforeMount() {
            document.body.classList.add('has-navbar-fixed-top');

            this.initializeTheme();
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
        font-size: 2.75rem;
        text-shadow: 0px 2px #f582ae, 3px 3px #f582ae, 4px 4px #f582ae;
	}

    @media only screen and (max-width: 500px) {
        .logo {
            text-shadow: 0px 1px #f582ae, 1px 1px #f582ae, 2px 2px #f582ae;
        }
    }

    .navbar.is-transparent,
    .button-social {
        background: none !important;
    }

    .navbar .burger {
        color: #f582ae;
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

    .navbar .navbar-item .toggleWrapper {
        padding-top: .25rem;
    }
    
    .navbar .button-cta {
        border: none;
        border-radius: 5px;
        color: #f8faff;
        font-weight: bold;
        background: #f582ae;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.26);
        transition: .3s cubic-bezier(.175,.885,.32,1.275);
    }

    .navbar-item.is-active {
        background: none;
    }

    .navbar .button-cta:hover:before {
        transform: translate(3px,-3px);
    }

    .navbar .button-cta:before {
        content: "";
        pointer-events: none;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 0;
        transition: .3s cubic-bezier(.175,.885,.32,1.275);
        border-radius: 5px;
        background-color: rgba(138,61,245,.2);
    }

    .navbar .button-cta:hover {
        transform: translate(-2px,2px);
    }

    .has-background-dark .navbar .button-cta {
        color: #f8faff;
        background-color: rgba(67, 83, 255, 0.1);
        border: none;
    }

    .has-background-dark .navbar .button-cta:hover {
        background-color: #f582ae;
    }

    .has-background-light .switch[type=checkbox].is-small.is-outlined+label::before,
    .has-background-light .switch[type=checkbox].is-small.is-outlined+label:before {
        border-color: #f582ae;
    }
    .has-background-light .switch[type=checkbox].is-small.is-outlined+label::after,
    .has-background-light .switch[type=checkbox].is-small.is-outlined+label:after {
        background-color: #f582ae;
    }

    .has-background-dark .switch[type=checkbox].is-small.is-outlined+label::before,
    .has-background-dark .switch[type=checkbox].is-small.is-outlined+label:before {
        border-color: #f582ae;
        background-color: #f582ae;
    }
    .has-background-dark .switch[type=checkbox].is-small.is-outlined+label::after,
    .has-background-dark .switch[type=checkbox].is-small.is-outlined+label:after {
        background-color: #f8faff;
    }

    .navbar.is-dark .button-social,
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
        color: #000;
    }

    .button-twitter:hover {
        color: #1aa4ef;
    }

    .button-linkedin:hover {
        color: #0073b1;
    }

    .has-background-light .navbar .navbar-menu.is-active {
        background-color: none;
    }

    .has-background-dark .navbar .navbar-menu.is-active {
        background: none;
    }

    .navbar-menu .navbar-item {
        padding-right: 22px;
        padding-left: 22px;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: -0.01em;
        margin: 5px;
        border-radius: 5px;
        transition: all .1s;
    }

    .navbar .navbar-menu.is-active .navbar-item {
        font-size: 1.25rem;
        margin: 1rem;
    }

    .has-background-light .navbar .navbar-menu a.navbar-item {
        color: #2d3958;
    }

    .has-background-dark .navbar .navbar-menu a.navbar-item {
        color: #f8faff;
        opacity: 0.5;
        background: none;
    }

    .navbar-menu .navbar-start a.navbar-item.is-active {
        font-weight: bold;
    }
    
    .has-background-light .navbar .navbar-menu .navbar-start a.navbar-item:hover,
    .has-background-light .navbar .navbar-menu .navbar-start a.navbar-item.is-active {
        color: #f582ae;
    }

    .has-background-dark .navbar .navbar-menu .navbar-start a.navbar-item:hover,
    .has-background-dark .navbar .navbar-menu .navbar-start a.navbar-item.is-active {
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