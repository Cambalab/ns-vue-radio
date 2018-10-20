import { setLanguage, setLanguageAndLocale, loadLanguageFile } from '../langs/utils'

export function loadDefaultLanguage({ dispatch }) {
  // const currentLanguage = window.navigator.language.split('-')[0]
  const currentLanguage = 'en'
  dispatch('changeLanguage', currentLanguage)
}

export async function changeLanguage({ commit, state }, language) {
  if (state.loadedLanguages.includes(language)) {
    setLanguage(language)
    commit('SET_LANGUAGE', { language })
    return
  }

  const locale = await loadLanguageFile(language)
  setLanguageAndLocale(language, locale)
  commit('SUCCESS_LANGUAGE_FETCH', { language })
  commit('SET_LANGUAGE', { language })
}

export const actions = {
  loadDefaultLanguage,
  changeLanguage
}
