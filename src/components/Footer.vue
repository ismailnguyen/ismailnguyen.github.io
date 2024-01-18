<template>
    <footer class="footer">
        <div class="content has-text-centered">
            <p class="is-pulled-left">
                <small>
                    Handcrafted with passion
                </small>
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
        color: #060602 !important;
    }

    .footer {
        background: none !important;
        padding: 1rem 0 0 0;
    }

    .footer .content {
        font-family:'Bluu Next Bold', sans-serif;
        padding: 10px 50px; 
        letter-spacing: 6px;
        font-weight: bold
    }
</style>