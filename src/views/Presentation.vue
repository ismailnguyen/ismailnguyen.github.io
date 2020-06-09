<template>
    <section class="hero is-light is-fullheight-with-navbar presentation">
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
                        <div class="terminal">
                            <div class="terminal-body">
                                <span>Simplicity is the ultimate sophistication.</span>
                            </div>
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
    .presentation .title,
    .presentation .subtitle,
    .presentation .terminal {
        animation-duration: 1s;
        animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
        animation-fill-mode: both;
    }

    .presentation .title {
        animation-name: slideUp;
        animation-delay: 700ms;
    }

    .presentation .subtitle {
      animation-name: slideUp;
      animation-delay: 800ms;
    }

    .presentation .terminal {
      animation-name: bounceIn;
      animation-delay: 900ms;
    }

    .terminal {
        min-height: 0;
        width: 100%;
    }

    .terminal-body {
        box-shadow: 8px 8px 20px 0 rgba(106, 53, 255, 0.32);
        overflow-x: hidden;
        max-width: 100%;
        background: #2d3748;
        color: #f7fafc;
        font-size: .875rem;
        font-family: Fira Mono, Consolas, Menlo, Monaco, Courier New, Courier, monospace;
        border-radius: .5rem;
        padding: 3.25rem 2.25rem 1.5rem 1.25rem;
        position: relative;
        box-sizing: border-box;
    }
    .terminal-body:before {
        content: "";
        position: absolute;
        top: 15px;
        display: inline-block;
        width: .75rem;
        height: .75rem;
        border-radius: 50%;
        background: #f56565;
        box-shadow: 25px 0 0 #fbd38d, 50px 0 0 #48bb78;
    }
    .terminal-body span {
        display: block;
        line-height: 1.5;
    }
    .terminal-body span:before {
        content: "";
        display: inline-block;
    }
    .terminal-body span:before {
        margin-right: 0.75em;
        color: #68d391;
    }
    .terminal-body span:before {
        content: "lenoardDaVinci:~$";
    }
</style>