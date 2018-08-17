<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Escribinos">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>

    <StackLayout>
        <Button class="btn btn-primary" @tap="openwsp()" text="Whatsapp"/>

    </StackLayout>

  </Page>
</template>

<script>
  import { openApp } from "nativescript-open-app";

  var appAvailability = require("nativescript-appavailability");

  function openwsp () {
    appAvailability.available("com.whatsapp").then(function(avail) {
      if (avail) {
        openApp("https://wa.me/5491157995025");
      }else{
        openApp("com.whatsapp");
      }
    })
  }

  export default {
    data () {
      return {
        openwsp,
      };
    },
  };
</script>
