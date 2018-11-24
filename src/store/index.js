import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  streamsLoading: false,
  streamsLoadingMore: false,
  streamsError: false,
  streams: null,
  nextPage: null,
  query: null,
  stream: null
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
