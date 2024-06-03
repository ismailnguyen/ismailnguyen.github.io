import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkExactActiveClass: 'is-active',
    routes: [
        {
            name: 'Presentation',
            path: '/',
            component: () => import('../views/Presentation.vue'),
        },
        {
            name: 'All',
            path: '/:pathMatch(.*)*',
            component: () => import('../views/Presentation.vue'),
        },
        {
            name: 'Portfolio',
            path: '/portfolio',
            component: () => import('../views/Portfolio.vue'),
            props: { showAll: true }
        },
        {
            name: 'WorkDetail',
            path: '/work/:id',
            component: () => import('../views/WorkDetail.vue'),
            props: (route) => ({ workId: route.params.id })
        },
        {
            name: 'WorkPrivacy',
            path: '/work/:id/Privacy',
            component: () => import('../views/WorkPrivacy.vue'),
            props: (route) => ({ workId: route.params.id })
        },
        {
            name: 'WorkLicense',
            path: '/work/:id/License',
            component: () => import('../views/WorkLicense.vue'),
            props: (route) => ({ workId: route.params.id })
        },
        {
            name: 'Terms',
            path: '/terms',
            component: () => import('../views/Terms.vue'),
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition)
            return savedPosition;

        if (to.hash)
            return {
                selector: to.hash
            }
        
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
