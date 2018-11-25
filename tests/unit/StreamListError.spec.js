import Vue from 'vue'
import { mount } from '@vue/test-utils'
import StreamListError from '@/components/StreamListError.vue'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
Vue.use(Vuetify)

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      error: 'error translation'
    }
  }
})

describe('StreamListError.vue', () => {
  it('renders StreamListEmptyQuery correctly', () => {
    const wrapper = mount(
      StreamListError, { i18n }
    )

    expect(wrapper.text()).toMatch('error translation')
  })
})
