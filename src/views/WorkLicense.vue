<template>
    <div>
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
                <MarkdownBloc :text="markdownLicenseText" />
            </div>
        </section>
    </div>
</template>

<script>
    import WorksService from '@/services/WorksService.js'
    import MarkdownBloc from '../components/MarkdownBloc'

    export default {
        props: ['workId'],
        data () {
            return {
                work: {},
                markdownLicenseText: ''
            }
        },
        components: {
            MarkdownBloc,
        },
        async created() {
            const worksService = new WorksService();

            this.work = await this.fetchPortfolio(worksService);

            if (this.work.markdownLicenseUrl) {
                this.loadDescription();
            }
        },
        methods: {
            fetchPortfolio: async function (worksService) {
                return worksService.getPage(this.workId);
            },

            loadDescription: function () {
                fetch(this.work.markdownLicenseUrl)
                    .then(response => response.text())
                    .then(text => this.markdownLicenseText = text);
            }
        },
        computed: {
            hasContent: function () {
                return this.markdownLicenseText;
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

    .button-secondary {
        margin-right: 10px;
        margin-left: 10px;
        background-color: #f8faff;
        color: #3e484e;
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

        &:hover {
            background-color: #d5d6d6;
            color: #3e484e;
        }
    }
</style>