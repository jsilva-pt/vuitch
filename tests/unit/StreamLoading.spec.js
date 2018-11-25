import Vue from 'vue'
import { mount } from '@vue/test-utils'
import StreamLoading from '@/components/StreamLoading.vue'
import Vuetify from 'vuetify'

describe('StreamLoading.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Loading msg'
    Vue.use(Vuetify)
    const wrapper = mount(
      StreamLoading,
      { propsData: { msg } }
    )
    expect(wrapper.text()).toMatch(msg)
  })
})
