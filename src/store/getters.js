const streams = (state) => state.streams
const streamsLoading = (state) => state.streamsLoading
const streamsLoadingMore = (state) => state.streamsLoadingMore
const streamsError = (state) => state.streamsError
const hasNextPage = (state) => state.nextPage
const query = (state) => state.query
const stream = (state) => state.stream
const streamLoading = (state) => state.streamLoading
const streamError = (state) => state.streamError

export default {
  streams,
  streamsLoading,
  streamsLoadingMore,
  streamsError,
  hasNextPage,
  query,
  stream,
  streamLoading,
  streamError
}
