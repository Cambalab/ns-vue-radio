<template>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6727867171c806128535a2d09e41c97df98cd963
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
<<<<<<< HEAD
=======
  <Page class="page">
    <ActionBar class="action-bar" title="Escribinos">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>
=======
  <FlexboxLayout flexDirection="column" justifyContent="space-between" backgroundColor="#000028">
    <Label fontSize="30" color="purple">ESCRIBINOS:</Label>
>>>>>>> Se agrega el botón para abrir el chat en whatsapp con ahijuna

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
<<<<<<< HEAD
        openApp("https://wa.me/5491157995025");
>>>>>>> Se agrega el componente Escribinos con un boton para abrir whatsapp
=======
        openUrl("https://wa.me/5491164472428");
>>>>>>> Se agrega el botón para abrir el chat en whatsapp con ahijuna
=======
>>>>>>> 6727867171c806128535a2d09e41c97df98cd963
      }else{
        openApp("com.whatsapp");
      }
    })
  }

  export default {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    data: () => {
=======
    data () {
>>>>>>> Se agrega el componente Escribinos con un boton para abrir whatsapp
=======
    data: () => {
>>>>>>> Se agrega el botón para abrir el chat en whatsapp con ahijuna
=======
    data: () => {
>>>>>>> 6727867171c806128535a2d09e41c97df98cd963
      return {
        openwsp,
      };
    },
  };
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> Se agrega el componente Escribinos con un boton para abrir whatsapp
=======

>>>>>>> Se agrega el botón para abrir el chat en whatsapp con ahijuna
=======

>>>>>>> 6727867171c806128535a2d09e41c97df98cd963
</script>
