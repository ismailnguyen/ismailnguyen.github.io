<template>
    <section class="hero has-background-light is-fullheight">
        <div class="hero-body">
            <div class="container is-fluid">
                <div class="tags">
                    <span class="tag is-rounded is-link has-text-weight-bold" v-for="(tag, tagIndex) in work.tags" :key="tagIndex">
                        {{ tag }}
                    </span>
                </div>

                <div class="columns is-vcentered">
                    <div class="column" v-if="work.primaryImage">
                        <figure class="image is-3by2">
                            <img :src="work.primaryImage.src" :alt="work.primaryImage.alt" loading="lazy">
                        </figure>
                    </div>

                    <div class="column ">
                        <div class="media">

                            <div class="media-left" v-if="work.secondaryImage">
                                <figure class="image is-48x48">
                                    <img :src="work.secondaryImage.src" :alt="work.secondaryImage.alt" loading="lazy">
                                </figure>
                            </div>

                            <div class="media-content">
                                <p class="title is-4">
                                    {{ work.title }}
                                </p>

                                <p class="subtitle is-6">
                                    <a :href="work.subTitle.link" target="_blank" rel="noopener" v-if="work.subTitle && work.subTitle.link">
                                        {{ work.subTitle.text }}
                                    </a>
                                    <span v-else-if="work.subTitle">
                                        {{ work.subTitle.text }}
                                    </span>
                                </p>

                                <div class="content is-medium has-text-justified" v-html="work.description"></div>

                                <div class="buttons" v-if="work.subTitle && work.subTitle.link">
                                    <a :href="work.subTitle.link" target="_blank" class="button is-link is-outlined is-light" rel="noopener">
                                        View project
                                    </a>
                                </div>

                                <div class="buttons is-pulled-right" v-if="work.readMoreLink">
                                    <a :href="work.readMoreLink" target="_blank" class="button is-link is-outlined is-light" rel="noopener">
                                        Read more
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
    import data from '../data.js';

    export default {
        props: ['workTitle'],
        data () {
            return {
                works: data
            }
        },
        computed: {
            work: function () {
                return this.works.find(work => work.title === this.workTitle)
            }
        },
        methods: {
            twitterShareLink: function () {
                return 'https://twitter.com/intent/tweet/'
                        + '?text=' + this.work.title
                        + '&url=' + this.work.readMoreLink;
            },
        
            linkedInShareLink: function () {
                return 'https://www.linkedin.com/shareArticle?mini=true'
                + '&url=' + this.work.readMoreLink
                + '&title=' + this.work.title
                + '&source=https://www.ismailnguyen.com';
            }
        }
    }
</script>