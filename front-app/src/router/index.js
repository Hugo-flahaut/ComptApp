import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Invoices from "../views/Invoices.vue"
import Balance from "../components/Balance.vue"


Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/home",
        name: "landing",
        component: Home, Balance,
    },
    {
        path: "/invoices",
        name: "invoices",
        component: Invoices
       
    },

];

const router = new VueRouter({
    mode: process.env.IS_ELECTRON ? "hash" : "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
});

export default router;