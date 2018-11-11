import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogined : false,
    user  : {},
    sharehold_by_proj : []
  },
  mutations :  {
    login (state) {
      state.isLogined = true
    },
    logout (state) {
      state.isLogined = false
    },
    setuser (state, userinfo) {
      state.user = userinfo
    },
    getsharehold_by_proj  (state, shareholdinfo) {
      state.sharehold_by_proj = shareholdinfo
    }
  },
  getters : {
    getuser : state=> {
      return state.user
    }
  }
})
