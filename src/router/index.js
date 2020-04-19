import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)

const routes = [
    { path:'/',component: ()=>import('@/views/center.vue')},
    { path: '/center', component: ()=>import('@/views/center.vue') },
    { path: '/myCourse', component: ()=>import('@/views/myCourse.vue') },
    { path: '/choseCourse', component: ()=>import('@/views/choseCourse.vue')},
]

let router = new vueRouter({
    routes
})
export default router

