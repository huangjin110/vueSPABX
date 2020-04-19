import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)

import center from '@/views/center.vue'
import myCourse from '@/views/myCourse.vue'
import choseCourse from '@/views/choseCourse.vue'

const routes = [
    { path:'/',component: center},
    { path: '/center', component: center },
    { path: '/myCourse', component: myCourse },
    { path: '/choseCourse', component: choseCourse },
]

let router = new vueRouter({
    routes
})
export default router

