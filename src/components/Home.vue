<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <StackLayout orientation="horizontal">
        <Image src="~/images/ahijuna-logo.png" width="140" />
      </StackLayout>
    </ActionBar>
    <GridLayout columns="*" rows="*, auto">
      <Vivo v-show="currentTab === 0" />
      <Programacion v-show="currentTab === 1" />
      <Escribinos v-show="currentTab === 2" />
      <Podcasts v-show="currentTab === 3" />
      <Redes v-show="currentTab === 4" />
      <BottomNavigation activeColor="#f63e00"
                        inactiveColor="gray"
                        backgroundColor="#282928"
                        keyLineColor="gray"
                        row="1"
                        @tabSelected="changeTabTo($event)">
          <BottomNavigationTab title="Vivo" icon="round_radio_black_36"></BottomNavigationTab>
          <BottomNavigationTab title="Programación" icon="round_ballot_black_36"></BottomNavigationTab>
          <BottomNavigationTab title="Escribinos" icon="round_message_black_36"></BottomNavigationTab>
          <BottomNavigationTab title="Podcasts" icon="round_mic_black_36"></BottomNavigationTab>
          <BottomNavigationTab title="Redes" icon="round_share_black_36"></BottomNavigationTab>
      </BottomNavigation>
    </GridLayout>
  </Page>
</template>
<script>
  import Vivo from './Vivo.vue'
  import Programacion from './Programacion.vue'
  import Podcasts from './Podcasts.vue'
  import Redes from './Redes.vue'
  import Escribinos from './Escribinos.vue'

  export default {
    components: {
      Vivo,
      Programacion,
      Podcasts,
      Redes,
      Escribinos
    },
    data: () => {
      return {
        currentTab: 0
      }
    },
    methods: {
      changeTabTo(event) {
        this.currentTab = event.newIndex
      }
    }
  };
</script>
