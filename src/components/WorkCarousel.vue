<template>
    <Carousel ref="carousel" :itemsToShow="1" v-if="images" role="region" aria-label="Image carousel" aria-live="polite" tabindex="0" @keydown.left.prevent="onPrev" @keydown.right.prevent="onNext">
        <Slide v-for="(image, imageIndex) in images" :key="imageIndex">
            <figure class="image">
                <img :src="image.url" :alt="image.alt" loading="lazy">
            </figure>
        </Slide>
    </Carousel>
    
</template>

<script>
    import { Carousel, Slide } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'

    export default {
        props: ['images'],
        components: {
            Carousel,
            Slide
        },
        methods: {
            onPrev() { this.$refs.carousel && this.$refs.carousel.prev && this.$refs.carousel.prev(); },
            onNext() { this.$refs.carousel && this.$refs.carousel.next && this.$refs.carousel.next(); }
        }
    }
</script>

<style scoped>
    figure.image img {
        box-shadow: 0 13px 21px rgba(17, 26, 31, 0.5);
        border-radius: 0;
        cursor: grab;
    }
</style>
