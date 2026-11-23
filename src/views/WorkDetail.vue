<template>
    <PaperShell :brand="brand" :columns="columns" :min-rows="4">
        <template #hero>
            <template v-if="work">
                <h1 ref="workTitle" class="wd-title" tabindex="-1">
                    <span class="wd-title__line">{{ work.title }}</span>
                    <span class="wd-title__line wd-title__line--muted" v-if="work.subTitle">{{ work.subTitle }}</span>
                </h1>

                <div class="wd-description" v-if="work.description" v-html="work.description"></div>

                <div class="wd-buttons">
                    <a :href="work.primaryLink.url" target="_blank" rel="noopener" class="wd-btn wd-btn--solid"
                        v-if="work.primaryLink && work.primaryLink.text && work.primaryLink.url">
                        {{ work.primaryLink.text }}
                    </a>
                    <a :href="work.secondaryLink.url" target="_blank" rel="noopener" class="wd-btn wd-btn--ghost"
                        v-if="work.secondaryLink && work.secondaryLink.text && work.secondaryLink.url">
                        {{ work.secondaryLink.text }}
                    </a>
                </div>
            </template>

            <div v-else-if="isLoadingWork" aria-busy="true">
                <div class="wd-skeleton"></div>
                <div class="wd-skeleton wd-skeleton--short"></div>
            </div>
        </template>

        <template v-if="work">
            <!-- Gallery: screenshots sit in ruled cells, same language as the footer grid -->
            <template v-if="gallery.length">
                <div class="wd-hatch"></div>
                <section class="wd-gallery" :class="'wd-gallery--' + Math.min(gallery.length, 3)">
                    <a v-for="(image, i) in gallery" :key="i" :href="image.url" target="_blank" rel="noopener" class="wd-shot">
                        <img :src="image.url" :alt="image.alt || work.title" loading="lazy">
                    </a>
                </section>
            </template>

            <template v-if="work.embeddedVideoUrl">
                <div class="wd-hatch"></div>
                <section class="wd-embed">
                    <IframeBloc :url="work.embeddedVideoUrl" />
                </section>
            </template>

            <template v-if="work.embeddedContent && work.embeddedContent.url">
                <div class="wd-hatch"></div>
                <section class="wd-embed">
                    <IframeBloc :url="work.embeddedContent.url" :orientation="work.embeddedContent.orientation" />
                </section>
            </template>

            <template v-if="markdownContent">
                <div class="wd-hatch"></div>
                <section class="wd-prose">
                    <MarkdownBloc :text="markdownContent" />
                </section>
            </template>
        </template>
    </PaperShell>
</template>

<script>
    import { nextTick } from 'vue'
    import WorksService from '@/services/WorksService.js'
    import MarkdownBloc from '../components/MarkdownBloc.vue'
    import IframeBloc from '../components/IframeBloc.vue'
    import PaperShell, { workColumns } from '../components/PaperShell.vue'

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
            PaperShell,
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
                this.$refs.workTitle.focus({ preventScroll: true });
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
            // the gallery, or the cover alone when there is no gallery
            gallery: function () {
                if (this.images && this.images.length) return this.images;
                return this.work && this.work.coverImage && !this.isLoadingImages ? [this.work.coverImage] : [];
            },

            columns: function () {
                return workColumns(this.work);
            },

            brand: function () {
                const w = this.work || {};
                return { logo: w.logo && w.logo.url, title: w.title, text: w.subTitle };
            }
        }
    }
</script>
