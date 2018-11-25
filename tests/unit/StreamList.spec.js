import Vue from 'vue'
import { mount } from '@vue/test-utils'
import StreamList from '@/components/StreamList.vue'
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
      load_more: 'Load {num} more'
    }
  }
})

describe('StreamList.vue', () => {
  let getters
  let store

  it('Render the correct number of Stream Cards', () => {
    const limit = 5

    getters = {
      streamsLoadingMore: jest.fn(x => false),
      hasNextPage: jest.fn(x => false)
    }
    store = new Vuex.Store({
      state: {},
      getters
    })
    const streams = [
      {
        id: 1,
        channelName: 'a'
      },
      {
        id: 2,
        channelName: 'b'
      }
    ]

    const wrapper = mount(
      StreamList,
      { propsData: { limit, streams }, store }
    )
    expect(wrapper.findAll('.stream-card').length).toBe(2)
  })

  it('Do not render "load more" button when no more results', () => {
    const limit = 5

    getters = {
      streamsLoadingMore: jest.fn(x => false),
      hasNextPage: jest.fn(x => false)
    }
    store = new Vuex.Store({
      state: {},
      getters
    })

    const wrapper = mount(
      StreamList,
      { propsData: { limit }, store }
    )
    expect(wrapper.find('.cy-load-more').exists()).toBe(false)
  })

  it('renders "load more" button correctly', () => {
    const limit = 5

    getters = {
      streamsLoadingMore: jest.fn(x => false),
      hasNextPage: jest.fn(x => true)
    }
    store = new Vuex.Store({
      state: {},
      getters
    })

    const wrapper = mount(
      StreamList,
      { propsData: { limit }, store, i18n }
    )
    expect(wrapper.find('.cy-load-more').exists()).toBe(true)
    expect(wrapper.find('.cy-load-more').text()).toBe('Load 5 more')
  })

  it('displays "load more" button correctly when loading more results', () => {
    const limit = 5

    getters = {
      streamsLoadingMore: jest.fn(x => true),
      hasNextPage: jest.fn(x => true)
    }
    store = new Vuex.Store({
      state: {},
      getters
    })

    const wrapper = mount(
      StreamList,
      { propsData: { limit }, store, i18n }
    )
    expect(wrapper.find('.cy-load-more').exists()).toBe(true)
    expect(wrapper.find('.v-progress-circular').exists()).toBe(true)
  })
})
