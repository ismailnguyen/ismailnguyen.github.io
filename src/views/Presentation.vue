<template>
    <section class="hero is-light is-fullheight-with-navbar presentation">
        <div class="hero-body">
            <div class="container has-text-left">
                <div class="columns">
                    <div class="column">
                        <h3 class="subhead is-5">
                            Hi there ! I am
                        </h3>

                        <h1 class="title is-1">
                            Ismaïl NGUYEN
                        </h1>

                        <h2 class="subtitle is-4">
                            I want to make this world &lt; &frasl; better &gt; !
                        </h2>
                    </div>

                    <div class="column">
                        <Terminal :username="terminalConfiguration.username" :texts="terminalConfiguration.texts" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Terminal from '../components/Terminal.vue'

    export default {
        data () {
            return {
                terminalConfiguration: {
                    username: 'ishmaa-el:~$',
                    texts: [
                        `I'm a software craftsman.`,
                        `I'm a family guy.`,
                        `I'm a food addicted.`
                    ]
                }
            }
        },
        components: {
            Terminal
        }
    }
</script>

<style scoped>
    .presentation .subhead,
    .presentation .title,
    .presentation .subtitle,
    .presentation .terminal {
        animation-duration: 1s;
        animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
        animation-fill-mode: both;
    }

    .presentation .subhead {
        animation-name: slideUp;
        animation-delay: 700ms;
    }

    .presentation .title {
      animation-name: slideUp;
      animation-delay: 800ms;
    }

    .presentation .subtitle {
      animation-name: slideUp;
      animation-delay: 900ms;
    }

    .presentation .terminal {
      animation-name: bounceIn;
      animation-delay: 1s;
    }
</style>