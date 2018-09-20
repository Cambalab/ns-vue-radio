export const SET_PLAYER = (state, player) => {
  state.player = player
}

export const PLAY_URL = (state, url) => {
  const playerOptions = {
    audioFile: url,
    loop: false,
    errorCallback: (err) => {
      console.log(err)
      alert({
        title: "Error",
        message: "Hubo un problema reproduciendo la transmisión",
        okButtonText: "Entendido"
      })
    }
  };

  state.play_promise = state.player
    .playFromUrl(playerOptions)
}

export const PAUSE = (state) => {
  state.player.pause();
}

export const SET_PLAY_PROMISE = (state, promise) => {
  state.play_promise = promise;
}

export const SET_PLAYER_SCREEN = (state, player_screen) => {
  state.player_screen = player_screen;
}

export const SET_CURRENT_TAB = (state, newTab) => {
  state.current_tab = newTab;
}

export const SET_FOREGROUND = (state, value) => {
  state.foreground = value;
}

export const SET_LAST_MESSAGE_ID = (state, value) => {
  state.last_message_id = value;
}

export const FIREBASE_INIT = (state, store) => {
  store.commit('SET_CURRENT_TAB', 0);
  state.firebase.init({
    onMessageReceivedCallback: function(message) {
      // console.log(message)
      if (message.foreground){
        alert({
          //title: message.title,
          message: message.body,
          okButtonText: "OK"
        }).then(() => {
          console.log("Alert dialog closed");
          store.commit('SET_FOREGROUND', true)
          switch (message.from){
            case '/topics/programacion':
              store.commit('SET_CURRENT_TAB', 1);
              break;
            case '/topics/escribinos':
              store.commit('SET_CURRENT_TAB', 2);
              break;
            case '/topics/podcasts':
              store.commit('SET_CURRENT_TAB', 3);
              break;
            case '/topics/redes':
              store.commit('SET_CURRENT_TAB', 4);
              break;
            default: // /topics/vivo || any msj
              store.commit('SET_CURRENT_TAB', 0);
              break;
          }  
        });
      } else {
        /*
        switch (message.topic){
          case 'programacion':
            store.commit('SET_CURRENT_TAB', 1);
            break;
          case 'escribinos':
            store.commit('SET_CURRENT_TAB', 2);
            break;
          case 'podcasts':
            store.commit('SET_CURRENT_TAB', 3);
            break;
          case 'redes':
            store.commit('SET_CURRENT_TAB', 4);
            break;
          default: // /topics/vivo || any msj
            store.commit('SET_CURRENT_TAB', 0);
            break;
        }
        */
        store.commit('SET_FOREGROUND', false)
        console.log(message)
        //console.log(message.data.google.message_id)google.message_id
        console.log(store.getters.getLastMessageId)
        
        if (message.data['google.message_id'] !== store.getters.getLastMessageId) {
          store.commit('SET_CURRENT_TAB', 4);
          store.commit('SET_LAST_MESSAGE_ID', message.data['google.message_id']);
        }
        
        // store.commit('SET_FOREGROUND', true)
      }
      
    }
  }).then(
    () => {
      console.log("Firebase is ready");
      state.firebase.subscribeToTopic("vivo").then(() => console.log("Subscribed to topic vivo"));
      state.firebase.subscribeToTopic("programacion").then(() => console.log("Subscribed to topic programacion"));
      state.firebase.subscribeToTopic("escribinos").then(() => console.log("Subscribed to topic escribinos"));
      state.firebase.subscribeToTopic("podcasts").then(() => console.log("Subscribed to topic podcasts"));
      state.firebase.subscribeToTopic("redes").then(() => console.log("Subscribed to topic redes"));
    },
    error => {
      console.log("firebase.init error: " + error);
    }
  );
  
}
