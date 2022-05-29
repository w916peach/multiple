// import Register from "../pages/register";
import Login from "../pages/login/index.vue";
import Main from "../pages/main/index.vue";
import Mood from "../pages/mood/index.vue";
import Publish from "../pages/publish/index.vue";

import mobileLogin from "../pages/mobile/login/index.vue";
import mobileMood from "../pages/mobile/mood/index.vue";
import mobileGuide from "../pages/mobile/guide/index.vue";
import Community from "../pages/mobile/mood/community/index.vue";
import Topic from "../pages/mobile/mood/topic/index.vue";
import Everyday from "../pages/mobile/mood/everyday/index.vue";
import News from "../pages/mobile/mood/news/index.vue";
import My from "../pages/mobile/mood/my/index.vue";
import Like from "../pages/mobile/mood/community/like.vue";
import Friends from "../pages/mobile/mood/community/friends.vue";
import Search from "../pages/mobile/mood/community/search.vue";
import Comment from "../pages/mobile/mood/community/comment.vue";
import MobilePublish from "../pages/mobile/mood/everyday/publish.vue";

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
    name: "mood",
    children: [
      {
        path: "",
        component: Community,
      },
      {
        path: "community",
        component: Community,
        title: "酱社区",
        name: "community",
        children: [
          {
            path: "",
            component: Like,
          },
          {
            path: "like",
            component: Like,
            title: "喜欢",
            name: "like",
          },
          {
            path: "friends",
            component: Friends,
            title: "好友",
            name: "friends",
          },
        ],
      },
      {
        path: "topic",
        component: Topic,
        title: "酱话题",
      },
      {
        path: "everyday",
        component: Everyday,
        title: "每日一酱",
        name: "everyday",
      },
      {
        path: "news",
        component: News,
        title: "酱消息",
      },
      {
        path: "my",
        component: My,
        title: "我的酱",
      },
    ],
  },

  {
    path: "/mobile/search",
    component: Search,
    title: "搜索",
    name: "search",
  },
  {
    path: "/mobile/comment",
    component: Comment,
    title: "评论详情",
    name: "comment",
  },
  {
    path: "/mobile/publish",
    component: MobilePublish,
    title: "发表心情",
    name: "mobilepublish",
  },
  {
    path: "/test",
    component: () => import("../pages/test.vue"),
  },
];
export default routes;
