<template>
  <FlexboxLayout flexDirection="column" justifyContent="space-between" backgroundColor="#000028">
    <Label fontSize="30" color="purple">ESCRIBINOS:</Label>

    <StackLayout>
      <Button class="sci" @tap="openwsp()" :text="'\ue099' " fontSize="70" minHeight="110" marginBottom="40" marginLeft="100" marginRight="100" style="background-color: green" color="white"/>
    </StackLayout>
  </FlexboxLayout>
</template>
<script>
  import { openApp } from "nativescript-open-app";
  import { openUrl } from "tns-core-modules/utils/utils";

  var appAvailability = require("nativescript-appavailability");
  function openwsp () {
    appAvailability.available("com.whatsapp").then(function(avail) {
      if (avail) {
        openUrl("https://wa.me/5491164472428");
      }else{
        openApp("com.whatsapp");
      }
    })
  }

  export default {
    data: () => {
      return {
        openwsp,
      };
    },
  };

</script>
