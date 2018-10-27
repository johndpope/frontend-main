import './bootstrap/registerGlobalHelpers'
import './bootstrap/registerVuePlugins'
import './bootstrap/registerServiceWorker'
import './bootstrap/registerControllerRouter'
import './bootstrap/registerGlobalComponents'

import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import AsyncComputed from 'vue-async-computed'

import './directives'

Vue.config.productionTip = false

Vue.use(AsyncComputed)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// Change local storage caching to something more sophsitihcated.