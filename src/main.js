import Vue from "vue";
import store from "./store/index";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "../src/styles/app.scss";
import "./components";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
