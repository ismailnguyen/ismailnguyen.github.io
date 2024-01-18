<template>
    <nav class="navbar" :class="isMenuOpen ? 'is-blurred' : ''" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
             <router-link to="/" class="navbar-item">
                <div id="brand" class="logo">Isma&iuml;l</div>
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
                            <a class="button button-social button-buymeacoffee" href="//www.buymeacoffee.com/ismailnguyen" target="_blank" rel="noopener">
                                <i class="fas fa-coffee" title="Buy me a coffee"></i>
                            </a>
                        </transition>
						
                        <transition name="slide-left">
                            <a class="button button-social button-dev" href="//dev.to/ismailnguyen" target="_blank" rel="noopener">
                                <i class="fab fa-dev" title="DEV Community"></i>
                            </a>
                        </transition>
						
						<transition name="slide-left">
                            <a class="button button-social button-linkedin" href="//www.linkedin.com/in/ismailnguyen" target="_blank" rel="noopener">
                                <i class="fab fa-linkedin" title="LinkedIn"></i>
                            </a>
                        </transition>

                        <transition name="slide-left">
                            <a class="button button-social button-paypal" href="//www.paypal.me/ismailnguyen" target="_blank" rel="noopener">
                                <i class="fab fa-paypal" title="Paypal"></i>
                            </a>
                        </transition>

                        <transition name="slide-left">
                            <a  class="button button-social button-npm" href="//www.npmjs.com/~ismailnguyen" target="_blank" rel="noopener">
                                <i class="fab fa-npm" title="NPM"></i>
                            </a>
                        </transition>

                        <transition name="slide-left">
                            <a class="button button-social button-github" href="//github.com/ismailnguyen" target="_blank" rel="noopener">
                                <i class="fab fa-github" title="Github"></i>
                            </a>
                        </transition>

                        <transition name="slide-left">
                            <a class="button button-social button-twitter" href="//twitter.com/ishmaa_el" target="_blank" rel="noopener">
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
    
    export default {
        data () {
            return {
                isMenuOpen: false,
                showSocialButtons: false
            }
        },
        components: {
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
        position: fixed;
        line-height: 1.15;
        text-align: center;
        color: #3e484e;
        font-weight: 400;
        text-decoration: none;
        vertical-align: baseline;
        font-family: 'Bowlby One SC';
        font-style: normal;
        font-size: 2.75rem;
        background: #3e484e;
        background-clip: text;
        color: transparent;
    }

    .button-social {
        background: #3e484e;
        color: #fff;
        border-radius: 0;
        border: none;
    }

    .navbar .burger {
        color: #3e484e;
        font-size: 22px;
    }

    .navbar-menu.is-active {
        background: none;
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
        color: #060602;
        font-weight: bold;
        background: #fff;
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

    .switch[type=checkbox].is-small.is-outlined+label::before,
    .switch[type=checkbox].is-small.is-outlined+label:before {
        border-color: #fff;
    }
    .switch[type=checkbox].is-small.is-outlined+label::after,
    .switch[type=checkbox].is-small.is-outlined+label:after {
        background-color: #fff;
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


    .navbar .navbar-menu a.navbar-item {
        color: #060602;
        opacity: 0.5;
        background: none;
    }

    .navbar-menu .navbar-start a.navbar-item.is-active {
        font-weight: bold;
    }
    
    .navbar .navbar-menu .navbar-start a.navbar-item:hover,
    .navbar .navbar-menu .navbar-start a.navbar-item.is-active {
        color: #060602;
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