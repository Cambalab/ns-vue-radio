import { setLanguage, setLanguageAndLocale, loadLanguageFile } from '../langs/utils'
import { Device } from '@nativescript/core' 
import { SET_LANGUAGE, SUCCESS_LANGUAGE_FETCH,  } from './constants'

const lang = Device.language

export function loadDefaultLanguage ({ dispatch }) {
  const currentLanguage = lang.split('-')[0]
  dispatch('changeLanguage', currentLanguage)
}

export async function changeLanguage ({ commit, state }, language) {
  if (state.loadedLanguages.includes(language)) {
    setLanguage(language)
    commit(SET_LANGUAGE, { language })
    return
  }

  const locale = await loadLanguageFile(language)
  setLanguageAndLocale(language, locale)
  commit(SUCCESS_LANGUAGE_FETCH, { language })
  commit(SET_LANGUAGE, { language })
}

export const actions = {
  loadDefaultLanguage,
  changeLanguage
}
