import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/element.js'
import VueResource from 'vue-resource'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'


Vue.config.productionTip = false
Vue.use(VueResource)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
