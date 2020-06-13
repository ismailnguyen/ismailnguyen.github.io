<template>
    <carousel :perPage="1" :paginationPadding="5" paginationColor="#404E57" paginationActiveColor="#f8faff">
        <slide v-for="(image, imageIndex) in images" :key="imageIndex">
            <figure class="image">
                <img :src="image.url" :alt="image.alt" loading="lazy">
            </figure>
        </slide>
    </carousel>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        props: ['images'],
        components: {
            Carousel,
            Slide
        },
    }
</script>

<style scoped>
    figure.image img {
        box-shadow: 0 13px 21px rgba(17, 26, 31, 0.5);
        border-radius: 3px;
        cursor: grab;
    }
</style>