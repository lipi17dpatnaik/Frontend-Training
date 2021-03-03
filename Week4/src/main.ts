import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import data from "@/assets/cards.json";

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.component('loading-overlay', Loading);

Vue.config.productionTip = false;
Vue.config.silent=true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
