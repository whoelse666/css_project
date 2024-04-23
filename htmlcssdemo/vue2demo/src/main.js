import Vue from 'vue'
import App from './App.vue'
import confirm from './demos/confirm'
Vue.config.productionTip = false
Vue.prototype.$confirm = confirm;
new Vue({
  render: h => h(App),
}).$mount('#app')
