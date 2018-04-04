import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    test: 3,
  },
  mutations: {
    increment(state, payload) {
      state.count = payload.text + "通过action提交到mutations的数据"
      state.test = payload.test2 + "通过action提交到mutations的数据"
    }
  },
  actions: {
    someActions({ commit }, payload) {
      commit('increment', payload)
    }
  },
});
export default store;