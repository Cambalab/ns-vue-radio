import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './locales/en.json'

Vue.use(VueI18n)
const locale = 'en'
const messages = {
  en
}

export const i18n = new VueI18n({
  locale,
  messages
})
