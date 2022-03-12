import Vue from 'vue';
import App from './App.vue';
import router from "./router/index.js";

Vue.config.productionTip = false;
new Vue({
  router, //把路由系统注入vue
  render: h => h(App),
}).$mount('#app');
