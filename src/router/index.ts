import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

/* webpackChunkName: "about" */
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: {
            name: 'learn-typescript'
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
        path: '/learn-typescript',
        name: 'learn-typescript',
        component: () => import("@/views/learn-typescript/index.vue")
    },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router