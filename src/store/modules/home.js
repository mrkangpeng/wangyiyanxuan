import {
  HIDE_DEFAULT_BAR
} from '../mutation-types'
const state = {
  isShowDefaultBar: true
}
const mutations = {
  [HIDE_DEFAULT_BAR](state) {
    state.isShowDefaultBar = false
  }
}

const actions = {

}

const getters = {

}

export default{
  state,
  mutations,
  actions,
  getters
}