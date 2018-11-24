<template>
  <div>
    https://dev.twitch.tv/docs/embed/video-and-clips/

    https://dev.twitch.tv/docs/api/reference/#get-webhook-subscriptions
    https://dev.twitch.tv/docs/api/webhooks-reference/

    Stream Viewer
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'stream-viewer',
  created () {
    axios.post(`helix/streams`, {
      
    }).then((response) => {
        this.streams = response.data.streams
      }).then(() => {
        this.loading = false
      })
  }
}
</script>

<style scoped>

</style>
