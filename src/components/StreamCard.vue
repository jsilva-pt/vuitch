<template>
  <v-card
    class="stream-card"
    hover
    @click="$router.push({name: 'stream-details', params: { name: channelName }})">
    <v-img
      :src="thumb"
      lazy-src="/stream_placeholder.jpg"
      aspect-ratio="1"
      class="grey lighten-2"
      width="320"
      height="180"
    >
      <v-layout
        slot="placeholder"
        fill-height
        align-center
        justify-center
        ma-0
      >
        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
      </v-layout>
    </v-img>

    <div class="pa-2">
      <span class="subheading">{{ channelName }}</span>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'stream-card',
  props: {
    thumb: {
      type: String
    },
    channelName: {
      type: String
    }
  }
}
</script>

<style scoped>
.stream-card {
  cursor: pointer
}

img {
  display: block;
}
</style>
