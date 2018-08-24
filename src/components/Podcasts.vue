<template>
  <ListView for="podcast in podcasts" @itemTap="onPodcastTap" backgroundColor="#000028" separatorColor="gray">
    <v-template>
      <StackLayout orientation="horizontal">
        <Label width="5%"/>
        <Label :text="podcast.titulo" color="#f63e00" width="85%" verticalAlignment="center" textWrap="true"/>
        <ActivityIndicator v-show="podcast.playing === 'loading'" busy="true" color="#f9ce35" verticalAlignment="center" height="30"/>
        <Label :text="'\ue037'" v-show="podcast.playing === 'paused'" class="mdi" fontSize="30" color="#f9ce35" verticalAlignment="center"/>
        <Label :text="'\ue034'" v-show="podcast.playing === 'playing'" class="mdi" fontSize="30" color="#f9ce35" verticalAlignment="center"/>
      </StackLayout>
    </v-template>
  </ListView>
</template>
<script>
  import { TNSPlayer } from 'nativescript-audio';

  export default {
    data: () => {
      return {
        podcasts: [
          {
            playing: 'paused',
            titulo: '168 AÑOS DE LA MUERTE DE JOSÉ DE SAN MARTÍN',
            link: 'https://ia601505.us.archive.org/0/items/SanMartinProfeCarlosVillar/2018.08.16%20-%20San%20Martin%20PARTE%2001%20-%20Profe%20Carlos%20Villar.mp3'
          },
          {
            playing: 'paused',
            titulo: 'INFORME DE CEPA | IMPACTOS DE LA CRISIS: DESPIDOS Y SUSPENSIONES EN LOS PRIMEROS MESES DE 2018',
            link: 'https://archive.org/download/cepadespidos/2018.08.14%20-%20Eva%20Sacco%20-%20Integrante%20de%20Cepa%20-%20Coyuntura.mp3'
          },
          {
            playing: 'paused',
            titulo: 'MARGARITA JARQUE (CPM): "LA SENTENCIA AL JUEZ ARIAS ES UN MENSAJE PARA QUIENES DESAFÍAN LA MIRADA OFICIAL"',
            link: 'https://archive.org/download/MargaritaJarqueAbogadaCPMJuicioALuisArias/2018.08.17%20-%20Margarita%20Jarque%20-%20Abogada%20-%20Juicio%20Pol%C3%ADtico%20a%20Luis%20Arias.mp3'
          },
          {
            playing: 'paused',
            titulo: '#TRABAJO | ESPERANDO EL IMPACTO: SE VIENEN MÁS DE 1000 DESPIDOS EN AGROINDUSTRIA',
            link: 'https://archive.org/download/IgnacioCamporaAteAgroindustria1000despidos/2018.08.14%20-%20Ignacio%20Campora%20-%20Sec%20adjunto%20de%20ATE%20Agroindustria%20-%20Trabajo%20y%20Estado.mp3'
          },
          {
            playing: 'paused',
            titulo: '168 AÑOS DE LA MUERTE DE JOSÉ DE SAN MARTÍN',
            link: 'https://ia601505.us.archive.org/0/items/SanMartinProfeCarlosVillar/2018.08.16%20-%20San%20Martin%20PARTE%2001%20-%20Profe%20Carlos%20Villar.mp3'
          },
          {
            playing: 'paused',
            titulo: 'INFORME DE CEPA | IMPACTOS DE LA CRISIS: DESPIDOS Y SUSPENSIONES EN LOS PRIMEROS MESES DE 2018',
            link: 'https://archive.org/download/cepadespidos/2018.08.14%20-%20Eva%20Sacco%20-%20Integrante%20de%20Cepa%20-%20Coyuntura.mp3'
          },
          {
            playing: 'paused',
            titulo: 'MARGARITA JARQUE (CPM): "LA SENTENCIA AL JUEZ ARIAS ES UN MENSAJE PARA QUIENES DESAFÍAN LA MIRADA OFICIAL"',
            link: 'https://archive.org/download/MargaritaJarqueAbogadaCPMJuicioALuisArias/2018.08.17%20-%20Margarita%20Jarque%20-%20Abogada%20-%20Juicio%20Pol%C3%ADtico%20a%20Luis%20Arias.mp3'
          },
          {
            playing: 'paused',
            titulo: '#TRABAJO | ESPERANDO EL IMPACTO: SE VIENEN MÁS DE 1000 DESPIDOS EN AGROINDUSTRIA',
            link: 'https://archive.org/download/IgnacioCamporaAteAgroindustria1000despidos/2018.08.14%20-%20Ignacio%20Campora%20-%20Sec%20adjunto%20de%20ATE%20Agroindustria%20-%20Trabajo%20y%20Estado.mp3'
          },
          {
            playing: 'paused',
            titulo: '168 AÑOS DE LA MUERTE DE JOSÉ DE SAN MARTÍN',
            link: 'https://ia601505.us.archive.org/0/items/SanMartinProfeCarlosVillar/2018.08.16%20-%20San%20Martin%20PARTE%2001%20-%20Profe%20Carlos%20Villar.mp3'
          },
          {
            playing: 'paused',
            titulo: 'INFORME DE CEPA | IMPACTOS DE LA CRISIS: DESPIDOS Y SUSPENSIONES EN LOS PRIMEROS MESES DE 2018',
            link: 'https://archive.org/download/cepadespidos/2018.08.14%20-%20Eva%20Sacco%20-%20Integrante%20de%20Cepa%20-%20Coyuntura.mp3'
          },
          {
            playing: 'paused',
            titulo: 'MARGARITA JARQUE (CPM): "LA SENTENCIA AL JUEZ ARIAS ES UN MENSAJE PARA QUIENES DESAFÍAN LA MIRADA OFICIAL"',
            link: 'https://archive.org/download/MargaritaJarqueAbogadaCPMJuicioALuisArias/2018.08.17%20-%20Margarita%20Jarque%20-%20Abogada%20-%20Juicio%20Pol%C3%ADtico%20a%20Luis%20Arias.mp3'
          },
          {
            playing: 'paused',
            titulo: '#TRABAJO | ESPERANDO EL IMPACTO: SE VIENEN MÁS DE 1000 DESPIDOS EN AGROINDUSTRIA',
            link: 'https://archive.org/download/IgnacioCamporaAteAgroindustria1000despidos/2018.08.14%20-%20Ignacio%20Campora%20-%20Sec%20adjunto%20de%20ATE%20Agroindustria%20-%20Trabajo%20y%20Estado.mp3'
          },
          {
            playing: 'paused',
            titulo: '168 AÑOS DE LA MUERTE DE JOSÉ DE SAN MARTÍN',
            link: 'https://ia601505.us.archive.org/0/items/SanMartinProfeCarlosVillar/2018.08.16%20-%20San%20Martin%20PARTE%2001%20-%20Profe%20Carlos%20Villar.mp3'
          },
          {
            playing: 'paused',
            titulo: 'INFORME DE CEPA | IMPACTOS DE LA CRISIS: DESPIDOS Y SUSPENSIONES EN LOS PRIMEROS MESES DE 2018',
            link: 'https://archive.org/download/cepadespidos/2018.08.14%20-%20Eva%20Sacco%20-%20Integrante%20de%20Cepa%20-%20Coyuntura.mp3'
          },
          {
            playing: 'paused',
            titulo: 'MARGARITA JARQUE (CPM): "LA SENTENCIA AL JUEZ ARIAS ES UN MENSAJE PARA QUIENES DESAFÍAN LA MIRADA OFICIAL"',
            link: 'https://archive.org/download/MargaritaJarqueAbogadaCPMJuicioALuisArias/2018.08.17%20-%20Margarita%20Jarque%20-%20Abogada%20-%20Juicio%20Pol%C3%ADtico%20a%20Luis%20Arias.mp3'
          },
          {
            playing: 'paused',
            titulo: '#TRABAJO | ESPERANDO EL IMPACTO: SE VIENEN MÁS DE 1000 DESPIDOS EN AGROINDUSTRIA',
            link: 'https://archive.org/download/IgnacioCamporaAteAgroindustria1000despidos/2018.08.14%20-%20Ignacio%20Campora%20-%20Sec%20adjunto%20de%20ATE%20Agroindustria%20-%20Trabajo%20y%20Estado.mp3'
          }
        ]
      }
    },
    computed: {
      player_screen() {
        return this.$store.getters.getPlayerScreen
      }
    },
    watch: {
      player_screen(newPlayerScreen) {
        if(newPlayerScreen !== 'PODCAST') {
          this.pauseAll()
        }
      }
    },
    methods: {
      play(podcast) {
        this.$store.commit('SET_PLAYER_SCREEN', 'PODCAST');
        podcast.playing = 'loading';
        this.$store.commit('PLAY_URL', podcast.link);
        this.$store.getters.getPlayPromise.then((res) => {
            podcast.playing = 'playing';
          })
          .catch((err) => {
            this.pause(podcast);
            alert({
              title: "Error",
              message: "Hubo un problema reproduciendo este podcast",
              okButtonText: "Entendido"
            })
          });
      },
      pause(podcast) {
        podcast.playing = 'paused';
      },
      pauseAll() {
        this.podcasts.map(podcast => this.pause(podcast));
      },
      onPodcastTap(event) {
        this.$store.commit('PAUSE');
        this.pauseAll()
        if(event.item.playing === 'paused') {
          this.play(event.item);
        }
      }
    }
  };
</script>
