<template>
    <figure class="image" :class="orientation === 'vertical' ? 'is-9by16' : 'is-16by9'">
        <iframe
            :src="url"
            class="has-ratio"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mozallowfullscreen webkitallowfullscreen>
        </iframe>
    </figure>
</template>

<script>
    export default {
        props: ['url', 'orientation']
    }
</script>

<style scoped>
    iframe {
        border-radius: 0;
        cursor: grab;
    }
</style>