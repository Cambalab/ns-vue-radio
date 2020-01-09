<template>
    <AbsoluteLayout>
      <Image src="~/assets/images/blackgradient.png" stretch="aspectFit" top="0" width="100%"/>
      <FlexboxLayout flexDirection="column" justifyContent="space-between" top="100" width="100%">
        <StackLayout alignSelf="center" width="100%">
          <Label class="mdi text-center text-cyan" fontSize="36" :text="'\ue2c1'" :style="secondaryTextColor" opacity="0.7"></Label>
          <Label :text="$t('thereWasAnErrorWithTheConnection')" :style="primaryTextColor" class="text-center text-cyan font-italic" marginTop="10" fontSize="14" />
          <StackLayout @tap="updateConnection()" class="text-left" orientation="horizontal" margin="20 0 10" padding="10 20" width="260" borderRadius="5" backgroundColor="#eee">
            <Label class="bold" fontSize="12" padding="0 10" color="#333" width="170" verticalAlignment="center">{{ $t('updateConnection') }}</Label>
            <Label class="mdi" fontSize="20" :text="'\ue5d5'" padding="0 10" color="#333" horizontalAlignment="right" verticalAlignment="center"></Label>
          </StackLayout>
        </StackLayout>
      </FlexboxLayout>
    </AbsoluteLayout>
</template>
<script>
import config from '../config'
import ShowService from '../api/ShowService'
import { PLAY_URL, SET_CONNECTION } from '../store/constants'

const {
  colors: {
    primaryText: primaryTextColor,
    secondaryText: secondaryTextColor
  }
} = config

export default {
  data: () => {
    return {
      primaryTextColor,
      secondaryTextColor,
    }
  },
  methods: {
    updateConnection () {
      ShowService.getCurrentShow().then((resp) => {
        if (resp.status !== null) {
          if (!this.connection && this.player.isAudioPlaying()) {
            this.$store.commit(PLAY_URL, this.stream_url)
          }
          this.$store.commit(SET_CONNECTION, true)
        } else {
          this.$store.commit(SET_CONNECTION, false)
        }
      }).catch((err) => console.log(err))
    }
  },
  computed: {
    stream_url () {
      return this.$store.getters.getStreamURL
    },
    connection () {
      return this.$store.getters.getConnection
    },
    player () {
      return this.$store.getters.getPlayer
    }
  },
  mounted () {
    this.updateConnection()
    setInterval(() => {
      this.updateConnection()
    }, 2000)
  }
}
</script>
