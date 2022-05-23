import {createApp} from 'vue';
import App from './App.vue';
import router from "./router";
import request from "./utils/request";
import API from "./api";
import "./assets/font/iconfont.css";
import "./utils/animate.min.css";
import "./utils/rem";

const app = createApp(App);

app.mixin({
  created() {
    this.request = request;
    this.API = API;
  }
});
app.use(router);
app.mount('#app');


