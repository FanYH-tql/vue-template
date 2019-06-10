import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Bus from "./lib/bus";
import axios from "./api";
Vue.config.productionTip = false;
Vue.prototype.$bus = Bus;
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
