<template>
    <AbsoluteLayout>
      <Image :src="currentShowImage" stretch="aspectFill" height="100%" width="100%" top="0"  :style="appBackgroundColor"/>
      <Image src="~/assets/images/blackgradient.png" stretch="aspectFit" top="0" width="100%"/>
      <FlexboxLayout flexDirection="column" justifyContent="space-between" top="100" width="100%">
        <StackLayout alignSelf="center" width="100%">
          <Image src="~/assets/images/microphone.png" width="30" opacity="0.7"/>
          <Label :text="$t('youAreListeningTo')" :style="primaryTextColor" class="text-center font-italic" marginTop="10" fontSize="14" />
          <Label :text="currentShow" class="h2 bold text-center m-b-0" :style="secondaryTextColor" textWrap="true"/>
        </StackLayout>
        <StackLayout class="spacer" style="height: 110;" alignSelf="center" marginTop="20">
          <Label v-show="playing === 'paused'"  @tap="play" :text="'\ue037'" fontSize="110" class="mdi text-center" color="white"/>
          <Label v-show="playing === 'playing'"  @tap="pause" :text="'\ue034'" fontSize="110" class="mdi text-center" color="white"/>
          <ActivityIndicator v-show="playing === 'loading'" busy="true"  color="white" height="110"/>
        </StackLayout>
      </FlexboxLayout>
    </AbsoluteLayout>
</template>
<script>
import { TNSPlayer } from 'nativescript-audio'
import ShowService from '../api/ShowService'
import config from '../config'
import { SET_PLAYER_SCREEN, PLAY_URL, PAUSE, SET_PLAYER } from '../store/constants'

const {
  colors: {
    appBackgroundColor,
    primaryText: primaryTextColor,
    secondaryText: secondaryTextColor
  },
  dataAdapter: {
    currentShowAdapter,
    showsAdapter
  },
  stream: url
} = config

export default {
  data: () => {
    return {
      appBackgroundColor,
      primaryTextColor,
      secondaryTextColor,
      playing: 'paused',
      currentShow: '',
      url,
      shows: [],
      currentShowImage: ''
    }
  },
  computed: {
    player_screen () {
      return this.$store.getters.getPlayerScreen
    }
  },
  watch: {
    player_screen (newPlayerScreen) {
      if (newPlayerScreen !== 'LIVE') {
        this.playing = 'paused'
      }
    }
  },
  methods: {
    play () {
      this.$store.commit(SET_PLAYER_SCREEN, 'LIVE')
      this.playing = 'loading'
      this.$store.commit(PLAY_URL, this.url)
      this.$store.getters.getPlayPromise.then((res) => {
        this.playing = 'playing'
      })
      .catch(() => {
        this.playing = 'paused'
        alert({
          title: this.$t('error'),
          message: this.$t('thereWasAProblemPlayingTheStream'),
          okButtonText: this.$t('understood')
        })
      })
    },
    pause () {
      this.playing = 'paused'
      this.$store.commit(PAUSE)
    },
    setCurrentShow () {
      ShowService.getCurrentShow().then((resp) => {
        if (this.currentShow !== currentShowAdapter(resp).show) {
          this.currentShow = currentShowAdapter(resp).show
          this.setImage()
        }
      })
    },
    setImage () {
      ShowService.getShows().then((shows) => {
        this.shows = showsAdapter(shows)
        this.currentShowImage = this.shows.find((p) => { return p.title === this.currentShow }).image
      }).catch((err) => console.log(err))
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
