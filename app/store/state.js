export class State {
  player = undefined
  playerScreen = 'LIVE'
  playPromise = undefined
  currentTab = 0
  firebase = null // firebase,
  foreground = true
  lastMessageId = 0
  connection = true
  language = 'es'
  loadedLanguages = ['en', 'es', 'pt']
}
