<template>
  <ScrollView class="backgroundColorApp text-center">
    <StackLayout padding="10">
      <Label fontSize="22" class="m-t-25 bold primaryTextColorApp" opacity="0.5">{{ $t('writeUs') }}</Label>
      <Label fontSize="14" fontWeight="300" textWrap="true" opacity="0.7" class="m-y-10 secondaryTextColorApp" >{{ $t('sendUs') }}</Label>
      <StackLayout @tap="openEmail()" class="text-left" orientation="horizontal" margin="20 0 10" padding="10 20" width="260" color="darkblue" backgroundColor="#eee">
        <Label class="sci" :text="'\ue050'" color="darkblue" backgroundColor="#eee" fontSize="36" verticalAlignment="center"></Label>
        <Label fontSize="12" class="bold" padding="0 10" color="#333" width="170" verticalAlignment="center">{{ $t('contactUsViaEmail') }}</Label>
        <Label fontSize="14" :text="'\ue89e'" class="mdi" horizontalAlignment="right" verticalAlignment="center"></Label>
      </StackLayout>
      <StackLayout @tap="openWsp()" orientation="horizontal" class="text-left" margin="10 0" padding="10 20" width="260" color="white" backgroundColor="green">
        <Label class="sci" :text="'\ue099' " fontSize="36" color="white" backgroundColor="green" verticalAlignment="center"></Label>
        <Label fontSize="12" class="bold" padding="0 10" width="170" verticalAlignment="center">{{ $t('contactUsViaWhatsapp') }}</Label>
        <Label fontSize="14" :text="'\ue89e'" class="mdi" horizontalAlignment="right" verticalAlignment="center"></Label>
      </StackLayout>
    </StackLayout>
  </ScrollView>
</template>
<script>
import { openApp } from 'nativescript-open-app'
import { openUrl } from 'tns-core-modules/utils/utils'
import * as email from 'nativescript-email'
import appAvailability from 'nativescript-appavailability'
import config from '../config.js'

export default {
  methods: {
    openWsp () {
      appAvailability.available('com.whatsapp').then(function (avail) {
        if (avail) {
          openUrl(`https://wa.me/${config.phoneNumber}`)
        } else {
          openApp('com.whatsapp')
        }
      })
    },
    openEmail () {
      email.compose({
        body: '',
        to: config.writeEmailTo
      }).then(
        function () {
        }, function (err) {
          console.log('Error: ' + err)
        })
    }
  }

}
</script>
