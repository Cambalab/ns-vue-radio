<template>
    <AbsoluteLayout>
      <Image :src="imageProgActual" stretch="aspectFill" height="100%" width="100%" top="0"  class="backgroundColorApp"/>
      <Image src="~/assets/images/blackgradient.png" stretch="aspectFit" top="0" width="100%"/>
      <FlexboxLayout flexDirection="column" justifyContent="space-between" top="100" width="100%">
        <StackLayout alignSelf="center" width="100%">
          <Image src="~/assets/images/microphone.png" width="30" opacity="0.7"/>
          <Label text="Estas escuchando" class="text-center primaryTextColorApp font-italic" marginTop="10" fontSize="14" />
          <Label :text="progActual" class="h2 bold text-center m-b-0 secondaryTextColorApp" textWrap="true"/>
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
        url: 'http://', // stream
        programas: [],
        imageProgActual: ''
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
          this.programas = programas.data;
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
