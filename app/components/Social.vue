<template>
  <FlexboxLayout flexDirection="column"  :style="backgroundColor">
    <StackLayout>
      <StackLayout
        @tap="shareUrl()"
        orientation="horizontal"
        class="text-left"
        margin="30 10"
        padding="10"
        borderRadius="2"
        borderWidth="1px"
        :style="panelBackgroundColor"
        width="200">

        <Label class="sci" :style="primaryTextColor" :text="'\ue072'" fontSize="30" verticalAlignment="center"></Label>
        <Label fontSize="12" class="bold" :style="secondaryTextColor" opacity="0.7" paddingLeft="10" width="130" verticalAlignment="center" style="text-align:right">{{ $t('shareApp') }}</Label>
      </StackLayout>
      <Label :style="secondaryTextColor" style="text-align:center; font-weight:bold" opacity="0.5" marginBottom="20">{{ $t('visitOurSocialNetworks') }}:</Label>
      <ListView for="socialNetwork in socialNetworks">
        <v-template>
          <Button class="sci" @tap="openSocialNetwork(socialNetwork.link2App, socialNetwork.link2Page)" :text="socialNetwork.iconId" fontSize="50" borderRadius="2" margin="5" :backgroundColor="socialNetwork.background" :backgroundImage="socialNetwork.backgroundImage" :color="socialNetwork.iconColor" style="backgroundSize: cover"/>
        </v-template>
      </ListView>
    </StackLayout>
  </FlexboxLayout>
</template>
<script>
import { openApp } from 'nativescript-open-app'
import { openUrl } from 'tns-core-modules/utils/utils'
import config from '../config.js'
import appAvailability from 'nativescript-appavailability'
import * as SocialShare from 'nativescript-social-share'

const {
  colors: {
    appBackgroundColor: backgroundColor,
    panelBackgroundColor,
    primaryText: primaryTextColor,
    secondaryText: secondaryTextColor
  },
  name: { humanReadableName },
  shareApp: { playStoreUrl },
  socialNetworks
} = config

export default {
  data: () => {
    return {
      backgroundColor,
      panelBackgroundColor,
      primaryTextColor,
      secondaryTextColor,
      socialNetworks
    }
  },
  methods: {
    shareUrl () {
      const message = `${this.$t('messageToShareApp')} ${humanReadableName}`
      SocialShare.shareUrl(playStoreUrl, message)
    },
    openSocialNetwork (app, url) {
      appAvailability.available(app).then(function (avail) {
        if (avail) {
          openApp(app)
        } else {
          openUrl(url)
        }
      })
    }
  }
}
</script>
