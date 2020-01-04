import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design'
import { api } from './api/data'
import 'view-design/dist/styles/iview.css'
Vue.use(ViewUI)
Vue.config.productionTip = false

Vue.prototype.$api = api

new Vue({
  render: h => h(App),
}).$mount('#app')
