import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n/index.js'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
// Vue.use(i18n)
// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
