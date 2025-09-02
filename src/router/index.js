import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkExactActiveClass: 'is-active',
    routes: [
        {
            name: 'Presentation',
            path: '/',
            component: () => import('../views/Presentation.vue'),
            meta: {
                footerType: 'withPortfolio'
            }
        },
        {
            name: 'All',
            path: '/:pathMatch(.*)*',
            component: () => import('../views/Presentation.vue'),
            meta: {
                footerType: 'withPortfolio'
            }
        },
        {
            name: 'WorkDetail',
            path: '/work/:id',
            component: () => import('../views/WorkDetail.vue'),
            props: (route) => ({
                workId: route.params.id,
            }),
            meta: {
                footerType: 'light'
            }
        },
        {
            name: 'WorkPrivacy',
            path: '/work/:id/privacy',
            component: () => import('../views/WorkPrivacy.vue'),
            props: (route) => ({ 
                workId: route.params.id,
            }),
            meta: {
                footerType: 'light'
            }
        },
        {
            name: 'WorkLicense',
            path: '/work/:id/license',
            component: () => import('../views/WorkLicense.vue'),
            props: (route) => ({ 
                workId: route.params.id,
            }),
            meta: {
                footerType: 'light'
            }
        },
        {
            name: 'Terms',
            path: '/terms',
            component: () => import('../views/Terms.vue'),
            meta: {
                footerType: 'light'
            }
        },
        // Backward-compatible redirects for old cased paths
        { path: '/work/:id/Privacy', redirect: (to) => ({ name: 'WorkPrivacy', params: { id: to.params.id } }) },
        { path: '/work/:id/License', redirect: (to) => ({ name: 'WorkLicense', params: { id: to.params.id } }) }
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
