<template>
  <ScrollView class="blue text-center">
    <StackLayout padding="10">
      <Label fontSize="22" class="m-t-25 bold" color="white" opacity="0.5">Escribinos</Label>
      <Label fontSize="14" fontWeight="300" textWrap="true" opacity="0.7" class="m-y-10" color="white" >Envianos un mensaje por email o whatsapp haciendo click en los botones de abajo.</Label>
      <StackLayout class="text-left" orientation="horizontal" margin="20 0 10" padding="10 20" width="260" color="white" backgroundColor="darkblue">
        <Label class="sci" @tap="openEmail()" :text="'\ue050'" color="white" backgroundColor="darkblue" fontSize="36" verticalAlignment="center"></Label>
        <Label fontSize="12" class="bold" padding="0 10" width="170" verticalAlignment="center">Contactanos vía email</Label>
        <Label fontSize="14" :text="'\ue89e'" class="mdi" horizontalAlignment="right" verticalAlignment="center"></Label>
      </StackLayout>
      <StackLayout orientation="horizontal" class="text-left" margin="10 0" padding="10 20" width="260" color="white" backgroundColor="green">
        <Label class="sci" @tap="openWsp()" :text="'\ue099' " fontSize="36" color="white" backgroundColor="green" verticalAlignment="center"></Label>
        <Label fontSize="12" class="bold" padding="0 10" width="170" verticalAlignment="center">Contactanos vía Whatsapp</Label>
        <Label fontSize="14" :text="'\ue89e'" class="mdi" horizontalAlignment="right" verticalAlignment="center"></Label>
      </StackLayout>
      <!-- <Button class="sci" @tap="openEmail()" :text="'\ue050'" fontSize="80" marginBottom="30" marginLeft="100" marginRight="100" style="background-color: gray" color="black"/> -->
      <!-- <Button class="sci" @tap="openWsp()" :text="'\ue099' " fontSize="70" minHeight="110" marginBottom="40" marginLeft="100" marginRight="100" style="background-color: green" color="white"/> -->
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
            openUrl("https://wa.me/5491157995025");
          }else{
            openApp("com.whatsapp");
          }
        })
      },
      openEmail () {
        email.compose({
          body: "",
          to: ['email@gmail.com']
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
