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
                            <a class="button button-social button-linkedin" href="//www.linkedin.com/in/ismailnguyen" target="_blank" rel="noopener">
                                <i class="fab fa-linkedin" title="LinkedIn"></i>
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
    .logo {
        position: fixed;
        line-height: 1.15;
        text-align: center;
        color: #000;
        font-weight: 400;
        text-decoration: none;
        vertical-align: baseline;
        font-style: normal;
        font-size: 2.75rem;
        background: #000;
        background-clip: text;
        color: transparent;
    }

    .inverted .logo {
        background: #FFF;
        color: #000;
    }

    .button-social {
        color: #000;
        border-radius: 0;
        border: none;
    }

    .navbar {
        background: #FFF !important;
    }

    .navbar .burger {
        color: #000;
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

    .button-npm:hover {
        color: #cb3837;
    }

	.button-github:hover {
        color: #000;
    }

    .button-linkedin:hover {
        color: #0073b1;
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