import Vue from 'nativescript-vue'
import { i18n } from './langs/i18n'
import VueDevtools from 'nativescript-vue-devtools'
import store from './store'
import './sass/styles.scss'
import Home from './components/Home.vue'
import { BottomNavigationBar, BottomNavigationTab } from '@nativescript-community/ui-material-bottomnavigationbar'
// import { CardView } from '@nstudio/nativescript-cardview'

if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools, { host: 'your-lan-ip' })
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


Vue.registerElement('BottomNavigationBar', () => BottomNavigationBar)
Vue.registerElement('BottomNavigationTab', () => BottomNavigationTab)

// Vue.registerElement('CardView', () => require('nativescript-cardview').CardView) xmlns:Card="@nstudio/nativescript-cardview" 
Vue.registerElement(
  'CardView',
  () => require('@nstudio/nativescript-cardview').CardView
);

const app = new Vue({
  store,
  i18n,
  render: h => h('frame', [h(Home)])
})

Vue.nextTick(() => {
  store.dispatch('loadDefaultLanguage')
  app.$start()
})
