<template>
    <div class="terminal">
        <figure class="profile-picture image is-24x24 is-pulled-right is-clickable" @click="rotateProfilPicture = !rotateProfilPicture" :class="rotateProfilPicture ? 'profile-picture--rotate' : ''">
            <img class="is-rounded" :src="profilePicture" alt="Profile picture">
        </figure>
        <div class="terminal-body" @click="onButtonClick()" :class="blinkTerminal ? 'terminal-body--blink' : ''">
            <span v-html="username"></span>
            <span id="animatedText" v-html="text"></span>
        </div>
    </div>
</template>

<script>
    import TxtType from '../typing-animation'

    export default {
        props: ['username', 'texts', 'typingSpeed', 'profilePicture'],
        data () {
            return {
                text: '',
                rotateProfilPicture: false,
                blinkTerminal: false
            }
        },
        mounted () {
            if (!this.texts)
                return;

            if (this.texts.length > 1 || this.typingSpeed > 0)
            {
                this.startAnimation();
            }
            else {
                this.text = this.texts[0];
            }
        },
        methods: {
            onButtonClick: function () {
                this.blinkTerminal = !this.blinkTerminal;

                localStorage.clear();
            },

            startAnimation: function () {
                const element = document.getElementById('animatedText');

                new TxtType(element, this.texts, this.typingSpeed || 200);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .terminal {
        min-height: 0;
        width: 100%;
        box-shadow: 8px 8px 20px 0 rgba(106, 53, 255, 0.32);
        overflow-x: hidden;
        max-width: 100%;
        background: #2d3748;
        color: #f7fafc;
        font-size: .875rem;
        border-radius: .5rem;
        position: relative;
        box-sizing: border-box;

        &> .profile-picture {
            margin-top: 10px;
            margin-right: 15px;
            padding: 1px;
            background: white;
            border: 1px solid white;
            border-radius: 50px;
            
            &--rotate {
                animation-name: spin;
                animation-duration: 5000ms;
                animation-iteration-count: infinite;
                animation-timing-function: linear; 
            }
        }

        &-body {
            overflow-x: hidden;
            max-width: 100%;
            color: #f7fafc;
            font-size: .875rem;
            padding: 3.25rem 2.25rem 1.5rem 1.25rem;
            position: relative;
            box-sizing: border-box;

            &--blink {
                &:before {
                    animation: blink .5s steps(5, start) infinite;
                }
            }

            &:before {
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

            span {
                display: inline-block;
                line-height: 1.5;

                &:nth-child(1) {
                    content: "";
                    display: inline-block;
                    margin-right: 0.75em;
                    color: #68d391;
                }
            }
        }
    }

    @keyframes blink {
        to {
            visibility: hidden;
        }
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(-360deg);
        }
    }
</style>