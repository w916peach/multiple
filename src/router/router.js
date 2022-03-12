import Register from "../components/register/index.vue";
import Login from "../components/login/index.vue";
import Nav from "../components/nav/index.vue";
import Main from "../pages/main/index.vue";
import Meijia from "../pages/meijia/index.vue";

const routes = [
    { path: '', redirect: '/register', title: '注册' },
    { path: '/register', component: Register, title: '注册' },
    { path: '/login', component: Login, title: '登录' },
    { path: '/nav', component: Nav, title: '导航' },
    {
        path: '/main', component: Main,
        children: [

        ], title: '主页'
    },
    { path: '/meijia', component: Meijia, title: '美甲' }
];

export default routes;