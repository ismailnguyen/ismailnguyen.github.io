<template>
    <section class="hero is-light is-fullheight-with-navbar">
        <div class="hero-body">
            <div class="container has-text-left">
                <div class="columns">
                    <div class="column">
                        <h1 class="title is-1">Hey, I'm Ismaïl Nguyen.</h1>

                        <h2 class="subtitle is-4">
                            <span>&lt; &frasl; I'm a</span>
                            <span id="animatedText"></span>
                            <span>&gt;</span>
                        </h2>
                    </div>

                    <div class="column">
                        <div class="box">
                            <article class="media">
                                <div class="media-left">
                                        <figure class="image is-64x64">
                                        <img src="https://ih0.redbubble.net/image.293388391.7026/flat,1000x1000,075,f.jpg" alt="Leo da Vinci" loading="lazy">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong>Leonardo da Vinci</strong> <small>@leonardoDaVinci</small> <small>520 years ago</small>
                                            <br> Simplicity is the ultimate sophistication.
                                        </p>
                                    </div>
                                    <nav class="level is-mobile">
                                        <div class="level-left">
                                            <a class="level-item" aria-label="reply">
                                                <span class="icon is-small">
                                                    <i class="fas fa-reply" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a class="level-item" aria-label="retweet">
                                                <span class="icon is-small">
                                                    <i class="fas fa-retweet" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a class="level-item" aria-label="like" @click="isHeartbeatEnabled = !isHeartbeatEnabled">
                                                <span :class="isHeartbeatEnabled ? 'icon is-small load' : 'icon is-small'">
                                                    <i class="fas fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import TxtType from '../typing-animation'

    export default {
        data () {
            return {
                isHeartbeatEnabled: false
            }
        },
        mounted() {
            var element = document.getElementById('animatedText');
            var rotationText = [
            ' software craftsman.',
            ' family guy.',
            ' food addicted.'
            ];
            var typingSpeed = 2000;

            new TxtType(element, rotationText, typingSpeed);
        }
    }
</script>

<style scoped>
    .load {
        width: 35px;
        height: 35px;
        background-color: #F08080;
        border-radius: 35px;
        position: relative;
        animation: pulse 2000ms linear infinite;
        -webkit-animation: pulse 2000ms linear infinite;
        -moz-animation: pulse 2000ms linear infinite;
    }

    .load i{
        position: absolute;
        top: 28px;
        left: 24%;
        color: white;
        text-shadow: -1px -1px #333;
    }

    .load:after,
    .load:before {
        display: inline-block;
        margin: auto;
        position: absolute;
        content: "";
        width: 35px;
        height: 35px;
        border-radius: 35px;
        background-color: #CD5C5C;
    }

    .load:after {
        z-index: -100;
        -webkit-animation: outer-ripple 2000ms linear infinite;
        -moz-animation: outer-ripple 2000ms linear infinite;
        animation: outer-ripple 2000ms linear infinite;
    }

    .load:before {
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