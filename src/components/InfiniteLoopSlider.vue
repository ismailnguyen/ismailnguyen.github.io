<template>
   <div class="loop-slider" :style="cssClass()">
      <div class="inner">
        <div
            class="featuredposts__item" v-for="(item, index) in shuffle(items).slice(0, items_per_row)"
            :key="index"
            :title="item.title">
                <div class="featuredpost" :style="item.coverImage ? 'background-image: url(' +item.coverImage.url+ ')' : ''">
                    <div class="featuredpost__inner">
                        <div class="media">
                            <div class="media-left" v-if="item.logo">
                                <span class="icon is-large"><img :src="item.logo.url" :alt="item.title"></span>
                            </div>
                            <div class="media-content">
                                <a :href="'work/' + encodeURIComponent(item.id)" class="featuredpost__link">
                                    <span class="featuredpost__title">{{ item.title }}</span>
                                </a>
                            </div>
                        </div>
                    
                        <p class="featuredpost__description" v-if="item.subTitle">{{ item.subTitle }}</p>
                    </div>
                </div>
            </div>
      </div>
    </div>
</template>

<script>
    export default {
        props: ['items', 'duration', 'reverse', 'items_per_row'],
        methods: {
           cssClass: function () {
                return `--duration: ${this.duration}ms; --direction: ${this.reverse ? 'reverse' : 'normal'}`;
           },

            shuffle: (arr) => [...arr].sort( () => .5 - Math.random() )
        },
    }
</script>

<style scoped lang="scss">
    .featuredposts__item {
        max-width: none;
        padding: 5px;
        background: #f8faff;
        display: flex;
        align-items: center;
        gap: 0 0.2rem;
        margin-right: 1rem;
    }

    .featuredpost {
        display: block;
        position: relative;
        border-radius: 0;
        overflow: hidden;
        transform-origin: center;
        transform: scale(1) translateZ(0);
        transition: 
            filter 200ms linear,
            transform 200ms linear;
        background-size: cover;
        background-position: center;
    }

    @media (max-width: 767.98px) {
        .featuredpost {
            width: 100vw;
            height: 80vh;
        }
    }

    @media (min-width: 767.98px) {
        .featuredpost {
            width: 300px;
            height: 300px;
        }
    }

    .featuredposts__item:hover .featuredpost {
        transform: scale(1.05) translateZ(0);
    }

    .featuredpost__link {
        overflow-wrap: break-word;
        hyphens: auto;
        display: block;
        color: inherit!important;
    }

    .featuredpost__link::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }

    a {
        color: #060602 !important;
        text-decoration: none;
    }

    .featuredpost__title {
        display: block;
        font-weight: 500;
        font-size: 1.75rem;
        line-height: 1.4;
        margin-bottom: .5rem;
        text-shadow: 2px 2px 20px rgba(0,0,0,0.2);
    }

    .featuredpost__description {
        pointer-events: none;
        opacity: 0;
        transform: translateY(10px);
        transition: opacity .2s cubic-bezier(.4,0,.2,1),transform .2s cubic-bezier(.4,0,.2,1);
    }

    .featuredpost:hover .featuredpost__description, .featuredpost__link:focus+.featuredpost__description {
        transform: translateY(0);
        opacity: 1;
    }

    .loop-slider {
        /* Hide by default, and show according to screen size */
        display: none;
    }

    @media (max-width: 767.98px) {
        /* Display only first line on mobile screen */
        .loop-slider:nth-child(1) {
            display: block !important;
        }
    }

    @media (min-width: 767.98px) {
        /* Display all on large screen */
        .loop-slider {
            display: block !important;
        }
    }

    .loop-slider .inner {
        display: flex;
        width: fit-content;
        animation-name: loop;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: var(--direction);
        animation-duration: var(--duration);
    }

    @keyframes loop {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }
</style>