<template>
    <div class="terminal">
        <figure class="profile-picture image is-24x24 is-pulled-right is-clickable" @click="rotateProfilPicture = !rotateProfilPicture" :class="rotateProfilPicture ? 'profile-picture--rotate' : ''">
            <img class="is-rounded" :src="profilePicture" :alt="handle">
        </figure>
        <div class="terminal-body" @click="onButtonClick()" :class="blinkTerminal ? 'terminal-body--blink' : ''">
            <span v-html="handle"></span>
            <article class="message">
                    <div class="message-body">
                        <div class="content" v-html="text">
                        </div>
                    </div>
            </article>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['handle', 'text', 'profilePicture'],
        data () {
            return {
                rotateProfilPicture: false,
                blinkTerminal: false
            }
        },
        methods: {
            onButtonClick: function () {
                this.blinkTerminal = !this.blinkTerminal;

                localStorage.clear();
            }
        }
    }
</script>

<style lang="scss">
    .terminal {
        min-height: 0;
        width: 100%;
        overflow-x: hidden;
        max-width: 100%;
        background: whitesmoke;
        color: #000;
        font-size: .875rem;
        border-radius: none;
        border: 3px solid black;
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
            font-size: .875rem;
            padding: 3.25rem 2.25rem 1.5rem 1.25rem;
            position: relative;
            box-sizing: border-box;

            & .message {
                background: none;

                &-body {
                    border: none;

                    & .content {
                        & h1, h2, h3, h4, h5, h6 {
                            color: #060602 !important;
                        }
                    }
                }
            }

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
                    color: #060602;
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