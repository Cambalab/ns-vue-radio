<template>
    <AbsoluteLayout>
      <Image src="~/images/program-placeholder.png" stretch="aspectFill" height="100%" top="0"/>
      <Image src="~/images/blackgradient.png" stretch="aspectFit" top="0" width="100%"/>
      <FlexboxLayout flexDirection="column" justifyContent="space-between" top="100" width="100%">
        <StackLayout alignSelf="center" width="100%">
          <Image src="~/images/microphone.png" width="30" opacity="0.7"/>
          <Label text="Estas escuchando" class="text-center text-cyan font-italic" marginTop="10" fontSize="14" />
          <Label :text="progActual" class="h2 bold text-center m-b-0" color="white"/>
        </StackLayout>
        <StackLayout class="spacer" style="height: 110;" alignSelf="center" marginTop="20">
          <Label v-show="playing === 'paused'"  @tap="play" :text="'\ue037'" fontSize="110" class="mdi text-center" color="white"/>
          <Label v-show="playing === 'playing'"  @tap="pause" :text="'\ue034'" fontSize="110" class="mdi text-center" color="white"/>
          <ActivityIndicator v-show="playing === 'loading'" busy="true" class="text-orange" color="white" height="110"/>
        </StackLayout>
      </FlexboxLayout>
    </AbsoluteLayout>
</template>
<script>
  import { TNSPlayer } from 'nativescript-audio';
  import ProgramaService from '../api/ProgramaService';

  export default {
    data: () => {
      return {
        playing: 'paused',
        progActual: '',
        url: 'http://stream.ahijuna.fm/aire.mp3',
        programas: [],
        imageProgActual: '~/images/program-placeholder.png'
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
          if(this.progActual !== resp.data.programa) {
            this.progActual = resp.data.programa;
            this.setImage()
          }
        })
      },
      setImage() {
        ProgramaService.getProgramas().then((programas) => {
          this.programas = programas.data.results;
          this.imageProgActual = this.programas.find((p) => {return p.title === this.progActual}).image
        }).catch((err) => console.log(err));
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
