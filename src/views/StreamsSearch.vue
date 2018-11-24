<template>
  <div class="hello">
    <div class="search-section px-3">
      <v-text-field
        label="Search Streams"
        solo
        @input="onChange"
        v-model="streamName"
        prepend-inner-icon="search"
        clearable
      />
      <v-text-field
        solo
        :mask="mask"
        type="number"
        v-model="numberOfStreams"
        label="Value"
        prepend-inner-icon="list"
        @change="setNumberOfStreams"
        persistent-hint
        hint="Number of results"
        class="number-of-items"
      />
    </div>

    <StreamLoading v-if="streamsLoading" />
    <StreamListError v-else-if="streamsError" />
    <StreamListEmptyQuery v-else-if="emptyQuery"/>
    <StreamListNoResults v-else-if="streams && streams.length === 0"/>
    <StreamList
      v-else-if="streams"
      :streams="streams"
      @load-more="searchMoreStreams"
    />

  </div>
</template>
<script>
import debounce from '@/utils/debounce'
import StreamListEmptyQuery from '@/components/StreamListEmptyQuery'
import StreamListError from '@/components/StreamListError'
import StreamLoading from '@/components/StreamLoading'
import StreamListNoResults from '@/components/StreamListNoResults'
import StreamList from '@/components/StreamList'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  components: {
    StreamListEmptyQuery,
    StreamListError,
    StreamLoading,
    StreamListNoResults,
    StreamList
  },
  data () {
    return {
      streamName: '',
      numberOfStreams: null,
      mask: '##'
    }
  },
  computed: {
    ...mapGetters({
      streamsLoading: 'streamsLoading',
      streamsError: 'streamsError',
      streams: 'streams'
    }),
    emptyQuery () {
      return this.streamName === '' || this.streamName === null || this.streamName === undefined
    }
  },
  created () {
    this.numberOfStreams = localStorage.getItem('numberOfStreams') || 20
  },
  methods: {
    ...mapActions({
      searchStreams: 'searchStreams',
      searchMoreStreams: 'searchMoreStreams'
    }),
    setNumberOfStreams () {
      localStorage.setItem('numberOfStreams', this.numberOfStreams)
    },
    onChange: debounce(function () {
      this.searchStreams({
        query: this.streamName,
        limit: this.numberOfStreams
      })
    }, 250)
  }
}
</script>

<style scoped>
.search-section {
  display: flex;
  margin: auto;
}
.number-of-items {
  width: 125px;
  flex: none;
}
</style>
