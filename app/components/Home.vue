<template>
  <Page class="page">
    <ActionBar class="panelBackgroundColorApp action-bar">
      <StackLayout orientation="horizontal">
        <Image src="~/assets/images/logo.png" width="140" />
      </StackLayout>
    </ActionBar>
    <GridLayout columns="*" rows="*, auto">
      <Live v-show="currentTab === 0 && conexion" v-if="existe('Live')"/>
      <Schedule v-show="currentTab === 1 && conexion" v-if="existe('Schedule')"/>
      <WriteUs v-show="currentTab === 2 && conexion" v-if="existe('WriteUs')"/>
      <Podcasts v-show="currentTab === 3 && conexion" v-if="existe('Podcasts')"/>
      <Social v-show="currentTab === 4 && conexion" v-if="existe('Social')"/>
      <SinConexion v-if="!conexion" />
      <BottomNavigation
                        inactiveColor="gray"
                        class="panelBackgroundColorApp panelIconColorApp"
                        keyLineColor="gray"
                        row="1"
                        @tabSelected="changeTabTo($event)"
                        ref="bottomNavigation"
                        @loaded="bottomNavigationLoaded">
          <BottomNavigationTab :title="$t('live')" icon="round_radio_black_36" v-if="existe('Live')"></BottomNavigationTab>
          <BottomNavigationTab :title="$t('schedule')" icon="round_ballot_black_36" v-if="existe('Schedule')"></BottomNavigationTab>
          <BottomNavigationTab :title="$t('writeUs')" icon="round_message_black_36" v-if="existe('WriteUs')"></BottomNavigationTab>
          <BottomNavigationTab title="Podcasts" icon="round_mic_black_36" v-if="existe('Podcasts')"></BottomNavigationTab>
          <BottomNavigationTab :title="$t('social')" icon="round_share_black_36" v-if="existe('Social')"></BottomNavigationTab>
      </BottomNavigation>
    </GridLayout>
  </Page>
</template>
<script>
import Live from './Live.vue'
import Schedule from './Schedule.vue'
import Podcasts from './Podcasts.vue'
import Social from './Social.vue'
import WriteUs from './WriteUs.vue'
import SinConexion from './SinConexion.vue'
import config from '../config'

export default {
  data: () => {
    return {
      secciones: config.sections
    }
  },
  components: {
    Live,
    Schedule,
    Podcasts,
    Social,
    WriteUs,
    SinConexion
  },
  computed: {
    currentTab () {
      return this.$store.getters.getCurrentTab
    },
    conexion () {
      return this.$store.getters.getConexion
    }
  },
  methods: {
    changeTabTo (event) {
      this.$store.commit('SET_CURRENT_TAB', event.newIndex)
    },
    bottomNavigationLoaded (argv) {
      // cuando se recibe un msj con la aplicacion en background
      // muestra activa la pestaña correspondiente al data.topic del mensaje
      const bottomNavigation = argv.object
      bottomNavigation.selectTab(this.$store.getters.getCurrentTab)
    },
    existe (seccion) {
      return this.secciones.includes(seccion)
    }
  },
  created () {
    // cuando se vuelve del background o arranca la aplicacion siempre se muestra el primer tab
    this.$store.commit('SET_CURRENT_TAB', 0)

    // this.$store.commit("FIREBASE_INIT", this.$store);
  },
  beforeMount () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'SET_CURRENT_TAB') {
        if (
          this.$refs.bottomNavigation !== undefined &&
          this.$store.getters.getForeground
        ) {
          // cuando se recibe un msj con la aplicacion en foreground
          // muestra activa la pestaña correspondiente al data.topic del mensaje
          this.$refs.bottomNavigation._nativeView.selectTab(mutation.payload)
        }
      }
    })
  }
}
</script>
