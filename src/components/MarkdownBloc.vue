<template>
    <article class="message">
        <div class="message-body">
            <div class="content" v-html="parsedContent"></div>
        </div>
    </article>
</template>

<script>
    import markdownParser from 'markdown-it';

    export default {
        props: ['text'],
        computed: {
            parsedContent: function () {
                return markdownParser().render(this.text);
            }
        }
    }
</script>
