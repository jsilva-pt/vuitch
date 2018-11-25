<template>
  <div>
    <div class="search-section px-3 mt-3">
        <v-text-field
          :label="$t('search')"
          @input="onChange"
          v-model="q"
          prepend-inner-icon="search"
          clearable
          hide-details
          class="cy-search"
        />
        <v-text-field
          :mask="limitMask"
          v-model="limit"
          :label="$t('limit')"
          @change="setlimit"
          class="limit cy-limit"
        />
    </div>

    <StreamLoading
      v-if="streamsLoading"
      :msg="$t('loading_streams')"
    />

    <StreamListError
      v-else-if="streamsError"
    />

    <StreamListEmptyQuery
      v-else-if="emptyQuery"
    />

    <StreamListNoResults
      v-else-if="noResults"
    />

    <StreamList
      v-else-if="streams"
      :streams="streams"
      @load-more="searchMoreStreams"
      :limit="qLimit"
    />

  </div>
</template>
<script>
import { debounce } from '@/utils'
import StreamLoading from '@/components/StreamLoading'
import StreamList from '@/components/StreamList'
import StreamListEmptyQuery from '@/components/StreamListEmptyQuery'
import StreamListError from '@/components/StreamListError'
import StreamListNoResults from '@/components/StreamListNoResults'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'StreamSearch',
  components: {
    StreamLoading,
    StreamList,
    StreamListEmptyQuery,
    StreamListError,
    StreamListNoResults
  },
  data () {
    return {
      q: null,
      qLimit: null,
      defaultLimit: 25,
      limit: null,
      limitMask: '##'
    }
  },
  computed: {
    ...mapGetters({
      streamsLoading: 'streamsLoading',
      streamsError: 'streamsError',
      streams: 'streams',
      query: 'query'
    }),
    emptyQuery () {
      return this.q === '' || this.q === null || this.q === undefined
    },
    noResults () {
      return !this.emptyQuery && this.streams && this.streams.length === 0
    }
  },
  created () {
    this.q = this.query || ''
    this.limit = parseInt(localStorage.getItem('limit')) || this.defaultLimit
    this.qLimit = this.limit
  },
  methods: {
    ...mapActions({
      searchStreams: 'searchStreams',
      searchMoreStreams: 'searchMoreStreams'
    }),
    setlimit () {
      if (this.limit) {
        localStorage.setItem('limit', this.limit)
      } else {
        this.limit = parseInt(localStorage.getItem('limit'))
      }
    },
    onChange: debounce(function () {
      this.qLimit = parseInt(this.limit)
      this.searchStreams({
        query: this.q,
        limit: this.limit
      })
    }, 250)
  }
}
</script>

<style scoped>
.search-section {
  display: flex;
}
.limit {
  width: 100px;
  flex: none;
}
</style>
