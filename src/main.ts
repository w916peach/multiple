import { createApp } from "vue";
import Root from "./App.vue";
import router from "./router/index";
import request from "./utils/request";
import API from "./api/index";
import "./assets/font/iconfont.css";
import "./utils/animate.min.css";
// import "./utils/rem.js";

const app = createApp(Root);

app.mixin({
  created() {
    this.request = request;
    this.API = API;
  },
});
app.use(router);
app.mount("#app");


