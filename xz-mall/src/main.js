import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import MyHeader from "./components/MyHeader"
import MyFooter from "./components/MyFooter"
import WinBtn from "./components/WinBtn"

Vue.component("my-header",MyHeader);
Vue.component("my-footer",MyFooter);
Vue.component("win-btn",WinBtn);

axios.defaults.baseURL="http://localhost:3002";
//将axios放入vue的原型对象中
Vue.prototype.axios=axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
