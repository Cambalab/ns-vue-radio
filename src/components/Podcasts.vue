<template>
  <ListView for="podcast in podcasts" @itemTap="onPodcastTap" backgroundColor="#000028" separatorColor="transparent">
    <v-template>
      <StackLayout width="100%" class="p-x-10 p-y-10">
        <FlexboxLayout orientation="horizontal" justifyContent="space-between" width="100%">
          <ActivityIndicator v-show="podcast.playing === 'loading'" busy="true" class="text-orange" alignSelf="flex-start" width="30" height="30" fontSize="30"/>
          <Label :text="'\ue038'" v-show="podcast.playing === 'paused'" class="mdi text-orange" width="30" fontSize="30" height="30" />
          <Label :text="'\ue034'" v-show="podcast.playing === 'playing'" class="mdi text-orange" width="30" fontSize="30" height="30" />
          <Label :text="podcast.titulo" class="text-orange p-l-5" width="300" flexGrow="1" flexShrink="2" fontWeight="300" textWrap="true"/>
          <Label text="11:15" class="pull-right bold" color="white" width="30" fontSize="9" opacity="0.4" alignSelf="flext-end"/>
        </FlexboxLayout>
        <Label :text="podcast.descripcion" opacity="0.6" padding="8 0 8 35" color="white" fontWeight="300" fontSize="11" width="100%" textWrap="true"/>
        <StackLayout width="100%" paddingLeft="30">
          <StackLayout width="100%" height="1" class="orange m-t-10" opacity="0.3"></StackLayout>
        </StackLayout>
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
            descripcion: "El Profe Villar hace foco en algunos aspectos de la carrera política del prócer nacional y resalta la faceta económica de sus gestas militares. Impuesto a la riqueza, expropiación de propiedades de españoles y otras medidas a favor del pueblo argentino. ",
            link: 'https://ia601505.us.archive.org/0/items/SanMartinProfeCarlosVillar/2018.08.16%20-%20San%20Martin%20PARTE%2001%20-%20Profe%20Carlos%20Villar.mp3'
          },
          {
            playing: 'paused',
            titulo: 'INFORME DE CEPA | IMPACTOS DE LA CRISIS: DESPIDOS Y SUSPENSIONES EN LOS PRIMEROS MESES DE 2018',
            descripcion: "El Centro de Economía Política Argentina presentó un nuevo informe sobre la actualidad económica y el trabajo en nuestro país. En julio hubo 6500 despidos y en el año se acumulan más de 32 mil, un 30 % más que en 2017.",
            link: 'https://archive.org/download/cepadespidos/2018.08.14%20-%20Eva%20Sacco%20-%20Integrante%20de%20Cepa%20-%20Coyuntura.mp3'
          },
          {
            playing: 'paused',
            titulo: 'MARGARITA JARQUE (CPM): "LA SENTENCIA AL JUEZ ARIAS ES UN MENSAJE PARA QUIENES DESAFÍAN LA MIRADA OFICIAL"',
            descripcion: "Esta semana, el Jurado de Enjuiciamiento de Magistrados destituyó de su cargo al juez platense que, entre otros fallos importantes, había ordenado frenar los tarifazos de las empresas de servicios públicos que perjudicaban a los usuarios.",
            link: 'https://archive.org/download/MargaritaJarqueAbogadaCPMJuicioALuisArias/2018.08.17%20-%20Margarita%20Jarque%20-%20Abogada%20-%20Juicio%20Pol%C3%ADtico%20a%20Luis%20Arias.mp3'
          },
          {
            playing: 'paused',
            titulo: '#TRABAJO | ESPERANDO EL IMPACTO: SE VIENEN MÁS DE 1000 DESPIDOS EN AGROINDUSTRIA',
            descripcion: "Ignacio Cámpora, secretario adjunto de ATE en el ministerio que conduce Miguel Etchevere, comparte la preocupación de los trabajadores y trabajadoras por una inminente ola de despidos. Además, anticipa un fuerte recorte en la ayuda a pequeños productores.  ",
            link: 'https://archive.org/download/IgnacioCamporaAteAgroindustria1000despidos/2018.08.14%20-%20Ignacio%20Campora%20-%20Sec%20adjunto%20de%20ATE%20Agroindustria%20-%20Trabajo%20y%20Estado.mp3'
          },
          {
            playing: 'paused',
            titulo: '168 AÑOS DE LA MUERTE DE JOSÉ DE SAN MARTÍN',
            descripcion: "El Profe Villar hace foco en algunos aspectos de la carrera política del prócer nacional y resalta la faceta económica de sus gestas militares. Impuesto a la riqueza, expropiación de propiedades de españoles y otras medidas a favor del pueblo argentino. ",
            link: 'https://ia601505.us.archive.org/0/items/SanMartinProfeCarlosVillar/2018.08.16%20-%20San%20Martin%20PARTE%2001%20-%20Profe%20Carlos%20Villar.mp3'
          },
          {
            playing: 'paused',
            titulo: 'INFORME DE CEPA | IMPACTOS DE LA CRISIS: DESPIDOS Y SUSPENSIONES EN LOS PRIMEROS MESES DE 2018',
            descripcion: "El Centro de Economía Política Argentina presentó un nuevo informe sobre la actualidad económica y el trabajo en nuestro país. En julio hubo 6500 despidos y en el año se acumulan más de 32 mil, un 30 % más que en 2017.",
            link: 'https://archive.org/download/cepadespidos/2018.08.14%20-%20Eva%20Sacco%20-%20Integrante%20de%20Cepa%20-%20Coyuntura.mp3'
          },
          {
            playing: 'paused',
            titulo: 'MARGARITA JARQUE (CPM): "LA SENTENCIA AL JUEZ ARIAS ES UN MENSAJE PARA QUIENES DESAFÍAN LA MIRADA OFICIAL"',
            descripcion: "Esta semana, el Jurado de Enjuiciamiento de Magistrados destituyó de su cargo al juez platense que, entre otros fallos importantes, había ordenado frenar los tarifazos de las empresas de servicios públicos que perjudicaban a los usuarios.",
            link: 'https://archive.org/download/MargaritaJarqueAbogadaCPMJuicioALuisArias/2018.08.17%20-%20Margarita%20Jarque%20-%20Abogada%20-%20Juicio%20Pol%C3%ADtico%20a%20Luis%20Arias.mp3'
          },
          {
            playing: 'paused',
            titulo: '#TRABAJO | ESPERANDO EL IMPACTO: SE VIENEN MÁS DE 1000 DESPIDOS EN AGROINDUSTRIA',
            descripcion: "Ignacio Cámpora, secretario adjunto de ATE en el ministerio que conduce Miguel Etchevere, comparte la preocupación de los trabajadores y trabajadoras por una inminente ola de despidos. Además, anticipa un fuerte recorte en la ayuda a pequeños productores.  ",
            link: 'https://archive.org/download/IgnacioCamporaAteAgroindustria1000despidos/2018.08.14%20-%20Ignacio%20Campora%20-%20Sec%20adjunto%20de%20ATE%20Agroindustria%20-%20Trabajo%20y%20Estado.mp3'
          },
          {
            playing: 'paused',
            titulo: '168 AÑOS DE LA MUERTE DE JOSÉ DE SAN MARTÍN',
            descripcion: "El Profe Villar hace foco en algunos aspectos de la carrera política del prócer nacional y resalta la faceta económica de sus gestas militares. Impuesto a la riqueza, expropiación de propiedades de españoles y otras medidas a favor del pueblo argentino. El Centro de Economía Política Argentina presentó un nuevo informe sobre la actualidad económica y el trabajo en nuestro país. En julio hubo 6500 despidos y en el año se acumulan más de 32 mil, un 30 % más que en 2017.",
            link: 'https://ia601505.us.archive.org/0/items/SanMartinProfeCarlosVillar/2018.08.16%20-%20San%20Martin%20PARTE%2001%20-%20Profe%20Carlos%20Villar.mp3'
          },
          {
            playing: 'paused',
            titulo: 'INFORME DE CEPA | IMPACTOS DE LA CRISIS: DESPIDOS Y SUSPENSIONES EN LOS PRIMEROS MESES DE 2018',
            descripcion: "El Centro de Economía Política Argentina presentó un nuevo informe sobre la actualidad económica y el trabajo en nuestro país. En julio hubo 6500 despidos y en el año se acumulan más de 32 mil, un 30 % más que en 2017.",
            link: 'https://archive.org/download/cepadespidos/2018.08.14%20-%20Eva%20Sacco%20-%20Integrante%20de%20Cepa%20-%20Coyuntura.mp3'
          },
          {
            playing: 'paused',
            titulo: 'MARGARITA JARQUE (CPM): "LA SENTENCIA AL JUEZ ARIAS ES UN MENSAJE PARA QUIENES DESAFÍAN LA MIRADA OFICIAL"',
            descripcion: "Esta semana, el Jurado de Enjuiciamiento de Magistrados destituyó de su cargo al juez platense que, entre otros fallos importantes, había ordenado frenar los tarifazos de las empresas de servicios públicos que perjudicaban a los usuarios.",
            link: 'https://archive.org/download/MargaritaJarqueAbogadaCPMJuicioALuisArias/2018.08.17%20-%20Margarita%20Jarque%20-%20Abogada%20-%20Juicio%20Pol%C3%ADtico%20a%20Luis%20Arias.mp3'
          },
          {
            playing: 'paused',
            titulo: '#TRABAJO | ESPERANDO EL IMPACTO: SE VIENEN MÁS DE 1000 DESPIDOS EN AGROINDUSTRIA',
            descripcion: "Ignacio Cámpora, secretario adjunto de ATE en el ministerio que conduce Miguel Etchevere, comparte la preocupación de los trabajadores y trabajadoras por una inminente ola de despidos. Además, anticipa un fuerte recorte en la ayuda a pequeños productores.  ",
            link: 'https://archive.org/download/IgnacioCamporaAteAgroindustria1000despidos/2018.08.14%20-%20Ignacio%20Campora%20-%20Sec%20adjunto%20de%20ATE%20Agroindustria%20-%20Trabajo%20y%20Estado.mp3'
          },
          {
            playing: 'paused',
            titulo: '168 AÑOS DE LA MUERTE DE JOSÉ DE SAN MARTÍN',
            descripcion: "El Profe Villar hace foco en algunos aspectos de la carrera política del prócer nacional y resalta la faceta económica de sus gestas militares. Impuesto a la riqueza, expropiación de propiedades de españoles y otras medidas a favor del pueblo argentino. El Centro de Economía Política Argentina presentó un nuevo informe sobre la actualidad económica y el trabajo en nuestro país. En julio hubo 6500 despidos y en el año se acumulan más de 32 mil, un 30 % más que en 2017.",
            link: 'https://ia601505.us.archive.org/0/items/SanMartinProfeCarlosVillar/2018.08.16%20-%20San%20Martin%20PARTE%2001%20-%20Profe%20Carlos%20Villar.mp3'
          },
          {
            playing: 'paused',
            titulo: 'INFORME DE CEPA | IMPACTOS DE LA CRISIS: DESPIDOS Y SUSPENSIONES EN LOS PRIMEROS MESES DE 2018',
            descripcion: "El Centro de Economía Política Argentina presentó un nuevo informe sobre la actualidad económica y el trabajo en nuestro país. En julio hubo 6500 despidos y en el año se acumulan más de 32 mil, un 30 % más que en 2017.",
            link: 'https://archive.org/download/cepadespidos/2018.08.14%20-%20Eva%20Sacco%20-%20Integrante%20de%20Cepa%20-%20Coyuntura.mp3'
          },
          {
            playing: 'paused',
            titulo: 'MARGARITA JARQUE (CPM): "LA SENTENCIA AL JUEZ ARIAS ES UN MENSAJE PARA QUIENES DESAFÍAN LA MIRADA OFICIAL"',
            descripcion: "Esta semana, el Jurado de Enjuiciamiento de Magistrados destituyó de su cargo al juez platense que, entre otros fallos importantes, había ordenado frenar los tarifazos de las empresas de servicios públicos que perjudicaban a los usuarios.",
            link: 'https://archive.org/download/MargaritaJarqueAbogadaCPMJuicioALuisArias/2018.08.17%20-%20Margarita%20Jarque%20-%20Abogada%20-%20Juicio%20Pol%C3%ADtico%20a%20Luis%20Arias.mp3'
          },
          {
            playing: 'paused',
            titulo: '#TRABAJO | ESPERANDO EL IMPACTO: SE VIENEN MÁS DE 1000 DESPIDOS EN AGROINDUSTRIA',
            descripcion: "Ignacio Cámpora, secretario adjunto de ATE en el ministerio que conduce Miguel Etchevere, comparte la preocupación de los trabajadores y trabajadoras por una inminente ola de despidos. Además, anticipa un fuerte recorte en la ayuda a pequeños productores.  ",
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
        let willPlay = false;
        if(event.item.playing === 'paused') {
          willPlay = true;
        }
        this.pauseAll();
        if(willPlay) {
          this.play(event.item);
        }
      }
    }
  };
</script>
