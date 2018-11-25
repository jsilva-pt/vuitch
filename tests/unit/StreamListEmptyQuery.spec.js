import Vue from 'vue'
import { mount } from '@vue/test-utils'
import StreamListEmptyQuery from '@/components/StreamListEmptyQuery.vue'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
Vue.use(Vuetify)

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      suggestion: 'suggestion translation'
    }
  }
})

describe('StreamListEmptyQuery.vue', () => {
  it('renders StreamListEmptyQuery correctly', () => {
    const wrapper = mount(
      StreamListEmptyQuery, { i18n }
    )

    expect(wrapper.text()).toMatch('suggestion translation')
  })
})
