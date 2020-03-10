<template>
    <section class="section has-background-light">
        
        <div class="content is-large is-centered handwritten-text">
            <h2>My works</h2>
        </div>

        <div class="tile is-ancestor">
            <div class="tile is-parent" v-for="(work, index) in works.slice(0, 4)" :key="index">
                <figure class="tile image is-3by2 is-hidden" v-if="work.primaryImage">
                    <img :src="work.primaryImage.src" :alt="work.primaryImage.alt" class="lazyload">
                </figure>
                <article class="tile is-child box">
                    <p class="title">{{ work.title }}</p>
                    <p class="subtitle">{{ work.subTitle.text }}</p>
                </article>
            </div>
        </div>
    
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-9">
                <div class="tile">
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <p class="title">{{ works[4].title }}</p>
                            <p class="subtitle">{{ works[4].subTitle.text }}</p>
                            <div class="content">
                                <p v-html="works[4].description"></p>
                            </div>
                        </article>
                    </div>
                    <div class="tile is-8 is-vertical">
                        <div class="tile">
                            <div class="tile is-parent">
                                <article class="tile is-child box">
                                    <p class="title">{{ works[5].title }}</p>
                                </article>
                            </div>
                            <div class="tile is-parent">
                                <article class="tile is-child box">
                                    <p class="title">{{ works[6].title }}</p>
                                    <p class="subtitle">{{ works[6].subTitle.text }}</p>
                                </article>
                            </div>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">{{ works[7].title }}</p>
                                <p class="subtitle">{{ works[7].subTitle.text }}</p>
                            </article>
                        </div>
                    </div>
                </div>
                <div class="tile">
                    <div class="tile is-8 is-parent">
                        <article class="tile is-child box">
                            <p class="title">Nine</p>
                            <p class="subtitle">Subtitle</p>
                            <div class="content">
                                <p>Lorem ipsuegiat facilisis.</p>
                            </div>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <p class="title">Ten</p>
                            <p class="subtitle">Subtitle</p>
                            <div class="content">
                                <p>Lorem ipslisis.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <div class="content">
                        <p class="title">Eleven</p>
                        <p class="subtitle">Subtitle</p>
                        <div class="content">
                            <p>
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>

<div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">Twelve</p>
      <p class="subtitle">Subtitle</p>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.</p>
      </div>
    </article>
  </div>
  <div class="tile is-parent is-6">
    <article class="tile is-child box">
      <p class="title">Thirteen</p>
      <p class="subtitle">Subtitle</p>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
      </div>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">Fourteen</p>
      <p class="subtitle">Subtitle</p>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.</p>
      </div>
    </article>
  </div>
</div>
        <div class="columns is-mobile is-multiline is-centered">
                
            <div class="column is-one-third-desktop is-half-tablet" v-for="(work, index) in works" :key="index">
                <div class="card work-item modal-link" @click="openWorkDetail(work)">
                    <div class="card-image" v-if="work.primaryImage">
                        <figure class="image is-3by2">
                            <img :src="work.primaryImage.src" :alt="work.primaryImage.alt" class="lazyload">
                        </figure>
                    </div>

                    <div class="card-content">
                        <div class="media">
                            
                            <div class="media-left" v-if="work.secondaryImage">
                                <figure class="image is-48x48">
                                    <img :data-src="work.secondaryImage.src" :alt="work.secondaryImage.alt" class="lazyload">
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
                    
                    <footer class="card-footer" v-if="work.readMoreLink">
                        <p class="card-footer-item">
                            <span>
                                <a :href="work.readMoreLink" target="_blank" rel="noopener" @click="openWorkDetail(work)">Read</a>
                            </span>
                        </p>
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
        components: {
        },
        methods: {
            openWorkDetail: function (work) {
                this.$router.push({ name: 'WorkDetail', params: { title: work.title } })
            }
        }
    }
</script>

<style scoped>
    .work-item .card-image img {
    border-top-left-radius: 6px;   
    border-top-right-radius: 6px;   
    }

    .work-item {
        background-color: #fff;
        border-radius: 6px;
        box-shadow: 0 1.5rem 1.5rem -1.25rem rgba(10,10,10,.05);
        display: block;
        margin-bottom: 1.5rem
    }

    .work-item {
        transition-duration: 86ms;
        transition-property: box-shadow, transform;
        will-change: box-shadow, transform
    }

    .work-item:hover {
        box-shadow: 0 3rem 3rem -1.25rem rgba(10, 10, 10, .1);
        transform: translateY(-.5rem)
    }
</style>