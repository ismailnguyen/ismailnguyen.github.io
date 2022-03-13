<template>
    <nav class="navbar is-transparent is-fixed-top" :class="isMenuOpen ? 'is-blurred' : ''" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
             <router-link to="/" class="navbar-item">
                <div id="brand" class="logo"></div>
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
                            <a class="button is-light button-social button-buymeacoffee" href="//www.buymeacoffee.com/ismailnguyen" target="_blank" rel="noopener">
                                <i class="fas fa-coffee" title="Buy me a coffee"></i>
                            </a>
                        </transition>
						
                        <transition name="slide-left">
                            <a class="button is-light button-social button-dev" href="//dev.to/ismailnguyen" target="_blank" rel="noopener">
                                <i class="fab fa-dev" title="DEV Community"></i>
                            </a>
                        </transition>
						
						<transition name="slide-left">
                            <a class="button is-light button-social button-linkedin" href="//www.linkedin.com/in/ismailnguyen" target="_blank" rel="noopener">
                                <i class="fab fa-linkedin" title="LinkedIn"></i>
                            </a>
                        </transition>

                        <transition name="slide-left">
                            <a class="button is-light button-social button-paypal" href="//www.paypal.me/ismailnguyen" target="_blank" rel="noopener">
                                <i class="fab fa-paypal" title="Paypal"></i>
                            </a>
                        </transition>

                        <transition name="slide-left">
                            <a  class="button is-light button-social button-npm" href="//www.npmjs.com/~ismailnguyen" target="_blank" rel="noopener">
                                <i class="fab fa-npm" title="NPM"></i>
                            </a>
                        </transition>

                        <transition name="slide-left">
                            <a class="button is-light button-social button-github" href="//github.com/ismailnguyen" target="_blank" rel="noopener">
                                <i class="fab fa-github" title="Github"></i>
                            </a>
                        </transition>

                        <transition name="slide-left">
                            <a class="button is-light button-social button-twitter" href="https://twitter.com/ishmaa_el" target="_blank" rel="noopener">
                                <i class="fab fa-twitter" title="Twitter"></i>
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
                showSocialButtons: false
            }
        },
        components: {
        },
        mounted () {
            animate('brand', ['isma&iuml;l', 'NGUYEN']);
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

            setTheme: function (isDark) {
                if (isDark) {
                    document.body.classList.remove('has-background-light');
                    document.body.classList.add('has-background-dark');

                    return;
                }

                document.body.classList.remove('has-background-dark');
                document.body.classList.add('has-background-light');
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
                this.setTheme(this.isWindowColorSchemeDark());

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
    @font-face {
        font-family: 'Bowlby One SC';
        font-style: normal;
        font-weight: 400;
        src: url(https://fonts.gstatic.com/s/bowlbyonesc/v12/DtVlJxerQqQm37tzN3wMug9P_gH2oipOnuCABQ.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }

    @font-face {
        font-family: 'Bowlby One SC';
        font-style: normal;
        font-weight: 400;
        src: url(https://fonts.gstatic.com/s/bowlbyonesc/v12/DtVlJxerQqQm37tzN3wMug9P_g_2oipOnuA.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    .logo {
        line-height: 1.15;
        text-align: center;
        color: #f8faff;
        font-weight: 400;
        text-decoration: none;
        vertical-align: baseline;
        font-family: 'Bowlby One SC';
        font-style: normal;
        font-size: 2.75rem;
        background: linear-gradient(219deg, 
            #186cb8 19%, 
            transparent 19%,transparent 20%, 
            #2a9a9f 20%, #2a9a9f  39%,
            transparent 39%,transparent 40%, 
            #f1b211 40%, #f1b211 59% ,
            transparent 59%,transparent 60%, 
            #e83611 60%, #e83611 79%,
            transparent 79%, transparent 80%, 
            #f9002f 80%);
        background-clip: text;
        color: transparent;
        text-shadow: 0px 1px #f582ae38, 2px 2px #f582ae38, 5px 5px #f582ae38
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

    .button-dev:hover,
	.button-github:hover {
        color: #000;
    }

    .button-twitter:hover {
        color: #1aa4ef;
    }

    .button-linkedin:hover {
        color: #0073b1;
    }
	
	.button-buymeacoffee:hover {
		color: #fd0;
	}

    .has-background-light .navbar .navbar-menu.is-active,
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
	
	.button-social:nth-child(7) {
      animation-delay: 200ms;
    }
	
	.button-social:nth-child(6) {
      animation-delay: 300ms;
    }

    .button-social:nth-child(5) {
      animation-delay: 400ms;
    }

    .button-social:nth-child(4) {
      animation-delay: 500ms;
    }

    .button-social:nth-child(3) {
      animation-delay: 600ms;
    }

    .button-social:nth-child(2) {
      animation-delay: 700ms;
    }

    .button-social:nth-child(1) {
      animation-delay: 800ms;
    }
</style>