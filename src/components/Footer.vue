<template>
    <footer class="footer" :class="this.$route.name == 'WorkDetail' ? 'is-dark': 'is-light'">
        <div class="content has-text-centered handwritten-text">
            <p class="is-pulled-left">
                Handcrafted with <i class="fa fa-heart" style="color:#6a35ff;"></i>
            </p>
            <p class="is-pulled-right">
                <router-link to="/terms">
                    <small>
                        Terms
                    </small>
                </router-link>
            </p>
        </div>
    </footer>
</template>
<style scoped>
    p, a {
        color: #bcc4da !important;
    }
</style>