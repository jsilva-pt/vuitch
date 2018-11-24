const STREAMS_LOADING = (state, query) => {
  state.streamsLoading = true
  state.streamsError = false
  state.query = query
}

const STREAMS_UPDATED = (state, data) => {
  state.streamsLoading = false
  state.streams = data.streams
  state.nextPage = data.next
}

const STREAMS_ERROR = (state) => {
  state.streamsLoading = false
  state.streamsError = true
}

const STREAMS_LOADING_MORE = (state) => {
  state.streamsLoadingMore = true
  state.streamsError = false
}

const STREAMS_ADDED = (state, data) => {
  state.streamsLoadingMore = false
  state.streams = state.streams.concat(data.streams)
  state.nextPage = data.next
}

const STREAM_UPDATED = (state, data) => {
  state.stream = data
}

export default {
  STREAMS_LOADING,
  STREAMS_LOADING_MORE,
  STREAMS_UPDATED,
  STREAMS_ADDED,
  STREAMS_ERROR,
  STREAM_UPDATED
}
