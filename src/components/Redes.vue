<template>
  <FlexboxLayout flexDirection="column" justifyContent="space-between" backgroundColor="#000028">
    <Label height="15" style="text-align:center; font-weight:bold" color="#32DAC4">Visitanos en nuestras</Label>
    <Label height="15" style="text-align:center; font-weight:bold" color="#32DAC4">redes sociales:</Label>
    <StackLayout>
      <Button class="sci" @tap="shareUrl()" :text="'\ue072'" fontSize="50" style="background-color: #2e2e2e" color="#32b36c"/>
      <Button class="sci" @tap="openFb()" :text="'\ue028'" fontSize="50" style="background-color: #365899" color="white"/>
      <Button class="sci" @tap="openIg()" :text="'\ue044'" fontSize="50" margin="5" marginTop="5" marginBottom="5" style="background-image: ~/images/instagram.png" color="white"/>
      <Button class="sci" @tap="openTwitter()" :text="'\ue08d'" fontSize="50" marginBottom="5" style="background-color: #006dbf" color="white"/>
    </StackLayout>
  </FlexboxLayout>
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
        openSocialNetwork("com.facebook.radioahijuna", "https://www.facebook.com/radioahijuna")
      },
      openIg () {
        openSocialNetwork("com.instagram.android.radioahijuna", "https://www.instagram.com/radioahijuna/")
      },
      openTwitter () {
        openSocialNetwork("com.twitter.android.radioahijuna", "https://twitter.com/radioahijuna")
      },
      shareUrl () {
        SocialShare.shareUrl("http://ahijuna.fm/", "Radio Ahijuna");
      }
    }
  }
</script>
