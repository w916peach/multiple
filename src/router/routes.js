import Register from "../pages/register";
import Login from "../pages/login";
import Main from "../pages/main";
import Meijia from "../pages/meijia";

const routes = [
  { path: '/', redirect: '/register'},
  { path: '/register', component: Register, title: '注册' },
  { path: '/login', component: Login, title: '登录' },
  {
    path: '/main', 
    title: '主页',
    component: Main,
    children: [],
  },
  { path: '/meijia', component: Meijia, title: '美甲' }
];

export default routes;