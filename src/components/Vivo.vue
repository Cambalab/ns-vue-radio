<template>
  <FlexboxLayout flexDirection="column" justifyContent="space-between" backgroundColor="#000028">
    <StackLayout>
      <Label text="Lo que suena:" class="text-center font-italic m-t-20" style="color: #809393;" />
      <Label :text="progActual" class="h1 bold text-cyan text-center m-b-0"/>
    </StackLayout>
    <Image src="~/images/program-placeholder.png" height="220"/>
    <StackLayout class="spacer" style="background-color: #282928; height: 50;">
      <Label v-show="playing === 'paused'"  @tap="play" :text="'\ue037'" fontSize="48" class="mdi text-center text-orange"/>
      <Label v-show="playing === 'playing'"  @tap="pause" :text="'\ue034'" fontSize="48" class="mdi text-center text-orange"/>
      <ActivityIndicator v-show="playing === 'loading'" busy="true" class="text-orange"/>
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
        progActual: '',
        url: 'http://stream.ahijuna.fm/aire.mp3'
      }
    },
    computed: {
      player_screen() {
        return this.$store.getters.getPlayerScreen
      }
    },
    watch: {
      player_screen(newPlayerScreen) {
        if(newPlayerScreen !== 'VIVO') {
          this.playing = 'paused';
        }
      }
    },
    methods: {
      play() {
        this.$store.commit('SET_PLAYER_SCREEN', 'VIVO');
        this.playing = 'loading';
        this.$store.commit('PLAY_URL', this.url);
        this.$store.getters.getPlayPromise.then((res) => {
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
        this.$store.commit('PAUSE');
      },
      setProgramaActual() {
        ProgramaService.getProgramaActual().then((resp)=>{
          this.progActual = resp.data.programa;
        })
      }
    },
    mounted() {
      setTimeout(()=>{
        this.$store.commit('SET_PLAYER', new TNSPlayer());
      }, 0);
      this.setProgramaActual();
      setInterval(()=>{
        this.setProgramaActual();
      }, 60000);
    }
  };
</script>
