import Vue from "vue"
import VueRouter from "vue-router"

import Home from "@/pages/Home.vue"
import About from "@/pages/About.vue"
import Contact from "@/pages/Contact.vue"
import Projects from "@/pages/projects/AllProjects.vue"

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
    ]
})