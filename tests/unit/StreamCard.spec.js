import Vue from 'vue'
import { mount } from '@vue/test-utils'
import StreamCard from '@/components/StreamCard.vue'
import Vuetify from 'vuetify'

describe('StreamCard.vue', () => {
  it('renders props.channelName when passed', () => {
    const channelName = 'Title'
    Vue.use(Vuetify)
    const wrapper = mount(
      StreamCard,
      { propsData: { channelName } }
    )
    expect(wrapper.text()).toMatch(channelName)
  })
})
