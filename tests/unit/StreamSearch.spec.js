import Vue from 'vue'
import { mount } from '@vue/test-utils'
import StreamSearch from '@/views/StreamSearch.vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
Vue.use(Vuex)
Vue.use(Vuetify)

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      limit: '',
      search: '',
      loading_streams: '',
      error: '',
      suggestion: '',
      no_results: ''
    }
  }
})

describe('StreamSearch.vue', () => {
  let getters
  let store
  let actions = {
    searchStreams: jest.fn(),
    searchMoreStreams: jest.fn()
  }

  it('Renders "limit Input" with the value saved on localstorage', () => {
    getters = {
      streamsLoading: jest.fn(),
      streamsError: jest.fn(),
      streams: jest.fn(),
      query: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      getters,
      actions
    })

    localStorage.setItem('limit', 10)

    const wrapper = mount(
      StreamSearch, { store, i18n }
    )

    expect(wrapper.vm.limit).toBe(10)
  })

  it('Renders "limit Input" with default value of 25 if non saved on localstorage', () => {
    getters = {
      streamsLoading: jest.fn(),
      streamsError: jest.fn(),
      streams: jest.fn(),
      query: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      getters,
      actions
    })

    localStorage.removeItem('limit')

    const wrapper = mount(
      StreamSearch, { store, i18n }
    )

    expect(wrapper.vm.limit).toBe(25)
  })

  it('Renders only "StreamLoading" when loading', () => {
    getters = {
      streamsLoading: jest.fn(x => true),
      streamsError: jest.fn(),
      streams: jest.fn(),
      query: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      getters,
      actions
    })

    const wrapper = mount(
      StreamSearch, { store, i18n }
    )
    expect(wrapper.findAll('.stream-loading').exists()).toBe(true)
    expect(wrapper.findAll('.stream-list-error').exists()).toBe(false)
    expect(wrapper.findAll('.stream-list-empty-query').exists()).toBe(false)
    expect(wrapper.findAll('.stream-list-no-results').exists()).toBe(false)
    expect(wrapper.findAll('.stream-list').exists()).toBe(false)
  })

  it('Renders only "StreamListError" when loading', () => {
    getters = {
      streamsLoading: jest.fn(),
      streamsError: jest.fn(x => true),
      streams: jest.fn(),
      query: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      getters,
      actions
    })

    const wrapper = mount(
      StreamSearch, { store, i18n }
    )
    expect(wrapper.findAll('.stream-loading').exists()).toBe(false)
    expect(wrapper.findAll('.stream-list-error').exists()).toBe(true)
    expect(wrapper.findAll('.stream-list-empty-query').exists()).toBe(false)
    expect(wrapper.findAll('.stream-list-no-results').exists()).toBe(false)
    expect(wrapper.findAll('.stream-list').exists()).toBe(false)
  })

  it('Renders only "StreamListEmptyQuery" when loading', () => {
    getters = {
      streamsLoading: jest.fn(),
      streamsError: jest.fn(),
      streams: jest.fn(),
      query: jest.fn(x => '')
    }
    store = new Vuex.Store({
      state: {},
      getters,
      actions
    })

    const wrapper = mount(
      StreamSearch, { store, i18n }
    )
    expect(wrapper.findAll('.stream-loading').exists()).toBe(false)
    expect(wrapper.findAll('.stream-list-error').exists()).toBe(false)
    expect(wrapper.findAll('.stream-list-empty-query').exists()).toBe(true)
    expect(wrapper.findAll('.stream-list-no-results').exists()).toBe(false)
    expect(wrapper.findAll('.stream-list').exists()).toBe(false)
  })

  it('Renders only "StreamListNoResults" when loading', () => {
    getters = {
      streamsLoading: jest.fn(),
      streamsError: jest.fn(),
      streams: jest.fn(x => []),
      query: jest.fn(x => 'aaa')
    }
    store = new Vuex.Store({
      state: {},
      getters,
      actions
    })

    const wrapper = mount(
      StreamSearch, { store, i18n }
    )
    expect(wrapper.findAll('.stream-loading').exists()).toBe(false)
    expect(wrapper.findAll('.stream-list-error').exists()).toBe(false)
    expect(wrapper.findAll('.stream-list-empty-query').exists()).toBe(false)
    expect(wrapper.findAll('.stream-list-no-results').exists()).toBe(true)
    expect(wrapper.findAll('.stream-list').exists()).toBe(false)
  })

  it('Renders only "StreamList" when loading', () => {
    getters = {
      streamsLoading: jest.fn(),
      streamsError: jest.fn(),
      streams: jest.fn(x => [{}, {}]),
      query: jest.fn(x => 'aaa'),
      hasNextPage: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      getters,
      actions
    })

    const wrapper = mount(
      StreamSearch, { store, i18n }
    )
    expect(wrapper.findAll('.stream-loading').exists()).toBe(false)
    expect(wrapper.findAll('.stream-list-error').exists()).toBe(false)
    expect(wrapper.findAll('.stream-list-empty-query').exists()).toBe(false)
    expect(wrapper.findAll('.stream-list-no-results').exists()).toBe(false)
    expect(wrapper.findAll('.stream-list').exists()).toBe(true)
  })
})
