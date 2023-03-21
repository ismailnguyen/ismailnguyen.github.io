<template>
    <StaticTerminal
        :handle="title"
        :profilePicture="icon"
        :text="parsedContent"
    />
</template>

<script>
    const markdownParser = require('markdown-it')();
    import StaticTerminal from '../components/StaticTerminal'

    export default {
        props: ['title', 'text', 'icon'],
        computed: {
            parsedContent: function () {
                return markdownParser.render(this.text);
            }
        },
        components: {
			StaticTerminal
        }
    }
</script>
