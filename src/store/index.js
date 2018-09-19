import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  state: {
    player: undefined,
    player_screen: 'VIVO',
    play_promise: undefined,
    conexion: true
  },
  mutations,
  getters,
  strict: debug
})

Vue.prototype.$store = store;

module.exports = store;
