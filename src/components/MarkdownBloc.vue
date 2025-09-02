<template>
    <article class="message">
        <div class="message-body">
            <div class="content" v-html="parsedContent"></div>
        </div>
    </article>
</template>

<script>
    import MarkdownIt from 'markdown-it';
    import DOMPurify from 'dompurify';
    import linkAttributes from 'markdown-it-link-attributes';

    export default {
        props: ['text'],
        computed: {
            parsedContent: function () {
                const md = new MarkdownIt({ linkify: true, typographer: true });
                md.use(linkAttributes, {
                    matcher(href) {
                        return /^https?:\/\//i.test(href);
                    },
                    attrs: {
                        target: '_blank',
                        rel: 'noopener'
                    }
                });
                const html = md.render(this.text || '');
                return DOMPurify.sanitize(html);
            }
        }
    }
</script>
