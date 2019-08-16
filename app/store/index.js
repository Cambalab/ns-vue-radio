import Vue from 'nativescript-vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as getters from './getters'
import { actions } from './actions'
import { State } from './state'
// import firebase from 'nativescript-plugin-firebase'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state: new State(),
  mutations,
  getters,
  actions,
  strict: debug
})

Vue.prototype.$store = store

export default store
