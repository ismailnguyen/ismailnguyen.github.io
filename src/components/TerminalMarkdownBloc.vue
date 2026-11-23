<template>
    <StaticTerminal
        :handle="title"
        :profilePicture="icon"
        :text="parsedContent"
    />
</template>

<script>
    import markdownParser from 'markdown-it';
    import StaticTerminal from './StaticTerminal.vue'

    export default {
        props: ['title', 'text', 'icon'],
        computed: {
            parsedContent: function () {
                return markdownParser().render(this.text);
            }
        },
        components: {
			StaticTerminal
        }
    }
</script>
