<template>
    <figure class="image is-16by9">
        <iframe :src="url" class="has-ratio" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    </figure>
</template>

<script>
    export default {
        props: ['url']
    }
</script>

<style scoped>
    iframe {
        box-shadow: 0 13px 21px rgba(17, 26, 31, 0.5);
        border-radius: 3px;
        cursor: grab;
    }
</style>