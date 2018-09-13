import Vue from 'nativescript-vue';

import store from './store';

import './sass/styles.scss';

import Home from './components/Home.vue'

Vue.config.silent = false;

Vue.registerElement('BottomNavigation', () => require('nativescript-bottom-navigation').BottomNavigation)
Vue.registerElement('BottomNavigationTab', () => require('nativescript-bottom-navigation').BottomNavigationTab)
Vue.registerElement('OnTabSelectedEventData', () => require('nativescript-bottom-navigation'));
Vue.registerElement('CardView', () => require('nativescript-cardview').CardView);


new Vue({
  store,
  render: h => h('frame', [h(Home)])
}).$start();
