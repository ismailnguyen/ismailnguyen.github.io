<template>
    <section class="hero work-detail" :class="!hasContent ? 'is-fullheight' : ''" v-if="work">
        <div class="hero-body">
            <div class="container is-fullhd has-text-centered">

                <h1 class="title is-1 is-spaced">
                    <span class="icon is-large" v-if="work.logo">
                        <img class="is-rounded work-logo" :src="work.logo.url" :alt="work.logo.alt" loading="lazy">
                    </span>

                    {{ work.title }}
                </h1>
                <div class="buttons">
                    <a :href="'/work/' + encodeURIComponent(work.id)" class="button button-secondary">
                        <i class="fas fa-arrow-left" title="Go back"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section class="section work-detail--content" v-if="hasContent">
        <div class="container is-fullhd">
            <MarkdownBloc
                title="Privacy policy"
                :text="markdownPrivacyText"
                :icon="work.logo.url"
            />
        </div>
    </section>
</template>

<script>
    import WorksService from '@/services/WorksService.js'
    import MarkdownBloc from '../components/TerminalMarkdownBloc.vue'

    export default {
        props: ['workId'],
        data () {
            return {
                work: {},
                markdownPrivacyText: ''
            }
        },
        components: {
            MarkdownBloc,
        },
        async created() {
            const worksService = new WorksService();

            this.work = await this.fetchPortfolio(worksService);

            if (this.work.markdownPrivacyUrl) {
                this.loadDescription();
            }
        },
        methods: {
            fetchPortfolio: async function (worksService) {
                return worksService.getPage(this.workId);
            },

            loadDescription: function () {
                fetch(this.work.markdownPrivacyUrl)
                    .then(response => response.text())
                    .then(text => this.markdownPrivacyText = text);
            }
        },
        computed: {
            hasContent: function () {
                return this.markdownPrivacyText;
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

    .hero-body {
        padding-bottom: 1rem;
    }

    .section.work-detail--content {
        padding-top: 0;
    }
</style>