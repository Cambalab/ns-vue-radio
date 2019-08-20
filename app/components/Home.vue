<template>
  <Page class="page">
    <ActionBar class="panelBackgroundColorApp action-bar">
      <StackLayout orientation="horizontal">
        <Image src="~/assets/images/logo.png" width="140" />
      </StackLayout>
    </ActionBar>
    <GridLayout columns="*" rows="*, auto">
      <Live v-show="currentTab === 'Live' && connection" v-if="exists('Live')"/>
      <Schedule v-show="currentTab === 'Schedule' && connection" v-if="exists('Schedule')"/>
      <WriteUs v-show="currentTab === 'WriteUs' && connection" v-if="exists('WriteUs')"/>
      <Podcasts v-show="currentTab === 'Podcasts' && connection" v-if="exists('Podcasts')"/>
      <Social v-show="currentTab === 'Social' && connection" v-if="exists('Social')"/>
      <NoConnection v-show="!connection" />
      <BottomNavigationBar
                        inactiveColor="gray"
                        class="panelBackgroundColorApp panelIconColorApp"
                        keyLineColor="gray"
                        row="1"
                        @tabSelected="changeTabTo($event)"
                        ref="bottomNavigationBar"
                        @loaded="bottomNavigationLoaded">
          <BottomNavigationTab :title="$t('live')" icon="round_radio_black_36" v-if="exists('Live')"></BottomNavigationTab>
          <BottomNavigationTab :title="$t('schedule')" icon="round_ballot_black_36" v-if="exists('Schedule')"></BottomNavigationTab>
          <BottomNavigationTab :title="$t('writeUs')" icon="round_message_black_36" v-if="exists('WriteUs')"></BottomNavigationTab>
          <BottomNavigationTab title="Podcasts" icon="round_mic_black_36" v-if="exists('Podcasts')"></BottomNavigationTab>
          <BottomNavigationTab :title="$t('social')" icon="round_share_black_36" v-if="exists('Social')"></BottomNavigationTab>
      </BottomNavigationBar>
    </GridLayout>
  </Page>
</template>
<script>
import Live from './Live.vue'
import Schedule from './Schedule.vue'
import Podcasts from './Podcasts.vue'
import Social from './Social.vue'
import WriteUs from './WriteUs.vue'
import NoConnection from './NoConnection.vue'
import config from '../config'
import { SET_CURRENT_TAB, FIREBASE_INIT } from '../store/constants'

export default {
  data: () => {
    return {
      sections: config.sections
    }
  },
  components: {
    Live,
    Schedule,
    Podcasts,
    Social,
    WriteUs,
    NoConnection
  },
  computed: {
    currentTab () {
      return this.$store.getters.getCurrentTab
    },
    connection () {
      return this.$store.getters.getConnection
    }
  },
  methods: {
    changeTabTo (event) {
      this.$store.commit(SET_CURRENT_TAB, event.newIndex)
    },
    bottomNavigationLoaded (argv) {
      const bottomNavigationBar = argv.object
      bottomNavigationBar.selectTab(this.$store.getters.getCurrentTab)
    },
    exists (section) {
      return this.sections.includes(section)
    }
  },
  created () {
    this.$store.commit(SET_CURRENT_TAB, 0)

     this.$store.commit(FIREBASE_INIT, this.$store);
  },
  beforeMount () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === SET_CURRENT_TAB) {
        if (
          this.$refs.bottomNavigationBar !== undefined &&
          this.$store.getters.getForeground
        ) {
          // cuando se recibe un msj con la aplicacion en foreground
          // muestra activa la pestaña correspondiente al data.topic del mensaje
          this.$refs.bottomNavigationBar._nativeView.selectTab(mutation.payload)
        }
      }
    })
  }
}
</script>
