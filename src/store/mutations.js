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

export const SET_CONEXION = (state, conexion) => {
  state.conexion = conexion;
}
