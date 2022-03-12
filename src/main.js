import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import request from "./utils/request";

Vue.prototype.request = request; 
Vue.config.productionTip = false;
new Vue({
  router, //把路由系统注入vue
  render: h => h(App),
}).$mount('#app');
