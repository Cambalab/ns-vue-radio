<template>
    <AbsoluteLayout>
      <Image
        :src="getCurrentShowImage()"
        stretch="aspectFill"
        height="100%"
        width="100%"
        top="0"
        :style="appBackgroundColor"
      />
      <Image
        src="~/assets/images/blackgradient.png"
        stretch="aspectFit"
        top="0"
        width="100%"
      />
      <FlexboxLayout
        flexDirection="column"
        justifyContent="space-between"
        top="100"
        width="100%"
      >
        <StackLayout alignSelf="center" width="100%">
          <Image src="~/assets/images/microphone.png" width="30" opacity="0.7"/>
          <Label
            :text="$t(currentShowMessage)"
            :style="primaryTextColor"
            class="text-center font-italic"
            marginTop="10"
            fontSize="14"
          />
          <Label
            :text="currentShow.title"
            class="h2 bold text-center m-b-0"
            :style="secondaryTextColor"
            textWrap="true"
          />
        </StackLayout>
        <StackLayout
          class="spacer"
          style="height: 110;"
          alignSelf="center"
          marginTop="20"
        >
          <Label
            v-show="playing === 'paused'"
            @tap="play"
            :text="'\ue037'"
            fontSize="110"
            class="mdi text-center"
            color="white"
          />
          <Label
            v-show="playing === 'playing'"
            @tap="pause"
            :text="'\ue034'"
            fontSize="110"
            class="mdi text-center"
            color="white"
          />
          <ActivityIndicator
            v-show="playing === 'loading'"
            busy="true"
            color="white"
            height="110"
          />
        </StackLayout>
      </FlexboxLayout>
    </AbsoluteLayout>
</template>
<script>
import { TNSPlayer } from 'nativescript-audio'
import ShowService from '../api/ShowService'
import config from '../config'
import {
  SET_PLAYER_SCREEN,
  PLAY_URL,
  PAUSE,
  SET_PLAYER,
  SET_STREAMING,
  SET_PLAYING,
} from '../store/constants'

const {
  colors: {
    appBackgroundColor,
    primaryText: primaryTextColor,
    secondaryText: secondaryTextColor
  },
  dataAdapter: {
    currentShowAdapter
  },
  stream: url,
  apiUrl
} = config

export default {
  data: () => {
    return {
      appBackgroundColor,
      primaryTextColor,
      secondaryTextColor,
      currentShow: '',
      url,
      shows: [],
      currentShowImage: '',
      currentShowMessage: 'youAreListeningTo'
    }
  },
  computed: {
    playing (){
      return this.$store.getters.getPlaying
    },
    player_screen () {
      return this.$store.getters.getPlayerScreen
    },
    streamingUp () {
      return this.$store.getters.getStreamingUp
    },
    player () {
      return this.$store.getters.getPlayer
    },
    playPromise () {
      return this.$store.getters.getPlayPromise
    },
  },
  watch: {
    player_screen (newPlayerScreen) {
      if (newPlayerScreen !== 'LIVE') {
        this.$store.commit(SET_PLAYING, 'paused')
      }
    }
  },
  methods: {
    play () {
      this.$store.commit(SET_PLAYER_SCREEN, 'LIVE')
      this.$store.commit(SET_PLAYING, 'loading')
      this.$store.commit(PLAY_URL, this.url)
      this.playPromise.then((res) => {
        this.$store.commit(SET_PLAYING, 'playing')
        this.$store.commit(SET_STREAMING_UP, true)
      })
      .catch((e) => {
        this.pause
        this.$store.commit(SET_STREAMING, false)
        this.$store.commit(SET_STREAMING_UP, false)
      })
    },
    pause () {
      this.$store.commit(SET_PLAYING, 'paused')
      this.$store.commit(PAUSE)
    },
    setCurrentShow () {
      ShowService.getCurrentShow().then((resp) => {
        if (this.currentShow !== currentShowAdapter(resp)) {
          if (currentShowAdapter(resp)['message-slug']){
            this.currentShowMessage = 'programNotAvailable'
          }
          else{
            this.currentShowMessage = 'youAreListeningTo'
          }
          this.currentShow = currentShowAdapter(resp)
        }
      })
    },
    getCurrentShowImage () {
      return `${apiUrl}/${this.currentShow.image}`
    }
  },
  mounted () {
    setTimeout(() => {
      this.$store.commit(SET_PLAYER, new TNSPlayer())
    }, 0)
    this.setCurrentShow()
    setInterval(() => {
      this.setCurrentShow()
    }, 60000)
  }
}
</script>
