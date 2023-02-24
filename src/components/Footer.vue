<template>
    <footer class="footer">
        <div class="content has-text-centered">
            <p class="is-pulled-left">
                Handcrafted with <span @click="isHeartbeatEnabled = !isHeartbeatEnabled" :class="isHeartbeatEnabled ? 'icon is-small pulse' : 'icon is-small'">❤️</span>
            </p>
            <p class="is-pulled-right">
                <router-link to="/terms">
                    <small>
                        Terms
                    </small>
                </router-link>
            </p>
        </div>

        <div class="waves-container">
            <Waves />
        </div>
    </footer>
</template>

<script>
    import Waves from './Waves.vue'
    import 'vue-css-waves/dist/vue-css-waves.css'
    
    export default {
        data () {
            return {
                isHeartbeatEnabled: false
            }
        },
        components: {
            Waves
        },
    }
</script>

<style scoped>
    p, a {
        color: #060602 !important;
    }

    .footer {
        background: none !important;
        padding: 1rem 0 0 0;
    }

    .footer .icon {
        color: transparent;
        text-shadow: 0 0 red;
    }

    .footer .content,
    .footer .waves-container {
        animation-duration: 1s;
        animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
        animation-fill-mode: both;
    }

    .footer .content {
      animation-name: slideDown;
      animation-delay: 3s;
      padding-bottom: 1rem;
    }

    .footer .waves-container {
      animation-name: slideRight;
      animation-delay: 4.5s;
    }

    >>> .waves {
        height: auto;
        max-height: none;
    }

    .footer .content {
        font-family:'Bluu Next Bold', sans-serif;
        padding: 10px 50px; 
        letter-spacing: 6px;
        font-weight: bold
    }

    .icon.is-small {
        height: 1.25rem;
        width: 1.25rem;
    }

    .pulse {
        background-color: #fff;
        border-radius: 35px;
        position: relative;
        padding-top: 6px;
        padding-left: 6px;
        animation: pulse 2000ms linear infinite;
        -webkit-animation: pulse 2000ms linear infinite;
        -moz-animation: pulse 2000ms linear infinite;
    }

    .pulse:after,
    .pulse:before {
        display: inline-block;
        margin: auto;
        position: absolute;
        content: "";
        width: 35px;
        height: 35px;
        border-radius: 35px;
        background-color: #fff;
    }

    .pulse:after {
        z-index: -100;
        -webkit-animation: outer-ripple 2000ms linear infinite;
        -moz-animation: outer-ripple 2000ms linear infinite;
        animation: outer-ripple 2000ms linear infinite;
    }

    .pulse:before {
        z-index: -200;
        -webkit-animation: inner-ripple 2000ms linear infinite;
        -moz-animation: inner-ripple 2000ms linear infinite;
        animation: inner-ripple 2000ms linear infinite;
    }

    /* outer ripple */
    @keyframes pulse{
        0% {
            transform: scale(0.8);
            filter: alpha(opacity=50);
            opacity: 0.5;
        }
        10% {
            transform: scale(1.1);
            filter: alpha(opacity=1);
            opacity: 1;
        }
        20% {
            transform: scale(0.9);
            filter: alpha(opacity=1);
            opacity: 1;
        }
        100% {
            transform: scale(0.8);
            filter: alpha(opacity=50);
            opacity: 0.5;
        }
    }

    @-moz-keyframes pulse{
        0% {
            transform: scale(0.8);
            filter: alpha(opacity=50);
            opacity: 0.5;
        }
        10% {
            transform: scale(1.1);
            filter: alpha(opacity=1);
            opacity: 1;
        }
        20% {
            transform: scale(0.9);
            filter: alpha(opacity=1);
            opacity: 1;
        }
        100% {
            transform: scale(0.8);
            filter: alpha(opacity=50);
            opacity: 0.5;
        }
    }

    @-webkit-keyframes pulse{
        0% {
            transform: scale(0.8);
            filter: alpha(opacity=50);
            opacity: 0.5;
        }
        10% {
            transform: scale(1.1);
            filter: alpha(opacity=1);
            opacity: 1;
        }
        20% {
            transform: scale(0.9);
            filter: alpha(opacity=1);
            opacity: 1;
        }
        100% {
            transform: scale(0.8);
            filter: alpha(opacity=50);
            opacity: 0.5;
        }
    }

    @keyframes outer-ripple {
        0% {
            transform: scale(1);
            filter: alpha(opacity=50);
            opacity: 0.5;
        }
        80% {
            transform: scale(3.5);
            filter: alpha(opacity=0);
            opacity: 0;
        }
        100% {
            transform: scale(3.5);
            filter: alpha(opacity=0);
            opacity: 0;
        }
    }

    @-webkit-keyframes outer-ripple {
        0% {
            transform: scale(1);
            filter: alpha(opacity=50);
            opacity: 0.5;
        }
        80% {
            transform: scale(3.5);
            filter: alpha(opacity=0);
            opacity: 0;
        }
        100% {
            transform: scale(3.5);
            filter: alpha(opacity=0);
            opacity: 0;
        }
    }

    @-moz-keyframes outer-ripple {
        0% {
            transform: scale(1);
            filter: alpha(opacity=50);
            opacity: 0.5;
        }
        80% {
            transform: scale(3.5);
            filter: alpha(opacity=0);
            opacity: 0;
        }
        100% {
            transform: scale(3.5);
            filter: alpha(opacity=0);
            opacity: 0;
        }
    }

    /* inner ripple */
    @keyframes inner-ripple {
        0% {
            transform: scale(1);
            filter: alpha(opacity=50);
            opacity: 0.5;
        }
        30% {
            transform: scale(1);
            filter: alpha(opacity=50);
            opacity: 0.5;
        }
        100% {
            transform: scale(2.5);
            filter: alpha(opacity=0);
            opacity: 0;
        }
    }

    @-webkit-keyframes inner-ripple {
        0% {
            transform: scale(1);
            filter: alpha(opacity=50);
            opacity: 0.5;
        }
        30% {
            transform: scale(1);
            filter: alpha(opacity=50);
            opacity: 0.5;
        }
        100% {
            transform: scale(2.5);
            filter: alpha(opacity=0);
            opacity: 0;
        }
    }

    @-moz-keyframes inner-ripple {
        0% {
            transform: scale(1);
            filter: alpha(opacity=50);
            opacity: 0.5;
        }
        30% {
            transform: scale(1);
            filter: alpha(opacity=50);
            opacity: 0.5;
        }
        100% {
            transform: scale(2.5);
            filter: alpha(opacity=0);
            opacity: 0;
        }
    }
</style>