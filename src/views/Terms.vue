<template>
    <PaperShell compact :brand="brand" :columns="columns">
        <template #hero>
            <h1 class="wd-title">
                <span class="wd-title__line">Terms And Conditions of Use</span>
                <span class="wd-title__line wd-title__line--muted">WTFPL - Do What the Fuck You Want to Public License</span>
            </h1>
            <p class="wd-description">Choose Freedom. Do What the Fuck You Want to.</p>
        </template>

        <div class="wd-hatch"></div>
        <section class="wd-prose">
            <div class="wd-prose__body">
                <p>Copyright (C) {{ year }} Isma&iuml;l NGUYEN</p>

                <p>
                    Everyone is permitted to copy and distribute verbatim or modified
                    copies of this license document, and changing it is allowed as long
                    as the name is changed.
                </p>

                <h2>
                    DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    <br>
                    TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
                </h2>

                <p>0. You just DO WHAT THE FUCK YOU WANT TO.</p>

                <p>
                    <small>
                        See more at <a href="//www.wtfpl.net" target="_blank" rel="noopener">www.wtfpl.net</a>
                    </small>
                </p>
            </div>
        </section>
    </PaperShell>
</template>

<script>
    import PaperShell from '../components/PaperShell.vue'

    export default {
        components: { PaperShell },
        data () {
            return {
                year: new Date().getFullYear(),
                brand: {
                    logo: '/resources/images/profile.png',
                    title: 'Ismaïl NGUYEN',
                    text: 'A software craftsman',
                },
                columns: [
                    { title: 'Links', items: [{ text: 'Home', to: '/' }] },
                    { title: 'Legal', items: [{ text: 'Privacy', href: '/privacy.html' }, { text: 'Terms', to: '/terms' }] },
                ],
            }
        },
        mounted() {
            document.title = 'Terms And Conditions of Use · Ismaïl NGUYEN';
        },
    }
</script>
