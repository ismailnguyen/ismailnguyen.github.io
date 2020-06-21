<template>
    <iframe 
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        :src="`https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=${ location }&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed`"
        style="filter: grayscale(1) contrast(1.2) opacity(0.4);">
    </iframe>
</template>

<script>
    export default {
        props: ['location']
    }
</script>

<style scoped>
    iframe {
        border: 0;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        position: fixed;
        display: block;
        width: 100%;
        height: 100%;
    }
</style>