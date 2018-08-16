import Vue from 'nativescript-vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
  },
  strict: debug,
});

Vue.prototype.$store = store;

module.exports = store;
