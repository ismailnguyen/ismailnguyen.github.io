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
                    <div class="buttons">
                        <a :href="'/work/' + encodeURIComponent(work.title)" class="button button-secondary">
                            <i class="fas fa-arrow-left" title="Go back"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="section work-detail--content" v-if="hasContent()">
            <div class="container is-fullhd">
                <MarkdownBloc :text="markdownPrivacyText" />
            </div>
        </section>
    </div>
</template>

<script>
    import data from '../data.js';
    import MarkdownBloc from '../components/MarkdownBloc'

    export default {
        props: ['workTitle'],
        data () {
            return {
                works: data,
                markdownPrivacyText: ''
            }
        },
        components: {
            MarkdownBloc,
        },
        computed: {
            work: function () {
                return this.works.find(work => work.title === this.workTitle)
            }
        },
        mounted() {
            if (this.work.markdownPrivacyUrl) {
                this.loadDescription();
            }
        },
        methods: {
            loadDescription: function () {
                fetch(this.work.markdownPrivacyUrl)
                    .then(response => response.text())
                    .then(text => this.markdownPrivacyText = text);
            },

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

    .has-background-dark {
        .button-secondary {
            background-color: #3e484e;
            color: #f8faff;

            &:hover {
                background-color: #536169;
                color: #f8faff;
            }
        }
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