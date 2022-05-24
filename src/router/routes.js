// import Register from "../pages/register";
import Login from "../pages/login";
import Main from "../pages/main";
import Mood from "../pages/mood";
import Publish from "../pages/publish";

import mobileLogin from "../pages/mobile/login";
import mobileMood from "../pages/mobile/mood";
import mobileGuide from "../pages/mobile/guide";
import Community from "../pages/mobile/mood/community";
import Topic from "../pages/mobile/mood/topic";
import Everyday from "../pages/mobile/mood/everyday";
import News from "../pages/mobile/mood/news";
import My from "../pages/mobile/mood/my";


const routes = [
  { path: "/", redirect: "/mood" },
  // { path: '/register', component: Register, title: '注册' },
  { path: "/login", component: Login, title: "登录" },
  {
    path: "/main",
    title: "主页",
    component: Main,
    children: [],
  },
  { path: "/mood", component: Mood, title: "心情管理" },
  { path: "/mood/publish", component: Publish, title: "发布页面" },
  { path: "/mobile/guide", component: mobileGuide, title: "引导页" },
  { path: "/mobile/login", component: mobileLogin, title: "移动端登录" },
  {
    path: "/mobile/mood",
    component: mobileMood,
    title: "移动端心情管理",
    children: [
      {
        path: '',
        component: Community,
      },
      {
        path: "community",
        component: Community,
        title: "酱社区",
      },
      {
        path: "topic",
        component: Topic,
        title: '酱话题'
      },
      {
        path: "everyday",
        component: Everyday,
        title: '每日一酱'
      },
      {
        path: "news",
        component: News,
        title: '酱消息'
      },
      {
        path: "my",
        component: My,
        title: '我的酱'
      },
    ]
  },
  {
    path: "/test",
    component: () => import("../pages/test"),
  },
];

export default routes;
