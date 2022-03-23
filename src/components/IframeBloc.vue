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
        box-shadow: 0 13px 21px rgba(17, 26, 31, 0.5);
        border-radius: 3px;
        cursor: grab;
    }
</style>