<template>
    <figure class="image" :class="containerClass">
        <iframe
            :src="resolvedUrl"
            class="has-ratio"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            mozallowfullscreen
            webkitallowfullscreen
        ></iframe>
    </figure>
    
</template>

<script>
    export default {
        props: ['url', 'orientation'],
        computed: {
            // Rewrites GitHub "blob" links to a direct CDN URL for embedding
            resolvedUrl () {
                const u = this.url || ''
                const blobRe = /^https?:\/\/github\.com\/([^/]+)\/([^/]+)\/blob\/([^/?#]+)\/(.+)$/i
                const m = u.match(blobRe)
                if (m) {
                    const [, user, repo, branch, path] = m
                    // Hide pdf toolbar using #toolbar=0
                    return `https://cdn.jsdelivr.net/gh/${user}/${repo}@${branch}/${path}#toolbar=0`
                }
                return u
            },
            isPdf () {
                return /\.pdf($|[?#])/i.test(this.resolvedUrl)
            },
            containerClass () {
                if (this.isPdf) return 'is-4by3'
                return this.orientation === 'vertical' ? 'is-9by16' : 'is-16by9'
            }
        }
    }
</script>

<style scoped>
    iframe {
        border-radius: 0;
        cursor: grab;
    }
</style>
