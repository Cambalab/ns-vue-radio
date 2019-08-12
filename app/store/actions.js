import { setLanguage, setLanguageAndLocale, loadLanguageFile } from '../langs/utils'
const lang = require('tns-core-modules/platform').device.language
import ActionTypes from 'constants'

export function loadDefaultLanguage ({ dispatch }) {
  const currentLanguage = lang.split('-')[0]
  dispatch('changeLanguage', currentLanguage)
}

export async function changeLanguage ({ commit, state }, language) {
  if (state.loadedLanguages.includes(language)) {
    setLanguage(language)
    commit(ActionTypes.SET_LANGUAGE, { language })
    return
  }

  const locale = await loadLanguageFile(language)
  setLanguageAndLocale(language, locale)
  commit(ActionTypes.SUCCESS_LANGUAGE_FETCH, { language })
  commit(ActionTypes.SET_LANGUAGE, { language })
}

export const actions = {
  loadDefaultLanguage,
  changeLanguage
}
