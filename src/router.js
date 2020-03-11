import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Presentation from './views/Presentation.vue'
import AboutMe from './views/AboutMe.vue'
import Portfolio from './views/Portfolio.vue'
import WorkDetail from './views/WorkDetail.vue'
import GetInTouch from './views/GetInTouch.vue'

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
            name: 'AboutMe',
            path: '/about-me',
            component: AboutMe
        },
        {
            name: 'Portfolio',
            path: '/portfolio',
            component: Portfolio
        },
        {
            name: 'WorkDetail',
            path: '/work/:title',
            component: WorkDetail,
            props: (route) => ({ workTitle: route.params.title })
        },
        {
            name: 'GetInTouch',
            path: '/get-in-touch',
            component: GetInTouch
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