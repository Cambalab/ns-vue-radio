import Vue from 'nativescript-vue';

import router from './router';

import store from './store';

import './sass/styles.scss';

Vue.config.silent = false;

Vue.registerElement('BottomNavigation', () => require('nativescript-bottom-navigation').BottomNavigation)
Vue.registerElement('BottomNavigationTab', () => require('nativescript-bottom-navigation').BottomNavigationTab)
Vue.registerElement('OnTabSelectedEventData', () => require('nativescript-bottom-navigation'));
Vue.registerElement('CardView', () => require('nativescript-cardview').CardView);

new Vue({

  router,

  store,

}).$start();
