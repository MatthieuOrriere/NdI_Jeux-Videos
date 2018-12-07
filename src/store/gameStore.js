import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      currentMap: null,
      currentArea: null
    },
    mutations: {
      setCurrentMap (state, id) {
        Vue.set(state, 'currentMap', id)
      },
      setCurrentArea (state, id) {
        Vue.set(state, 'currentArea', id)
      }
    }
  })
