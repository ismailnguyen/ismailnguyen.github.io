<template>
    <section class="section has-background-light">
        <div class="content is-large is-centered handwritten-text">
            <h2>My works</h2>
        </div>

        <div class="columns is-mobile is-multiline is-centered">
            <div class="column is-one-third-desktop is-half-tablet is-full-mobile" v-for="(work, index) in works" :key="index">
                <div class="card work-item modal-link is-clickable is-vcentered" @click="openWorkDetail(work)">
                    <div class="card-image" v-if="work.primaryImage" :style="'background: url('+work.primaryImage.src+') no-repeat'">
                        <figure class="image is-3by2">
                        </figure>
                    </div>

                    <div class="card-content">
                        <figure class="image is-3by2" v-if="work.primaryImage"></figure>
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48" v-if="work.secondaryImage">
                                    <img :src="work.secondaryImage.src" :alt="work.secondaryImage.alt" loading="lazy">
                                </figure>
                            </div>

                            <div class="media-content">
                                <p class="title is-4">{{ work.title }}</p>
                                <p class="subtitle is-6" v-if="work.subTitle">
                                    <a :href="work.subTitle.link" target="_blank" rel="noopener" v-if="work.subTitle.link">
                                        {{ work.subTitle.text }}
                                    </a>
                                    <span v-else>
                                        {{ work.subTitle.text }}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <div class="card-footer-item">
                            <button class="button is-black button-view-details is-hidden">View</button>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import data from '../data.js';

    export default {
        data () {
            return {
                works: data
            }
        },
        methods: {
            openWorkDetail: function (work) {
                this.$router.push({ name: 'WorkDetail', params: { title: work.title } })
            }
        }
    }
</script>

<style scoped>
    .card-image {
        display: block;
        background-size: cover !important;
        width: 100%;
        position: absolute;
        height: 235px;

        transition: 0.2s all ease-out;
        background-position: center;
        background-repeat: no-repeat;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        top: 0;
    }

    .work-item {
        min-height: 26em;
        margin: auto;
        background-color: #fff;
        border-radius: 6px;
        box-shadow: 0 1.5rem 1.5rem -1.25rem rgba(10,10,10,.05);
        display: block;
        margin-bottom: 1.5rem;
        transition-duration: 86ms;
        transition-property: box-shadow, transform;
        will-change: box-shadow, transform;
    }

    .work-item:hover {
        transition: all 0.3s ease-out;
        box-shadow: 0 3rem 3rem -1.25rem rgba(10, 10, 10, .1);
    }

    .work-item:hover .card-image {
        height: 100%;
        opacity: 0.3;
    }

    .work-item:hover .image {
        display: none;
    }

    .work-item:hover .button-view-details {
        display: block !important;
        position: relative;
    }

    .work-item .media {
        padding-top: 25px;
    }

    .card-footer {
        border: none;
    }
</style>