<template>
  <ListView ref="listView" for="podcast in podcasts" @itemTap="onPodcastTap" backgroundColor="#000028" separatorColor="transparent">
    <v-template>
      <StackLayout width="100%" class="p-x-10 p-y-10">
        <FlexboxLayout orientation="horizontal" justifyContent="space-between" flexWrap="nowrap">
          <ActivityIndicator v-show="podcast.playing === 'loading'" busy="true" flexShrink="0" class="text-orange" alignSelf="flex-start" width="30" fontSize="30"/>
          <Label :text="'\ue038'" v-show="podcast.playing === 'paused'" flexShrink="0" class="mdi text-orange" width="30" fontSize="30" />
          <Label :text="'\ue034'" v-show="podcast.playing === 'playing'" flexShrink="0" class="mdi text-orange" width="30" fontSize="30"/>
          <Label :text="podcast.title" class="text-orange p-l-5" flexGrow="2" flexShrink="2" fontWeight="300" textWrap="true"/>
          <Label :text="podcast.duration" class="pull-right bold m-r-5" color="white" width="30" flexShrink="0" fontSize="9" opacity="0.4" alignSelf="flext-end"/>
        </FlexboxLayout>
        <Label :text="podcast.content" opacity="0.6" padding="8 0 8 35" color="white" fontWeight="300" fontSize="11" width="100%" textWrap="true"/>
        <StackLayout width="100%" paddingLeft="30">
          <StackLayout width="100%" height="1" class="orange m-t-10" opacity="0.3"></StackLayout>
        </StackLayout>
      </StackLayout>
    </v-template>
  </ListView>
</template>
<script>
  import { TNSPlayer } from 'nativescript-audio';
  import PodcastService from '../api/PodcastService';
  import h2p from 'html2plaintext';

  export default {
    data: () => {
      return {
        podcasts: undefined
      }
    },
    mounted() {
      PodcastService.getPodcasts().then((podcasts) => {
        this.podcasts = podcasts.data.map((podcast) => {
          podcast.playing = 'paused';
          podcast.content = h2p(podcast.content);
          return podcast
        })
      }).catch((err) => console.log(err))
    },
    computed: {
      player_screen() {
        return this.$store.getters.getPlayerScreen
      }
    },
    watch: {
      player_screen(newPlayerScreen) {
        if(newPlayerScreen !== 'PODCAST') {
          this.pauseAll();
        }
      }
    },
    methods: {
      play(podcast) {
        this.$store.commit('SET_PLAYER_SCREEN', 'PODCAST');
        podcast.playing = 'loading';
        this.$store.commit('PLAY_URL', podcast.file_download);
        this.$store.getters.getPlayPromise.then((res) => {
            podcast.playing = 'playing';
          })
          .catch((err) => {
            this.pause(podcast);
            alert({
              title: "Error",
              message: "Hubo un problema reproduciendo este podcast",
              okButtonText: "Entendido"
            })
          });
      },
      pause(podcast) {
        podcast.playing = 'paused';
      },
      pauseAll() {
        this.podcasts.map(podcast => this.pause(podcast));
      },
      onPodcastTap(event) {
        this.$store.commit('PAUSE');
        let willPlay = false;
        if(event.item.playing === 'paused') {
          willPlay = true;
        }
        this.pauseAll();
        if(willPlay) {
          this.play(event.item);
        }
      }
    }
  };
</script>
