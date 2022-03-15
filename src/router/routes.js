import Register from "../pages/register";
import Login from "../pages/login";
import Main from "../pages/main";
import Mood from "../pages/mood";
import Publish from "../pages/publish";

const routes = [
  { path: '/', redirect: '/mood'},
  { path: '/register', component: Register, title: '注册' },
  { path: '/login', component: Login, title: '登录' },
  {
    path: '/main', 
    title: '主页',
    component: Main,
    children: [],
  },
  { path: '/mood', component: Mood, title: '心情管理' },
  { path: '/mood/publish', component: Publish, title: '发布页面' }
];

export default routes;