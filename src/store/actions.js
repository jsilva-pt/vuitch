import { apiSearchStreams } from '@/api'

const searchStreams = ({ commit }, params) => {
  commit('STREAMS_LOADING')

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

export default {
  searchStreams,
  searchMoreStreams
}
