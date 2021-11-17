import Vue from "vue"
import VueRouter from "vue-router"

import Home from "@/pages/Home.vue"
import About from "@/pages/About.vue"
import Contact from "@/pages/Contact.vue"
import Projects from "@/pages/projects/AllProjects.vue"
import VueDo from "@/pages/projects/vue-do/App.vue"
import VueGiph from "@/pages/projects/vue-giph/App.vue"

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/demo/vue-do',
            name: 'vue-do',
            component: VueDo
        },
        {
            path: '/demo/vue-giph',
            name: 'vue-giph',
            component: VueGiph
        },
    ]
})