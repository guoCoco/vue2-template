import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './utils/http'
import myPlugin from './utils/myPlugin'

// global css
import './assets/style/reset.css'
import './assets/style/index.scss'

console.log(process.env)

Vue.config.productionTip = false
Vue.prototype.$http = http

Vue.use(myPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
