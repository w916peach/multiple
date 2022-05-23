import { createApp } from 'vue';
import type {App} from 'vue';
import Root from './App.vue';
import router from "./router";
import request from "./utils/request";
import API from "./api";
import "./assets/font/iconfont.css";
import "./utils/animate.min.css";
import "./utils/rem";

const app: App<Element> = createApp(Root);

app.mixin({
  created() {
    this.request = request;
    this.API = API;
  }
});
app.use(router);
app.mount('#app');


