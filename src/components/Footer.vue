<template>
    <footer class="footer">
        <div class="content has-text-centered handwritten-text" @click="isHeartbeatEnabled = !isHeartbeatEnabled">
            <p class="is-pulled-left">
                Handcrafted with <span :class="isHeartbeatEnabled ? 'icon is-small pulse' : 'icon is-small'"><i class="fa fa-heart" style="color:#6b65a7;"></i></span>
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
    export default {
        data () {
            return {
                isHeartbeatEnabled: false
            }
        }
    }
</script>

<style scoped>
    p, a {
        color: #808592 !important;
    }

    .footer {
        background: none !important;
    }

    .footer .content {
        animation-duration: 1s;
        animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
        animation-fill-mode: both;
    }

    .footer .content {
      animation-name: slideDown;
      animation-delay: 2s;
    }

    .handwritten-text {
        font-family: 'Waiting for the Sunrise', cursive; 
        margin: 10px 50px; 
        letter-spacing: 6px; 
        font-weight: bold
    }

    .pulse {
        background-color: #F08080;
        border-radius: 35px;
        position: relative;
        animation: pulse 2000ms linear infinite;
        -webkit-animation: pulse 2000ms linear infinite;
        -moz-animation: pulse 2000ms linear infinite;
    }

    .pulse i{
        position: absolute;
        top: 28px;
        left: 24%;
        color: white;
        text-shadow: -1px -1px #333;
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
        background-color: #CD5C5C;
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