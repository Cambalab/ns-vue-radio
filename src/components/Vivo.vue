<template>
  <FlexboxLayout flexDirection="column" justifyContent="space-between" backgroundColor="#000028">
    <StackLayout>
      <Label text="Estas escuchando:" height="15" style="text-align:center; font-weight:bold" color="#32DAC4"/>
      <Label :text="progActual" height="15" style="text-align:center; font-weight:bold" color="#32DAC4"/>
    </StackLayout>
    <Image src="~/images/program-placeholder.png" height="220"/>
    <StackLayout class="spacer" style="background-color: #282928; height: 50;">
      <Label v-show="playing === 'paused'" class="mdi" @tap="play" :text="'\ue037'" fontSize="48" style="text-align:center;" color="#f9ce35"/>
      <Label v-show="playing === 'playing'" class="mdi" @tap="pause" :text="'\ue034'" fontSize="48" style="text-align:center;" color="#f9ce35"/>
      <ActivityIndicator v-show="playing === 'loading'" busy="true" color="#f9ce35"/>
    </StackLayout>
  </FlexboxLayout>
</template>
<script>
  import { TNSPlayer } from 'nativescript-audio';
  import ProgramaService from '../api/ProgramaService';

  export default {
    data: () => {
      return {
        playing: 'paused',
        player: undefined,
        progActual: ''
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
      },
      setProgramaActual() {
        ProgramaService.getProgramaActual().then((resp)=>{
          this.progActual = resp.data.programa;
        })
      }
    },
    mounted() {
      setTimeout(()=>{
        this.player = new TNSPlayer();
      },0);
      this.setProgramaActual();
      setInterval(()=>{
        this.setProgramaActual();
      }, 60000);
    }
  };
</script>
