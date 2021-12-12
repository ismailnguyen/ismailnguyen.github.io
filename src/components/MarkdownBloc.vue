<template>
    <article class="message">
        <div class="message-body">
            <div class="content" v-html="parsedContent"></div>
        </div>
    </article>
</template>

<script>
    const markdownParser = require('markdown-it')();

    export default {
        props: ['text'],
        computed: {
            parsedContent: function () {
                return markdownParser.render(this.text);
            }
        }
    }
</script>

<style lang="scss">
    .has-background-dark {
        .message {
            background-color: rgb(41, 43, 51);
            color: rgb(149, 156, 177);

            &-body {
                border-color: #9a86fd;
                color: rgb(198, 207, 235);

                .content {
                    h1, h2, h3, h4 {
                        color: rgb(255, 255, 255) !important;
                    }

                    blockquote, pre, code {
                        background-color: #2a2734;
                        color: #9a86fd;
                        border-color: #9a86fd;
                    }

                    hr {
                        background-color: #9a86fd;
                    }
                }
            }
        }
    }
</style>
