<template>
  <StreamListError
    v-if="streamError"
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
      <div class="subheading">
        {{ stream.status }}
      </div>

      <div class="viewers">
        <v-icon class="mr-2">people</v-icon>
        <span class="cy-viewers">{{ stream.viewers }}</span>

        <v-icon class="mx-2">remove_red_eye</v-icon>
        <span class="cy-views">{{ stream.views }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import StreamListError from '@/components/StreamListError'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'stream-details',
  components: {
    StreamListError
  },
  data () {
    return {
      height: 400,
      width: window.innerWidth,
      src: `${process.env.VUE_APP_TWITCH_PLAYER_URL}channel=${this.$route.params.name}`
    }
  },
  created () {
    this.getStream(this.$route.params.name)
    setInterval(() => {
      this.getStream(this.$route.params.name)
    }, 60000)
  },
  computed: {
    ...mapGetters({
      stream: 'stream',
      streamError: 'streamError'
    })
  },
  methods: {
    ...mapActions({
      getStream: 'getStream'
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

.viewers {
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
