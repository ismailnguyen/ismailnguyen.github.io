<template>
    <div>
        <section class="hero work-detail" :class="!hasContent() ? 'is-fullheight' : ''">
            <div class="hero-body">
                <div class="container is-fullhd has-text-centered">

                    <h1 class="title is-1 is-spaced">
                        <span class="icon is-large">
                             <img class="is-rounded work-logo" :src="work.logo.url" :alt="work.logo.alt" loading="lazy">
                        </span>

                        {{ work.title }}
                    </h1>

                    <h2 class="subtitle is-6" v-if="work.subTitle">
                        {{ work.subTitle }}
                    </h2>

                    <div class="tags">
                        <span class="tag" v-for="(tag, tagIndex) in work.tags" :key="tagIndex">
                            {{ tag }}
                        </span>
                    </div>

                    <div class="subhead" v-html="work.description"></div>

                    <div class="buttons">
                        <a :href="work.secondaryLink.url" target="_blank" class="button button-secondary" rel="noopener" v-if="work.secondaryLink">
                            {{ work.secondaryLink.text }}
                        </a>

                        <a :href="work.primaryLink.url" target="_blank" class="button button-primary" rel="noopener" v-if="work.primaryLink">
                            {{ work.primaryLink.text }}
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="section work-detail--content" v-if="work.embeddedContentUrl">
            <div class="container is-fullhd">
                <IframeBloc :url="work.embeddedContentUrl" />
            </div>
        </section>

        <section class="section work-detail--content" v-if="markdownContent">
            <div class="container is-fullhd">
                <MarkdownBloc :text="markdownContent" />
            </div>
        </section>

        <section class="hero work-detail--content">
            <div class="hero-body">
                <div class="container is-fullhd has-text-centered">
                    <WorkCarousel :images="work.images" />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import data from '../data.js';
    import MarkdownBloc from '../components/MarkdownBloc'
    import IframeBloc from '../components/IframeBloc'
    import WorkCarousel from '../components/WorkCarousel'

    export default {
        props: ['workTitle'],
        data () {
            return {
                works: data,
                markdownContent: ''
            }
        },
        components: {
            MarkdownBloc,
            IframeBloc,
            WorkCarousel
        },
        computed: {
            work: function () {
                return this.works.find(work => work.title === this.workTitle)
            }
        },
        mounted() {
            if (this.work.markdownContentUrl) {
                this.loadDescription();
            }
        },
        methods: {
            loadDescription: function () {
                fetch(this.work.markdownContentUrl)
                    .then(response => response.text())
                    .then(text => this.markdownContent = text);
            },

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
            },

            hasContent: function () {
                return this.work.images
                        || this.markdownContent
                        || this.work.embeddedContentUrl;
            }
        }
    }
</script>

<style scoped lang="scss">
    .title .icon {
        vertical-align: bottom;
        border-radius: 50px;
        background: #f8faff;
        padding: 4px;
    }

    .tags {
        display: block;
    }

    .tag {
        background-color: #3e484e;
        color: #f8faff;
        display: inline-block;
        margin-right: 5px;
        margin-bottom: 14px;
        margin-left: 5px;
        padding: 3px 16px 2px;
        border-radius: 30px !important;
        -webkit-transition: opacity 100ms ease-in-out, background-color 100ms ease-in-out;
        transition: opacity 100ms ease-in-out, background-color 100ms ease-in-out;
        font-size: 14px;
        text-decoration: none;
        text-transform: capitalize;
    }

    .buttons {
        display: inline-block;
    }

    .button-primary {
        margin-right: 10px;
        margin-left: 10px;
        padding: 9px 24px;
        background-color: #e23b7d;
        font-size: 16px;
        display: inline-block;
        -webkit-transition: background-color 80ms ease-in-out;
        transition: background-color 80ms ease-in-out;
        font-family: Circular, sans-serif;
        font-weight: 400;
        text-decoration: none;
        color: #f8faff;
        border: 0;
        line-height: inherit;
        cursor: pointer;
        border-radius: 0;
    }

    .button-primary:hover {
        background-color: #c5326d;
        color: #f8faff;
    }

    .button-secondary {
        margin-right: 10px;
        margin-left: 10px;
        background-color: #3e484e;
        color: #f8faff;
        font-size: 16px;
        display: inline-block;
        -webkit-transition: background-color 80ms ease-in-out;
        transition: background-color 80ms ease-in-out;
        font-family: Circular, sans-serif;
        font-weight: 400;
        text-decoration: none;
        padding: 9px 24px;
        font-size: 16px;
        border: 0;
        line-height: inherit;
        cursor: pointer;
        border-radius: 0;
    }

    .button-secondary:hover {
        background-color: #536169;
        color: #f8faff;
    }

    .subhead {
        max-width: 660px;
        margin: 12px auto 30px;
        font-size: 18px;
        line-height: 28px;
        font-weight: 400;
        text-align: center;
        letter-spacing: normal;
    }

    .work-detail .title,
    .work-detail .subtitle,
    .work-detail .subhead,
    .work-detail .buttons,
    .work-detail--content {
        animation-duration: 1s;
        animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
        animation-fill-mode: both;
    }

    .work-detail .title {
        animation-name: slideUp;
        animation-delay: 700ms;
    }

    .work-detail .subtitle {
      animation-name: slideUp;
      animation-delay: 800ms;
    }
    
    .work-detail .tag {
        animation-duration: 500ms;
        animation-name: bounceIn;
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1.5);
    }

    @for $i from 1 through 50 {
      .work-detail .tag:nth-child(#{$i}n) {
          animation-delay: #{($i/3 + 0.9)}s;
      }
    }

    .work-detail .subhead {
      animation-name: slideUp;
      animation-delay: 2.1s;
    }

    .work-detail .buttons {
        animation-name: slideUp;
        animation-delay: 2.2s;
    }

    .work-detail--content {
        animation-name: slideUp;
        animation-delay: 2.3s;
    }
</style>