<template>
  <div>
    <iframe
      v-if="stream"
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
      class="details pa-3">
      <div class="subheading">{{ stream.status }}</div>
      <div class="viewers">
        <v-icon class="mr-2">people</v-icon> {{ stream.viewers }}
        <v-icon class="mx-2">remove_red_eye</v-icon> {{ stream.views }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'stream-details',
  data () {
    return {
      height: 400,
      width: window.innerWidth,
      src: `https://player.twitch.tv/?channel=${this.$route.params.name}`
    }
  },
  created () {
    this.getStream(this.$route.params.name)
  },
  computed: {
    ...mapGetters({
      stream: 'stream'
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
