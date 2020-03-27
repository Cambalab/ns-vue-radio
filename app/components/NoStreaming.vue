<template>
    <AbsoluteLayout>
      <Image src="~/assets/images/blackgradient.png" stretch="aspectFit" top="0" width="100%"/>
      <FlexboxLayout flexDirection="column" justifyContent="space-between" top="100" width="100%">
        <StackLayout alignSelf="center" width="100%">
          <Label class="mdi text-center text-cyan" fontSize="36" :text="'\ue8f2'" :style="secondaryTextColor" opacity="0.7"></Label>
          <Label :text="$t('thereWasAnErrorWithTheStreaming')" :style="primaryTextColor" class="text-center text-cyan font-italic" marginTop="10" fontSize="14" />
          <StackLayout @tap="updateStreaming()" class="text-left" orientation="horizontal" margin="20 0 10" padding="10 20" width="260" borderRadius="5" backgroundColor="#eee">
            <Label class="bold" fontSize="12" padding="0 10" color="#333" width="170" verticalAlignment="center">{{ $t('updateStreaming') }}</Label>
            <Label class="mdi" fontSize="20" :text="'\ue5d5'" padding="0 10" color="#333" horizontalAlignment="right" verticalAlignment="center"></Label>
          </StackLayout>
        </StackLayout>
      </FlexboxLayout>
    </AbsoluteLayout>
</template>
<script>
import config from '../config'
import { PLAY_URL, SET_STREAMING, SET_PLAYING } from '../store/constants'

const {
  colors: {
    primaryText: primaryTextColor,
    secondaryText: secondaryTextColor
  },
  stream: url,
} = config

export default {
  data: () => {
    return {
      primaryTextColor,
      secondaryTextColor,
      url,
    }
  },
  methods: {
    updateStreaming () {
      if (!this.streamingUp){
        if (this.player !== undefined && this.playPromise !== undefined){
          this.$store.commit(PLAY_URL, this.url)
          this.playPromise.then(() => {
            this.$store.commit(SET_PLAYING, 'playing')
          })
        }
        this.$store.commit(SET_PLAYING, 'loading')
        this.$store.commit(SET_STREAMING, true)
      }
    }
  },
  computed: {
    playPromise () {
      return this.$store.getters.getPlayPromise
    },
    streamingUp () {
      return this.$store.getters.getStreamingUp
    },
    player () {
      return this.$store.getters.getPlayer
    }
  },
  mounted () {
    this.updateStreaming()
    setInterval(() => {
      this.updateStreaming()
    }, 5000)
  }
}

</script>