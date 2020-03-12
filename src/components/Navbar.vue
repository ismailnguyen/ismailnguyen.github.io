<template>
    <nav class="navbar is-transparent is-light" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item has-background-light">
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

        <div :class="isMenuOpen ? 'navbar-menu has-background-light is-active' : 'navbar-menu'">
            <div class="navbar-start" @click="toggleMenu()">
                <router-link to="/portfolio" class="navbar-item is-tab">
                    My works
                </router-link>

                <router-link to="/about-me" class="navbar-item is-tab">
                    About me
                </router-link>

                <a href="./docs/CV_Ismail-Nguyen.pdf" target="_blank" class="navbar-item is-tab">
                    Resum&eacute;
                </a>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <transition name="slide-left">
                            <a v-show="showSocialButtons" class="button is-light button-github" href="https://github.com/ismailnguyen/" target="_blank" rel="noopener">
                                <i class="fab fa-github"></i>
                            </a>
                        </transition>

                        <transition name="slide-left">
                            <a v-show="showSocialButtons" class="button is-light button-linkedin" href="https://www.linkedin.com/in/ismailnguyen" target="_blank" rel="noopener">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </transition>

                        <transition name="slide-left">
                            <a v-show="showSocialButtons" class="button is-light button-twitter" href="https://twitter.com/ishmaa_el" target="_blank" rel="noopener">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </transition>

                        <button class="button is-primary is-light is-outlined" @click="toggleSocialButtons()">
                            <strong>{{ showSocialButtons ? 'More ?' : 'Get in touch' }}</strong>
                        </button>
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
                if (this.showSocialButtons) {
                    this.$router.push('/get-in-touch')
                    this.toggleMenu();
                }

                this.showSocialButtons = !this.showSocialButtons
            }
        }
    }
</script>

<style scoped>
    .button-github:hover {
        color: black;
    }

    .button-twitter:hover {
        color: #1aa4ef;
    }

    .button-linkedin:hover {
        color: #0073b1;
    }

    .navbar-menu .navbar-start .navbar-item.is-tab:hover {
        background-color: #0000000a;
        border-bottom-color: #fecb01;
    }

    .navbar-menu .navbar-start .navbar-item.is-tab.is-active {
        background-color: #0000000a;
        border-bottom-color: #fecb01;
        font-weight: bold;
        color: #0a0a0a;
    }
</style>