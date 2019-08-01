import {HIDE_DEFAULT_BAR,RECEIVE_PICS,RECEIVE_CATEGORY} from '../mutation-types'
import {reqCarouselPic,reqCategroies} from '../../api'
const state = {
  isShowDefaultBar: true,
  carouselPic:[],
  categories:[]
}
const mutations = {
  [HIDE_DEFAULT_BAR](state) {
    state.isShowDefaultBar = false
  },
  [RECEIVE_PICS](state,carouselPic){
    state.carouselPic = carouselPic
  },
  [RECEIVE_CATEGORY](state,categories){
    state.categories = categories
  }
}

const actions = {
  async getCarouselPic({commit}){
    const result = await reqCarouselPic()
    if (result.code === 0){
      const carouselPic = result.data.carousel
      commit(RECEIVE_PICS,carouselPic)
    }
  },
  async getCategories({commit}){
    const result = await reqCategroies()
    if (result.code === 0){
      const categories = result.data.categroies
      commit(RECEIVE_CATEGORY,categories)
    }
  }
}

const getters = {

}

export default{
  state,
  mutations,
  actions,
  getters
}