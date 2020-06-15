import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import Animate from 'animate.css'

import MainView from './Views/MainView.vue'
import HelloWorldView from './Views/HelloWorldView.vue'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Animate)

const router = new VueRouter({
  routes: [
    { component: HelloWorldView, path: '/' },
    { component: MainView, path: '/main-view' }
  ]
})

const store = new Vuex.Store({
  state: {
    msg: 'Hello World!'
  }
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  Animate
}).$mount('#app')
