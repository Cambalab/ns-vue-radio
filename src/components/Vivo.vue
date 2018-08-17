<template>
  <FlexboxLayout flexDirection="column" justifyContent="space-between" backgroundColor="#000028">
    <Label text="" height="50"/>
    <StackLayout class="spacer" style="background-color: #282928; height: 50;">
      <Label v-show="!playing" class="mdi" @tap="play" :text="'\ue037'" fontSize="48" style="text-align:center;" color="#f9ce35"/>
      <Label v-show="playing" class="mdi" @tap="pause" :text="'\ue034'" fontSize="48" style="text-align:center;" color="#f9ce35"/>
    </StackLayout>
  </FlexboxLayout>
</template>
<script>
  export default {
    data: () => {
      return {
        playing: false
      }
    },
    methods: {
      play() {
        this.playing = true;
      },
      pause() {
        this.playing = false;
      }
    }
  };
</script>
