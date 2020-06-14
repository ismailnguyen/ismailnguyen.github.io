<template>
    <div class="terminal">
        <figure class="profile-picture image is-24x24 is-pulled-right">
            <img class="is-rounded" src="/resources/images/profile.png" alt="Profile picture">
        </figure>
        <div class="terminal-body">
            <span v-html="username"></span>
            <span id="animatedText" v-html="text"></span>
        </div>
    </div>
</template>

<script>
    import TxtType from '../typing-animation'

    export default {
        props: ['username', 'texts', 'typingSpeed'],
        data () {
            return {
                text: ''
            }
        },
        mounted() {
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
        font-family: Fira Mono, Consolas, Menlo, Monaco, Courier New, Courier, monospace;
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
        }

        &-body {
            overflow-x: hidden;
            max-width: 100%;
            color: #f7fafc;
            font-size: .875rem;
            padding: 3.25rem 2.25rem 1.5rem 1.25rem;
            position: relative;
            box-sizing: border-box;

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
</style>