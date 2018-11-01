<template>
  <FlexboxLayout class="backgroundColorApp" flexDirection="column" justifyContent="space-between">
    <StackLayout flexGrow="2" height="100%">
      <ListView for="show in filteredShows" height="100%" separatorColor="transparent">
        <v-template>
          <StackLayout xmlns:Card="nativescript-cardview" width="100%">
            <CardView radius="6" margin="10" backgroundColor="white" elevation="5" ripple="true">
              <StackLayout>
                <StackLayout width="100%" height="200">
                  <Image :src="show.image" stretch="aspectFill"/>
                </StackLayout>
                <StackLayout class="p-x-12 p-y-12" borderTopWidth="1px" borderTopColor="#eee">
                  <Label :text="show.title" color="#333" textWrap="true"/>
                  <Label :text="show.hours" fontSize="10" color="#555" textWrap="true"/>
                  <Label :text="show.content" fontSize="11" marginTop="10" color="#555" textWrap="true"/>
                </StackLayout>
              </StackLayout>
            </CardView>
          </StackLayout>
        </v-template>
      </ListView>
    </StackLayout>
    <StackLayout class="spacer" height="22%" flexShrink="0">
      <ListPicker :items="days" :selectedIndex="dayPicker" @selectedIndexChange="dayChange" class="panelBackgroundColorApp secondaryTextColorApp"/>
    </StackLayout>
  </FlexboxLayout>
</template>
<script>
import ShowService from '../api/ShowService'

export default {
  data: () => {
    return {
      lastChange: new Date(),
      selectedDay: 1,
      dayPicker: 0,
      shows: []
    }
  },
  mounted () {
    ShowService.getShows().then((shows) => {
      if (shows.status === 200) {
        this.shows = shows.data
      }
    }).catch((err) => console.log(err))
  },
  computed: {
    days () {
      return [this.$t('monday'), this.$t('tuesday'), this.$t('wednesday'), this.$t('thursday'), this.$t('friday'), this.$t('saturday'), this.$t('sunday')]
    },
    filteredShows () {
      return this.shows.filter(this.isAiredOn).sort((a, b) => { return a.init_hour < b.init_hour ? -1 : 1 })
    }
  },
  methods: {
    selectDay () {
      this.selectedDay = this.dayPicker + 1
    },
    dayChange (event) {
      this.lastChange = new Date()
      this.dayPicker = event.value
      setTimeout(() => {
        if ((new Date() - this.lastChange) >= 500) {
          this.selectDay()
        }
      }, 500)
    },
    isAiredOn (show) {
      return show.days.includes(this.selectedDay)
    }
  }
}
</script>
