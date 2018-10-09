<template>
  <ScrollView backgroundColor="#000028">
    <StackLayout>
      <StackLayout
        @tap="shareUrl()"
        orientation="horizontal"
        class="text-left"
        margin="30 10"
        padding="10"
        borderRadius="2"
        backgroundColor="transparent"
        borderColor="#F63E00"
        borderWidth="1px"
        width="200">

        <Label class="sci" color="#F63E00" :text="'\ue072'" fontSize="30" verticalAlignment="center"></Label>
        <Label fontSize="12" class="bold" color="white" opacity="0.7" paddingLeft="10" width="150" verticalAlignment="center">Compartir página</Label>
      </StackLayout>
      <Label style="text-align:center; font-weight:bold" color="white" opacity="0.5" marginBottom="20">Visitanos en nuestras redes sociales:</Label>
      <StackLayout width="100%">
      <Button class="sci" @tap="openFb()" :text="'\ue028'" fontSize="50" borderRadius="2" margin="5" style="background-color: #365899" color="white"/>
      <Button class="sci" @tap="openIg()" :text="'\ue044'" fontSize="50" borderRadius="2" margin="5" style="background-image: ~/assets/images/instagram.png; backgroundSize: cover" color="white"/>
      <Button class="sci" @tap="openTwitter()" :text="'\ue08d'" fontSize="50" borderRadius="2" margin="5" style="background-color: #006dbf" color="white"/>
      </StackLayout>
    </StackLayout>
  </ScrollView>
</template>
<script>
  import { openApp } from "nativescript-open-app";
  import { openUrl } from "tns-core-modules/utils/utils";

  const appAvailability = require("nativescript-appavailability");
  const SocialShare = require("nativescript-social-share");

  function openSocialNetwork (app, url) {
    appAvailability.available(app).then(function(avail) {
      if (avail) {
        openApp(app);
      }else{
        openUrl(url);
      }
    })
  }

  export default {
    methods: {
      openFb () {
        openSocialNetwork("com.facebook", "https://www.facebook.com/")
      },
      openIg () {
        openSocialNetwork("com.instagram.android", "https://www.instagram.com/")
      },
      openTwitter () {
        openSocialNetwork("com.twitter.android", "https://twitter.com/")
      },
      shareUrl () {
        SocialShare.shareUrl("http://", "Radio");
      }
    }
  }
</script>
