import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter); //挂在vue-router插件

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;