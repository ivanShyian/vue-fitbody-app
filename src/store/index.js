import { createStore, createLogger } from 'vuex'
import fitbodyAxios from '@/axios/fitbody-requests'
import auth from './modules/auth.module'
import alert from './modules/alert.module'
import register from './modules/register.module'
import calories from './modules/calories.module'
import goals from './modules/goals.module'
import edamam from './modules/edamam.module'
import nutrition from './modules/nutrition.module'

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
    params(state) {
      return state.userData.params
    },
    daysOfRegister(state) {
      const res = Math.floor((Date.now() - state.userData.registerDate) / (1000 * 60 * 60 * 24))
      if (res <= 1) {
        return res + ' day'
      } else {
        return res + ' days'
      }
    }
  },
  mutations: {
    loadData(state, data) {
      state.userData = { ...state.userData, ...data }
    },
    updateData(state, payload) {
      state.userData = {
        ...state.userData,
        ...payload
      }
    },
    clearData(state) {
      state.userData = {}
    },
    updateGoals(state, payload) {
      payload.map(el => {
        state.userData.goals[el.id] = el
      })
    }
  },
  actions: {
    async load({ rootGetters, commit }) {
      try {
        const uid = rootGetters['auth/userId']
        const { data } = await fitbodyAxios.get(`/users/${uid}.json`)
        commit('loadData', data)
      } catch (e) {
        console.log(e.message)
      }
    },
    async updateParams({ state, getters, commit, rootGetters }, payload) {
      try {
        const uid = rootGetters['auth/userId']
        await fitbodyAxios.put(`/users/${uid}/params.json`, payload)
        commit('updateData', { params: payload })
      } catch (e) {
        console.log(e.message)
      }
    },
    async updateStatus({ rootGetters, commit }, status) {
      try {
        const uid = rootGetters['auth/userId']
        await fitbodyAxios.patch(`/users/${uid}/.json`, status)
        commit('updateData', status)
      } catch (e) {
        console.log(e.message)
      }
    }
  },
  modules: {
    auth,
    alert,
    register,
    calories,
    goals,
    edamam,
    nutrition
  }
})
