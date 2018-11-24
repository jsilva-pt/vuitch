const streams = (state) => state.streams
const streamsLoading = (state) => state.streamsLoading
const streamsLoadingMore = (state) => state.streamsLoadingMore
const streamsError = (state) => state.streamsError
const hasNextPage = (state) => state.nextPage
const query = (state) => state.query
const stream = (state) => state.stream

export default {
  streams,
  streamsLoading,
  streamsLoadingMore,
  streamsError,
  hasNextPage,
  query,
  stream
}
