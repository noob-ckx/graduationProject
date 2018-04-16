import Vue from 'vue'
import Vuex from 'vuex'
import api from './config'
import state from './state'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

const store = () => {
  return new Vuex.Store({
    state,
    actions,
    mutations,
    modules: {},
    strict: debug
  })
}
export default store