import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutation'
// import createLogger from 'vuex/dist/logger'
import state from './state'
Vue.use(Vuex)
// const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
