import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'

Vue.use(VueI18n)

const locale = 'es'
const messages = {
  en,
  es
}

export const i18n = new VueI18n({
  locale,
  messages
})
