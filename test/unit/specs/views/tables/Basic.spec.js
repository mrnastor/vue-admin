import { shallow, createLocalVue, mount } from '@vue/test-utils'
import _ from 'lodash'
import Vuex from 'vuex'
import flushPromises from 'flush-promises'
import { createRenderer } from 'vue-server-renderer'
import Basic from '@/views/tables/Basic'

describe('Settings > Voice', () => {
    let store
    let actions
    let state
    let getters
    let wrapper
    let localVue

    beforeEach(() => {
        localVue = createLocalVue()
        localVue.use(Vuex)

        state = { 
            settings: {
                voice: {
                    pitch: 1,
                    rate: 2,
                    volume: 3
                }
            }
        }
        actions = {
            sample: jest.fn()
        }
        getters = {
          settings: () => state.settings,
        }

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
            localVue,
            stubs: {
              chart: '<div>Chart Stub</div>'
            }
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