import Vue from 'vue'
import { mount } from '@vue/test-utils'
import StreamListNoResults from '@/components/StreamListNoResults.vue'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
Vue.use(Vuetify)

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      no_results: 'no_results translation'
    }
  }
})

describe('StreamListNoResults.vue', () => {
  it('renders StreamListNoResults correctly', () => {
    const wrapper = mount(
      StreamListNoResults, { i18n }
    )

    expect(wrapper.text()).toMatch('no_results translation')
  })
})
