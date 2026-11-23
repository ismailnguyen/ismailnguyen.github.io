<template>
    <PaperShell compact :back="back" :brand="brand" :columns="columns" :min-rows="4">
        <template #hero>
            <h1 class="wd-title" v-if="work">
                <span class="wd-title__line">{{ work.title }}</span>
                <span class="wd-title__line wd-title__line--muted">{{ label }}</span>
            </h1>
            <div v-else aria-busy="true">
                <div class="wd-skeleton"></div>
                <div class="wd-skeleton wd-skeleton--short"></div>
            </div>
        </template>

        <div class="wd-hatch"></div>
        <section class="wd-prose" v-if="text">
            <MarkdownBloc :text="text" />
        </section>
        <p class="wd-empty" v-else-if="failed">This document could not be loaded. Please try again later.</p>
        <div class="wd-prose" v-else aria-busy="true">
            <div class="wd-skeleton"></div>
            <div class="wd-skeleton wd-skeleton--short"></div>
        </div>
    </PaperShell>
</template>

<script>
    import WorksService from '@/services/WorksService.js'
    import MarkdownBloc from '../components/MarkdownBloc.vue'
    import PaperShell, { workColumns } from '../components/PaperShell.vue'

    // One view for a work's privacy policy and its license
    const KINDS = {
        privacy: { label: 'Privacy policy', field: 'markdownPrivacyUrl' },
        license: { label: 'License', field: 'markdownLicenseUrl' },
    };

    export default {
        props: ['workId', 'kind'],
        components: { MarkdownBloc, PaperShell },
        data () {
            return { work: null, text: '', failed: false };
        },
        async created() {
            try {
                this.work = await new WorksService().getPage(this.workId);
                const url = this.work[KINDS[this.kind].field];
                if (!url) throw new Error('missing document');
                const res = await fetch(url);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                this.text = await res.text();
                document.title = `${this.label} · ${this.work.title}`;
            } catch (_) {
                this.failed = true;
            }
        },
        computed: {
            label() {
                return KINDS[this.kind].label;
            },
            back() {
                return { to: '/work/' + encodeURIComponent(this.workId), label: this.work ? this.work.title : 'Back' };
            },
            brand() {
                const w = this.work || {};
                return { logo: w.logo && w.logo.url, title: w.title, text: w.subTitle };
            },
            columns() {
                return workColumns(this.work);
            },
        },
    }
</script>
