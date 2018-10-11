<template>
  <ScrollView class="blue text-center">
    <StackLayout padding="10">
      <Label fontSize="22" class="m-t-25 bold" color="white" opacity="0.5">Escribinos</Label>
      <Label fontSize="14" fontWeight="300" textWrap="true" opacity="0.7" class="m-y-10" color="white" >Envianos un mensaje por email o whatsapp haciendo click en los botones de abajo.</Label>
      <StackLayout @tap="openEmail()" class="text-left" orientation="horizontal" margin="20 0 10" padding="10 20" width="260" color="darkblue" backgroundColor="#eee">
        <Label class="sci" :text="'\ue050'" color="darkblue" backgroundColor="#eee" fontSize="36" verticalAlignment="center"></Label>
        <Label fontSize="12" class="bold" padding="0 10" color="#333" width="170" verticalAlignment="center">Contactanos vía email</Label>
        <Label fontSize="14" :text="'\ue89e'" class="mdi" horizontalAlignment="right" verticalAlignment="center"></Label>
      </StackLayout>
      <StackLayout @tap="openWsp()" orientation="horizontal" class="text-left" margin="10 0" padding="10 20" width="260" color="white" backgroundColor="green">
        <Label class="sci" :text="'\ue099' " fontSize="36" color="white" backgroundColor="green" verticalAlignment="center"></Label>
        <Label fontSize="12" class="bold" padding="0 10" width="170" verticalAlignment="center">Contactanos vía Whatsapp</Label>
        <Label fontSize="14" :text="'\ue89e'" class="mdi" horizontalAlignment="right" verticalAlignment="center"></Label>
      </StackLayout>
    </StackLayout>
  </ScrollView>
</template>
<script>
  import { openApp } from "nativescript-open-app";
  import { openUrl } from "tns-core-modules/utils/utils";

  var email = require("nativescript-email");
  var appAvailability = require("nativescript-appavailability");

  export default {
    methods: {
      openWsp () {
        appAvailability.available("com.whatsapp").then(function(avail) {
          if (avail) {
            openUrl("https://wa.me/1122334455");
          }else{
            openApp("com.whatsapp");
          }
        })
      },
      openEmail () {
        email.compose({
          body: "",
          to: ['radio@email.fm']
        }).then(
          function() {
            console.log("Email composer closed");
          }, function(err) {
            console.log("Error: " + err);
          });
        }
    }

  };
</script>
