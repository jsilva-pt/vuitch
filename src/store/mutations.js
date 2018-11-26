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
  state.streamsLoadingMore = false
  state.streamsError = true
}

const STREAMS_LOADING_MORE = (state) => {
  state.streamsLoadingMore = true
  state.streamsError = false
}

const STREAMS_ADDED = (state, data) => {
  state.streamsLoadingMore = false
  // ignore duplicated streams sometimes sent by api
  const uniqueStreams = data.streams.filter(x => !state.streams.some(y => y.id === x.id))
  state.streams = state.streams.concat(uniqueStreams)
  state.nextPage = data.next
}

const STREAM_LOADING = (state) => {
  state.streamLoading = true
  state.streamError = false
}

const STREAM_UPDATED = (state, data) => {
  state.streamLoading = false
  state.stream = data
}

const STREAM_ERROR = (state) => {
  state.streamLoading = false
  state.streamError = true
}

export default {
  STREAMS_LOADING,
  STREAMS_LOADING_MORE,
  STREAMS_UPDATED,
  STREAMS_ADDED,
  STREAMS_ERROR,

  STREAM_LOADING,
  STREAM_UPDATED,
  STREAM_ERROR
}
