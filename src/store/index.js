import { createStore, createLogger } from 'vuex'
import fitbodyAxios from '@/axios/fitbody-requests'
import auth from './modules/auth.module'
import alert from './modules/alert.module'
import register from './modules/register.module'
import menuList from './modules/menuList.module'
import calories from './modules/calories.module'
import update from './modules/update.module'

const plugins = []
if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

export default createStore({
  plugins,
  state() {
    return {
      userData: {}
    }
  },
  mutations: {
    setData(state, extraData) {
      if (extraData.height) {
        state.userData = { ...state.userData, params: extraData }
      } else {
        state.userData = { ...state.userData, ...extraData }
      }
    },
    clearData(state) {
      state.userData = {}
    }
  },
  getters: {
    userData(state) {
      return state.userData
    },
    isEmpty(state) {
      return Object.keys(state.userData).length === 0
    },
    firstVisit(state) {
      return !state.userData.params
    },
    progressValue(state) {
      const now = 78
      const dif = 100 / (state.userData.params['desired-weight'] - state.userData.params.weight)
      const current = now - state.userData.params.weight
      const result = dif * current
      return Math.floor(result)
    }
  },
  actions: {
    async load({ rootGetters, commit }) {
      const token = rootGetters['auth/token']
      const uid = rootGetters['auth/userId']
      const { data } = await fitbodyAxios.get(`/users/${uid}.json?auth=${token}`)
      commit('setData', data)
    },
    async update({ state, getters, commit, rootGetters }, extraData) {
      const token = rootGetters['auth/token']
      const uid = rootGetters['auth/userId']
      commit('setData', extraData)
      await fitbodyAxios.put(`/users/${uid}.json?auth=${token}`, getters.userData)
    }
  },
  modules: {
    auth,
    alert,
    register,
    menuList,
    calories,
    update
  }
})
