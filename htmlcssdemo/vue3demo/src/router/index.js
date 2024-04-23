import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    {
        path: "/",
        component:()=>import("@/views/index.vue")
    },
    {
        path: "/login",
        component: ()=> import("@/views/login.vue")
    },
    {
        path: "/render",
        component: ()=> import("@/views/render.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router