import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import Animate from 'animate.css'
import Tags from "@johmun/vue-tags-input"

import MainView from './Views/MainView.vue'
import HelloWorldView from './Views/HelloWorldView.vue'

import { actions } from './scripts/actions.js'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Animate)
Vue.use(Tags)

const router = new VueRouter({
  routes: [
    { component: HelloWorldView, path: '/cat-list' },
    { component: MainView, path: '/' }
  ]
})

const store = new Vuex.Store({
  state: {
    msg: 'Hello World!',
    tag: '',
    tags: [],
    catPic: "",
    catBreeds: [],
    catBreed: {},
    catDesc: "",
    catWiki: "",
    catOrig: "",
    vmodel: ""

  },
  props: ['cat'],
  mutations: {

    //Mutations for cat data
    setCatPic(state, newCatPic) {
      state.catPic = newCatPic
    },
    setCatBreeds(state, newCatBreed) {
      state.catBreeds = newCatBreed
    },
    setBreed(state, newBreed) {
      state.catBreed = newBreed
      console.log(state.catBreed)
    },
    setDesc(state, newDesc) {
      state.catBreed = newDesc
      console.log(state.catDesc)
    },
    setWiki(state, newWiki) {
      state.catWiki = newWiki
    },
    setOrig(state, newOrig) {
      state.catOrig = newOrig
    },
    setVmodel(state, newVmodel) {
      state.vmodel = newVmodel
    }
  },
  actions: actions
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  Animate,
  Tags
}).$mount('#app')
