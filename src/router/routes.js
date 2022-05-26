// import Register from "../pages/register";
import Login from "../pages/login/index.vue";
import Main from "../pages/main/index.vue";
import Mood from "../pages/mood/index.vue";
import Publish from "../pages/publish/index.vue";

import mobileLogin from "../pages/mobile/login";
import mobileMood from "../pages/mobile/mood";
import mobileGuide from "../pages/mobile/guide";
import Community from "../pages/mobile/mood/community";
import Topic from "../pages/mobile/mood/topic";
import Everyday from "../pages/mobile/mood/everyday";
import News from "../pages/mobile/mood/news";
import My from "../pages/mobile/mood/my";
import Like from "../pages/mobile/mood/community/like";
import Friends from "../pages/mobile/mood/community/friends";
import Search from "@/pages/mobile/mood/community/search";
import Comment from "@/pages/mobile/mood/community/comment";


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
    name: 'mood',
    children: [
      {
        path: '',
        component: Community,
      },
      {
        path: "community",
        component: Community,
        title: "酱社区",
        name: 'community',
        children: [
          {
            path: '',
            component: Like,
          },
          {
            path: 'like',
            component: Like,
            title: '喜欢',
            name: 'like'
          },
          {
            path: 'friends',
            component: Friends,
            title: '好友',
            name: "friends"
          }

        ]
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
    path: '/mobile/search',
    component: Search,
    title: '搜索',
    name: "search"
  },
  {
    path: '/mobile/comment',
    component: Comment,
    title: '评论详情',
    name: "comment"
  },
  {
    path: "/test",
    component: () => import("../pages/test.vue"),
  },
];
export default routes;
