import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Presentation from './views/Presentation.vue'
import Portfolio from './views/Portfolio.vue'
import WorkDetail from './views/WorkDetail.vue'
import WorkPrivacy from './views/WorkPrivacy.vue'
import WorkLicense from './views/WorkLicense.vue'
import Now from './views/Now.vue'
import Terms from './views/Terms.vue'

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'is-active',
    routes: [
        {
            name: 'Presentation',
            path: '/',
            component: Presentation
        },
        {
            name: 'All',
            path: '*',
            component: Presentation
        },
        {
            name: 'Portfolio',
            path: '/portfolio',
            component: Portfolio,
            props: { showAll: true }
        },
        {
            name: 'WorkDetail',
            path: '/work/:title',
            component: WorkDetail,
            props: (route) => ({ workTitle: route.params.title })
        },
        {
            name: 'WorkPrivacy',
            path: '/work/:title/Privacy',
            component: WorkPrivacy,
            props: (route) => ({ workTitle: route.params.title })
        },
        {
            name: 'WorkLicense',
            path: '/work/:title/License',
            component: WorkLicense,
            props: (route) => ({ workTitle: route.params.title })
        },
        {
            name: 'Resume',
            path: '/resume',
            component: WorkDetail,
            props: () => ({ workTitle: 'Resumé' })
        },
        {
            name: 'Now',
            path: '/now',
            component: Now
        },
        {
            name: 'Terms',
            path: '/terms',
            component: Terms
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