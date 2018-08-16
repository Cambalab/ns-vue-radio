<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>

    <StackLayout>
      <Button class="btn btn-primary">Counter</Button>
      <Button class="btn btn-primary">Hello World</Button>
    </StackLayout>


    <BottomNavigation activeColor="red"
                      inactiveColor="yellow"
                      backgroundColor="black"
                      keyLineColor="black"
                      row="1">
        <BottomNavigationTab title="First" icon="ic_menu_back"></BottomNavigationTab>
        <BottomNavigationTab title="Second" icon="ic_menu_back"></BottomNavigationTab>
        <BottomNavigationTab title="Third" icon="ic_menu_back"></BottomNavigationTab>
    </BottomNavigation>

  </Page>
</template>
