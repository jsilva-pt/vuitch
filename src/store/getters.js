const streams = (state) => state.streams
const streamsLoading = (state) => state.streamsLoading
const streamsLoadingMore = (state) => state.streamsLoadingMore
const streamsError = (state) => state.streamsError
const hasNextPage = (state) => state.nextPage

export default {
  streams,
  streamsLoading,
  streamsLoadingMore,
  streamsError,
  hasNextPage
}
