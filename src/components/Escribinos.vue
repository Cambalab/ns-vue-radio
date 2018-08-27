<template>
  <FlexboxLayout flexDirection="column" justifyContent="space-between" backgroundColor="#000028">
    <Label fontSize="30" color="purple">ESCRIBINOS:</Label>

    <StackLayout>
      <Button class="sci" @tap="openEmail()" :text="'\ue050'" fontSize="80" marginBottom="30" marginLeft="100" marginRight="100" style="background-color: gray" color="black"/>
      <Button class="sci" @tap="openWsp()" :text="'\ue099' " fontSize="70" minHeight="110" marginBottom="40" marginLeft="100" marginRight="100" style="background-color: green" color="white"/>
    </StackLayout>
  </FlexboxLayout>
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
