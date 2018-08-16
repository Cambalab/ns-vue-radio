<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>
    <GridLayout columns="*" rows="*, auto">

      <BottomNavigation activeColor="#f63e00"
                        inactiveColor="gray"
                        backgroundColor="#282928"
                        keyLineColor="gray"
                        row="1">
          <BottomNavigationTab title="Vivo" icon="round_radio_black_36"></BottomNavigationTab>
          <BottomNavigationTab title="Programación" icon="round_ballot_black_36"></BottomNavigationTab>
          <BottomNavigationTab title="Escribinos" icon="round_message_black_36"></BottomNavigationTab>
          <BottomNavigationTab title="Podcasts" icon="round_mic_black_36"></BottomNavigationTab>
          <BottomNavigationTab title="Redes" icon="round_share_black_36"></BottomNavigationTab>
      </BottomNavigation>
    </GridLayout>
  </Page>
</template>
