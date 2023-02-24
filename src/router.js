import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Presentation from './views/Presentation.vue'
import Portfolio from './views/Portfolio.vue'
import WorkDetail from './views/WorkDetail.vue'
import WorkPrivacy from './views/WorkPrivacy.vue'
import WorkLicense from './views/WorkLicense.vue'
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
            path: '/work/:id',
            component: WorkDetail,
            props: (route) => ({ workId: route.params.id })
        },
        {
            name: 'WorkPrivacy',
            path: '/work/:id/Privacy',
            component: WorkPrivacy,
            props: (route) => ({ workId: route.params.id })
        },
        {
            name: 'WorkLicense',
            path: '/work/:id/License',
            component: WorkLicense,
            props: (route) => ({ workId: route.params.id })
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