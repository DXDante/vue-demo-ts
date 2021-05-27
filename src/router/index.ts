import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

/* webpackChunkName: "about" */
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: {
            name: 'custom'
        }
    },
    {
        path: '/home',
        name: 'home',
        component: () => import("@/views/home/index.vue")
    },
    {
        path: '/about',
        name: 'about',
        component: () => import("@/views/about/index.vue")
    },
    {
        path: '/custom',
        name: 'custom',
        component: () => import("@/views/custom/index.vue")
    },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router