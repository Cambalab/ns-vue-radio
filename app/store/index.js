import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import * as mutations from './mutations'
import * as getters from './getters'
import firebase from 'nativescript-plugin-firebase'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  state: {
    player: undefined,
    player_screen: 'VIVO',
    play_promise: undefined,
    current_tab: 0,
    firebase: firebase,
    foreground: true,
    last_message_id: 0,
    conexion: true
  },
  mutations,
  getters,
  strict: debug
})

Vue.prototype.$store = store;

export default store;
