import { shallow, createLocalVue, mount } from '@vue/test-utils'
import _ from 'lodash'
import Vuex from 'vuex'
import flushPromises from 'flush-promises'
import { createRenderer } from 'vue-server-renderer'
import Basic from '@/views/tables/Basic'

describe('Tables', () => {
    let store
    let actions
    let state
    let getters
    let wrapper
    let localVue

    beforeEach(() => {
        localVue = createLocalVue()
        localVue.use(Vuex)

        state = {}
        actions = {
            sample: jest.fn()
        }
        getters = {}

        store = new Vuex.Store({
          actions,
          getters,
          modules: {
            state
          }
        })
    })

    it('is a Vue instance', () => {
        wrapper = shallow(Basic, { 
            store, 
            localVue
        })
        expect(wrapper.isVueInstance()).toBeTruthy()

    })

    afterEach(() => {
        const renderer = createRenderer()
        renderer.renderToString(wrapper.vm, (err, str) => {
          if (err) throw new Error(err)
          expect(str).toMatchSnapshot()
        })
    })
})