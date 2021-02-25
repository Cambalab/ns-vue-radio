<template>
  <FlexboxLayout
    :style="backgroundColor"
    flexDirection="column"
    justifyContent="space-between"
  >
    <StackLayout flexGrow="2" height="100%">
      <list-view
        for="show in filteredShows"
        height="100%"
        separatorColor="transparent"
      >
        <v-template>
                <StackLayout 
                    flexDirection="column"
                    justifyContent="center" 
                    backgroundColor="#f4f4f4"
                    width="100%"
                    height="800px"
                    fontColor="#3333"
                    marginLeft="auto"
                    marginRigth="auto"
                    class="card"
                >
                    <!-- <HtmlView html="<br/>" class="br" 
                        :backgroundColor="backgroundColor.backgroundColor"
                    /> -->
                    <Image :src="getApiUrl(show)"
                        stretch="aspectFill"
                        height="300px"
                        width="100%"
                        class="card-image"
                        tintColor="rgba(0, 0, 0, 0.4)"
                    />
                    <StackLayout 
                        flexDirection="column" 
                        marginTop="15" 
                        padding="25" 
                        paddingTop="0"
                        class="p-x-12 p-y-12"
                        borderTopWidth="1px"
                        borderTopColor="#eee"
                    >
                        <FlexBoxLayout 
                            flexDirection="row" 
                            ginTopjustifyContent="flex-start" 
                            alignItems="middle" 
                            height="35px" 
                            marginBottom="10"
                            v-if="show.schedule"
                        >
                            <Label class="mdi text-green" fontSize="20" verticalAlign="middle" >schedule</Label>
                            <Label :text="`DE ${show.schedule} HS`" fontSize="10" fontWeight="600" alignSelf="center"  heigth="100%" paddingLeft="6"/>
                        </FlexBoxLayout>
                        <Label :text="show.title" 
                            fontWeight="bold"
                            fontSize="20"
                            fontColor="#0000"
                            textWrap="true"
                            marginBottom="1"
                        />
                        <Label
                          :text="show.timetable"
                          fontSize="10"
                          color="#555"
                          textWrap="true"
                        />
                        <Label
                          :text="show.content"
                            fontWeight="300"
                            fontSize="15"
                            fontColor="#0000"
                            textWrap="true"
                        />
                    </StackLayout>
                </StackLayout>
          </v-template>
      </list-view>
    </StackLayout>
    <StackLayout class="spacer" height="22%" flexShrink="0">
      <ListPicker
        :items="days"
        :selectedIndex="dayPicker"
        @selectedIndexChange="dayChange"
        :style="panelBackgroundColor"
        :color="secondaryTextColor"
      />
    </StackLayout>
  </FlexboxLayout>
</template>
<script>
import ShowService from '../api/ShowService'
import config from '../config.js'

const {
  apiUrl,
  colors: {
    appBackgroundColor: backgroundColor,
    panelBackgroundColor,
    secondaryText: {
      color: secondaryTextColor
    }
  },
  dataAdapter: {
    showsAdapter
  }
} = config

export default {
  data: () => {
    return {
      backgroundColor,
      panelBackgroundColor,
      secondaryTextColor,
      lastChange: new Date(),
      selectedDay: 1,
      dayPicker: 0,
      shows: []
    }
  },
  mounted () {
    ShowService.getShows().then((shows) => {
      if (shows.status === 200) {
        this.shows = showsAdapter(shows)
      }
    }).catch((err) => console.log(err))
  },
  computed: {
    days () {
      return [
        this.$t('monday'),
        this.$t('tuesday'),
        this.$t('wednesday'),
        this.$t('thursday'),
        this.$t('friday'),
        this.$t('saturday'),
        this.$t('sunday')
      ]
    },
    filteredShows () {
      return this.shows
        .filter(this.isAiredOn)
        .sort((a, b) => { return a.start_time < b.start_time ? -1 : 1 })
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
    },
    getApiUrl (show) {
      return `${apiUrl}/${show.image}`
    }
  }
}
</script>
