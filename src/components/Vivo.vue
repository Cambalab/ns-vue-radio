<template>
  <FlexboxLayout flexDirection="column" justifyContent="space-between" backgroundColor="#000028">
    <Label text="" height="50"/>
    <StackLayout class="spacer" style="background-color: #282928; height: 50;">
      <Label v-show="playing === 'paused'" class="mdi" @tap="play" :text="'\ue037'" fontSize="48" style="text-align:center;" color="#f9ce35"/>
      <Label v-show="playing === 'playing'" class="mdi" @tap="pause" :text="'\ue034'" fontSize="48" style="text-align:center;" color="#f9ce35"/>
      <ActivityIndicator v-show="playing === 'loading'" busy="true" color="#f9ce35"/>
    </StackLayout>
  </FlexboxLayout>
</template>
<script>
  import { TNSPlayer } from 'nativescript-audio';
  export default {
    data: () => {
      return {
        playing: 'paused',
        player: undefined,
      }
    },
    methods: {
      play() {
        this.playing = 'loading';
        const playerOptions = {
          audioFile: 'http://stream.ahijuna.fm/aire.mp3',
          loop: false,
          errorCallback: (errorObject) => {
            this.playing = 'paused';
            alert({
              title: "Error",
              message: "Hubo un problema reproduciendo la transmisión",
              okButtonText: "Entendido"
            })
          }
        };
        this.player
          .playFromUrl(playerOptions)
          .then((res) => {
            this.playing = 'playing';
          })
          .catch((err) => {
            this.playing = 'paused';
            alert({
              title: "Error",
              message: "Hubo un problema reproduciendo la transmisión",
              okButtonText: "Entendido"
            })
          });
      },
      pause() {
        this.playing = 'paused';
        this.player.pause();
      }
    },
    mounted() {
      setTimeout(()=>{
        this.player = new TNSPlayer();
      },0)
    }
  };
</script>
