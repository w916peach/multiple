import Vue from "vue";
import VueRouter from "vue-router";

// import Register from "../components/register/index.vue";
// import Login from "../components/login/index.vue";
// import Nav from "../components/nav/index.vue";
// import Main from "../pages/main/index.vue";
// import Meijia from "../pages/meijia/index.vue";

import routes from "./router.js";
Vue.use(VueRouter); //给Vue挂载VueRouter

// const routes = [
//     { path: '', redirect: '/register' },
//     { path: '/register', component: Register },
//     { path: '/login', component: Login },
//     { path: '/nav', component: Nav },
//     {
//         path: '/main', component: Main,
//         children: [
//             { path: 'meijia', component: Meijia }
//         ]
//     },
// ];
const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;