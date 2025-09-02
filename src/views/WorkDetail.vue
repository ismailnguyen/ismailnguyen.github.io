<template>
    <section class="hero work-detail" :class="!hasContent ? 'is-fullheight' : ''" v-if="work">
        <div class="hero-body columns">
            <div class="container is-fullhd column is-half is-hidden-mobile" v-if="work.coverImage">
                <a :href="work.primaryLink.url" target="_blank" rel="noopener">
                    <figure class="image is-square">
                        <img :src="work.coverImage.url" :alt="work.coverImage.alt"  loading="lazy" />
                    </figure>
                </a>
            </div>
            <div class="container is-fullhd has-text-centered column">
                <h1 ref="workTitle" class="title is-1 is-spaced" tabindex="-1">
                    <span class="icon is-large" v-if="work.logo">
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
                    <a :href="work.secondaryLink.url"
                        target="_blank"
                        class="button button-secondary"
                        rel="noopener"
                        v-if="work.secondaryLink && work.secondaryLink.text && work.secondaryLink.url">
                        {{ work.secondaryLink.text }}
                    </a>

                    <a :href="work.primaryLink.url"
                        target="_blank"
                        class="button button-primary"
                        rel="noopener"
                        v-if="work.primaryLink && work.primaryLink.text && work.primaryLink.url">
                        {{ work.primaryLink.text }}
                    </a>

                    <a :href="'/work/' + encodeURIComponent(work.id) + '/privacy'"
                        class="button button-secondary"
                        v-if="work.markdownPrivacyUrl">
                        Privacy Policy
                    </a>

                    <a :href="'/work/' + encodeURIComponent(work.id) + '/license'"
                        class="button button-secondary"
                        v-if="work.markdownLicenseUrl">
                        License
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section class="section work-detail--content is-hidden-desktop is-hidden-tablet" v-if="work.coverImage">
        <div class="container is-fullhd">
             <figure class="image">
                <img :src="work.coverImage.url" :alt="work.coverImage.alt"  loading="lazy" />
            </figure>
        </div>
    </section>

    <section class="section work-detail--content" v-if="work.embeddedVideoUrl">
        <div class="container is-fullhd">
            <IframeBloc :url="work.embeddedVideoUrl" />
        </div>
    </section>

    <section class="section work-detail--content" v-if="work.embeddedContent && work.embeddedContent.url">
        <div class="container is-fullhd">
            <IframeBloc :url="work.embeddedContent.url" :orientation="work.embeddedContent.orientation" />
        </div>
    </section>

    <section class="hero work-detail--content" v-if="images && images.length">
        <div class="hero-body">
            <div class="container is-fullhd has-text-centered">
                <WorkCarousel :images="images" />
            </div>
        </div>
    </section>

    <section class="section work-detail--content" v-if="markdownContent">
        <div class="container is-fullhd">
            <MarkdownBloc :text="markdownContent" />
        </div>
    </section>

    <!-- Skeleton while loading -->
    <section class="section work-detail--content" v-if="isLoadingWork">
        <div class="container is-fullhd">
            <div class="skeleton skeleton-title"></div>
            <div class="skeleton skeleton-text"></div>
        </div>
    </section>
</template>

<script>
    import { nextTick } from 'vue'
    import WorksService from '@/services/WorksService.js'
    import MarkdownBloc from '../components/MarkdownBloc.vue'
    import IframeBloc from '../components/IframeBloc.vue'
    import WorkCarousel from '../components/WorkCarousel.vue'

    export default {
        props: ['workId'],
        data () {
            return {
                work: null,
                markdownContent: '',
                images: [],
                isLoadingWork: true,
                isLoadingImages: true,
                isLoadingMarkdown: false
            }
        },
        components: {
            MarkdownBloc,
            IframeBloc,
            WorkCarousel
        },
        async created() {
            const worksService = new WorksService();

            try {
                this.work = await this.fetchPortfolio(worksService);
                this.updateMeta();
            } finally {
                this.isLoadingWork = false;
            }

            if (this.work && this.work.markdownContentUrl) {
                this.loadDescription();
            }

            try {
                this.images = await worksService.getPageImages(this.workId)
            } finally {
                this.isLoadingImages = false;
            }

            await nextTick();
            if (this.$refs.workTitle && typeof this.$refs.workTitle.focus === 'function') {
                this.$refs.workTitle.focus();
            }
        },
        methods: {
            fetchPortfolio: async function (worksService) {
                return worksService.getPage(this.workId);
            },

            loadDescription: function () {
                this.isLoadingMarkdown = true;
                fetch(this.work.markdownContentUrl)
                    .then(response => response.text())
                    .then(text => this.markdownContent = text)
                    .finally(() => this.isLoadingMarkdown = false);
            },
            updateMeta: function () {
                if (!this.work) return;
                const title = this.work.title ? `${this.work.title} · Ismaïl NGUYEN` : 'Ismaïl NGUYEN';
                document.title = title;
                const desc = this.plainText(this.work.description || '') || 'A software craftsman';
                this.setMeta('meta[name="description"]', 'content', desc);
                this.setMeta('meta[property="og:title"]', 'content', title, true);
                this.setMeta('meta[property="og:description"]', 'content', desc, true);
                if (this.work.coverImage && this.work.coverImage.url) {
                    this.setMeta('meta[property="og:image"]', 'content', this.work.coverImage.url, true);
                }
            },
            setMeta: function (selector, attr, val, createIfMissing = false) {
                let el = document.head.querySelector(selector);
                if (!el && createIfMissing) {
                    el = document.createElement('meta');
                    const match = selector.match(/\[(name|property)="([^"]+)"\]/);
                    if (match) el.setAttribute(match[1], match[2]);
                    document.head.appendChild(el);
                }
                if (el) el.setAttribute(attr, val);
            },
            plainText: function (html) {
                const tmp = document.createElement('div');
                tmp.innerHTML = html;
                const text = tmp.textContent || tmp.innerText || '';
                return text.trim().replace(/\s+/g, ' ').slice(0, 200);
            }
        },
        computed: {
            hasContent: function () {
                return (this.images && this.images.length > 0)
                        || (this.markdownContent && this.markdownContent.length > 0)
                        || !!(this.work && this.work.embeddedContent && this.work.embeddedContent.url);
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
        background-color: #FFF;
        border: 1px solid #000;
        color: #000;
        display: inline-block;
        margin-right: 5px;
        margin-bottom: 14px;
        margin-left: 5px;
        padding: 3px 16px 2px;
        border-radius: 30px !important;
        transition: opacity 100ms ease-in-out, background-color 100ms ease-in-out;
        font-size: 14px;
        text-decoration: none;
        text-transform: capitalize;
    }

    .buttons {
        display: inline-block;
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

    .work-detail--content {
        background: #fff !important;
    }

    .work-detail--content + .work-detail--content {
        margin-top: 3rem;
    }

    .work-detail--content .container {
        border: 1px dashed #000;
    }

    /* Animations */

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
          animation-delay: #{(calc($i/3) + 0.9)}s;
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

    @media (prefers-reduced-motion: reduce) {
        .work-detail .title,
        .work-detail .subtitle,
        .work-detail .subhead,
        .work-detail .buttons,
        .work-detail--content {
            animation: none !important;
            transition: none !important;
        }
    }

    .skeleton { background: linear-gradient(90deg, #eee, #f5f5f5, #eee); background-size: 200% 100%; animation: shine 1.2s linear infinite; border-radius: 6px; }
    .skeleton-title { height: 28px; width: 60%; margin: 12px auto; }
    .skeleton-text { height: 16px; width: 80%; margin: 8px auto; }

    @keyframes shine { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
</style>
