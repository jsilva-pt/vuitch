import { apiSearchStreams, apiGetStream } from '@/api'

const searchStreams = ({ commit }, params) => {
  commit('STREAMS_LOADING', params.query)

  if (params.query) {
    apiSearchStreams({ params })
      .then((response) => {
        commit('STREAMS_UPDATED', response)
      })
      .catch(() => {
        commit('STREAMS_ERROR')
      })
  } else {
    commit('STREAMS_UPDATED', {})
  }
}

const searchMoreStreams = ({ commit, state }) => {
  commit('STREAMS_LOADING_MORE')

  apiSearchStreams({ link: state.nextPage })
    .then((response) => {
      commit('STREAMS_ADDED', response)
    })
    .catch(() => {
      commit('STREAMS_ERROR')
    })
}

const getStream = ({ commit, state }, id) => {
  commit('STREAM_LOADING')

  apiGetStream(id)
    .then((response) => {
      commit('STREAM_UPDATED', response)
    })
    .catch(() => {
      commit('STREAM_ERROR')
    })
}

const getStreamInfo = ({ commit, state }, id) => {
  apiGetStream(id)
    .then((response) => {
      commit('STREAM_UPDATED', response)
    })
    .catch(() => {
      commit('STREAM_ERROR')
    })
}

export default {
  getStream,
  getStreamInfo,
  searchStreams,
  searchMoreStreams
}
