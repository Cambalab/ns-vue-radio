import { i18n } from '../langs/i18n.js'
import {
  FIREBASE_INIT,
  PLAY_URL,
  PAUSE,
  SET_CONNECTION,
  SET_FOREGROUND,
  SET_LANGUAGE,
  SET_LAST_MESSAGE_ID,
  SET_CURRENT_TAB,
  SET_PLAYER,
  SUCCESS_LANGUAGE_FETCH,
  SET_PLAY_PROMISE,
  SET_PLAYER_SCREEN,
  SET_STREAMING
} from './constants'


export default {
  [SET_PLAYER]: (state, player) => {
    state.player = player
  },
  [PLAY_URL]: (state, url) => {
    const playerOptions = {
      audioFile: url,
      loop: false,
      errorCallback: err => {
        console.log('ERROR CALLBACK', err)
        state.streamingUp = false
      },
      completeCallback: () => {
        console.log('COMPLETE CALLBACK')
        state.streamingUp = false
      },
      infoCallback: info => {
        console.log('INFO CALLBACK:', JSON.stringify(info))
        state.streamingUp = false
      }
    }
    state.playPromise = state.player.playFromUrl(playerOptions)
  },
  [PAUSE]: state => {
    state.player.pause()
  },
  [SET_PLAY_PROMISE]: (state, promise) => {
    state.playPromise = promise
  },
  [SET_PLAYER_SCREEN]: (state, playerScreen) => {
    state.playerScreen = playerScreen
  },
  [SET_CURRENT_TAB]: (state, newTab) => {
    state.currentTab = state.sections[newTab]
  },
  [SET_FOREGROUND]: (state, value) => {
    state.foreground = value
  },
  [SET_LAST_MESSAGE_ID]: (state, value) => {
    state.lastMessageId = value
  },
  [FIREBASE_INIT]: (state, store) => {
    state.firebase
      .init({
        // If the app is in the foreground, onMessageReceivedCallback will be
        // called when either notification type is received.
        onMessageReceivedCallback: function (message) {
          const tabName = getTabName(message)
          if (message.foreground) {
            alert({
              title: message.title,
              message: message.body,
              okButtonText: 'OK'
            }).then(() => {
              store.commit(SET_FOREGROUND, true)
              changeTab(tabName)
            })
          } else {
            store.commit(SET_FOREGROUND, false)
            if (message.data['google.message_id'] !== store.getters.getLastMessageId) {
              changeTab(tabName)
              store.commit(SET_LAST_MESSAGE_ID, message.data['google.message_id'])
            }
          }
        }
      })
      .then(
        () => {
          state.firebase.subscribeToTopic('general').then(() => console.log('Subscribed to topic general'))
          state.firebase.subscribeToTopic('live').then(() => console.log('Subscribed to topic live'))
          state.firebase.subscribeToTopic('schedule').then(() => console.log('Subscribed to topic schedule'))
          state.firebase.subscribeToTopic('writeus').then(() => console.log('Subscribed to topic writeus'))
          state.firebase.subscribeToTopic('podcasts').then(() => console.log('Subscribed to topic podcasts'))
          state.firebase.subscribeToTopic('social').then(() => console.log('Subscribed to topic social'))
        },
        error => {
          console.log('firebase.init error: ' + error)
        }
      )

    function getTabName (message) {
      let topic
      if (message.from !== undefined) {
        topic = message.from.slice(8)
      } else {
        topic = 'default'
      }
      const tabName = message.data.topic || topic
      return tabName
    }

    function changeTab (tabName) {
      switch (tabName) {
      case 'schedule':
        store.commit(SET_CURRENT_TAB, 1)
        break
      case 'writeus':
        store.commit(SET_CURRENT_TAB, 2)
        break
      case 'podcasts':
        store.commit(SET_CURRENT_TAB, 3)
        break
      case 'social':
        store.commit(SET_CURRENT_TAB, 4)
        break
      default:
        store.commit(SET_CURRENT_TAB, 0)
        break
      }
    }
  },
  [SET_CONNECTION]: (state, connection) => {
    state.connection = connection
  },
  [SET_LANGUAGE]: (state, language) => {
    state.language = language
  },
  [SUCCESS_LANGUAGE_FETCH]: (state, language) => {
    state.loadedLanguages.push(language)
  },
  [SET_STREAMING]: (state, streamingUp) => {
    state.streamingUp = streamingUp
  }
}
