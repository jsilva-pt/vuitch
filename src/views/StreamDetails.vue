<template>
  <StreamLoading
    v-if="streamLoading"
    :msg="$t('loading_stream')"
    class="mt-5"
  />

  <StreamListError
    v-else-if="streamError"
    class="mt-5"
  />

  <div v-else>
    <iframe
      v-if="src"
      class="frame"
      :src="src"
      :height="height"
      :width="width"
      frameborder="0"
      scrolling="no"
      :allowfullscreen="true">
    </iframe>

    <div
      v-if="stream"
      class="details pa-3"
    >
      <div class="first-line">
        <div>
          <span class="title cy-name">{{ stream.name }}</span>
        </div>
        <div class="viewers">
          <v-icon class="mr-2">people</v-icon>
          <span class="cy-viewers">{{ stream.viewers }}</span>
          <v-icon class="mx-2">remove_red_eye</v-icon>
          <span class="cy-views">{{ stream.views }}</span>
        </div>
      </div>

      <div class="subheading">
        {{ stream.status }}
      </div>

      <div class="game">
        <v-icon class="mr-2">games</v-icon>
        <span class="cy-game">{{ stream.game }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import StreamListError from '@/components/StreamListError'
import StreamLoading from '@/components/StreamLoading'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'stream-details',
  components: {
    StreamLoading,
    StreamListError
  },
  data () {
    return {
      interval: null,
      height: 400,
      width: window.innerWidth,
      src: `${process.env.VUE_APP_TWITCH_PLAYER_URL}channel=${this.$route.params.name}`
    }
  },
  created () {
    this.getStream(this.$route.params.name)
    this.interval = setInterval(() => {
      this.getStreamInfo(this.$route.params.name)
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  computed: {
    ...mapGetters({
      stream: 'stream',
      streamLoading: 'streamLoading',
      streamError: 'streamError'
    })
  },
  methods: {
    ...mapActions({
      getStream: 'getStream',
      getStreamInfo: 'getStreamInfo'
    })
  }
}
</script>

<style scoped>
.frame {
  max-width: 100%;
}
.details {
  display: flex;
  flex-direction: column;
}
.first-line {
  display: flex;
  justify-content: space-between;
}
.viewers {
  text-align: right;
  display: flex;
  align-items: center;
}
.game {
  display: flex;
  align-items: center;
}
</style>
