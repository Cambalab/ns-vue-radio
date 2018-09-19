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

export const FIREBASE_INIT = (state, store) => {
  state.firebase.init({
    onMessageReceivedCallback: function(message) {
      // console.log(message)
      // console.log("Title: " + message.title);
      // console.log("Body: " + message.body);
      // if your server passed a custom property called 'foo', then do this:
      // console.log("Value of 'foo': " + message.data.foo);
      if (message.foreground == true){
        alert({
          //title: message.title,
          message: message.body,
          okButtonText: "OK"
        }).then(() => {
          console.log("Alert dialog closed");
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
        console.log(message)
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
