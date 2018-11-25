<template>
  <div class="stream-list">
    <div class="cards">
      <stream-card
        v-for="stream in streams"
        :key="stream.id"
        :thumb="stream.thumb"
        :channelName="stream.channelName"
        class="my-2"
      />
    </div>
    <div class="load-more my-3">
      <v-btn
        v-if="hasNextPage"
        :dark="!streamsLoadingMore"
        :loading="streamsLoadingMore"
        :disabled="streamsLoadingMore"
        @click="$emit('load-more')"
        color="primary"
        class="cy-load-more"
      >
        {{ $t('load_more', { num: limit}) }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import StreamCard from './StreamCard'
import { mapGetters } from 'vuex'
export default {
  name: 'StreamList',
  components: {
    StreamCard
  },
  props: {
    streams: {
      type: Array
    },
    limit: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      streamsLoadingMore: 'streamsLoadingMore',
      hasNextPage: 'hasNextPage'
    })
  }
}
</script>

<style scoped>
.cards {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.load-more {
  text-align: center;
}
</style>
