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
    loadData(state, data) {
      state.userData = { ...state.userData, ...data }
    },
    updateData(state, extraData) {
      if (extraData.weight) {
        state.userData = {
          ...state.userData,
          params: extraData
        }
      } else if (extraData.calories) {
        if (state.userData.calories['remaining-calories']) {
          state.userData = {
            ...state.userData,
            calories: {
              'old-remaining-calories': state.userData.calories['remaining-calories'],
              'remaining-calories': extraData.calories
            }
          }
        } else {
          state.userData = {
            ...state.userData,
            calories: {
              'remaining-calories': extraData.calories
            }
          }
        }
      } else {
        state.userData = {
          ...state.userData,
          ...extraData
        }
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
      console.log(state.userData)
      return !state.userData.params
    },
    progressValue(state) {
      const now = state.userData.params.newWeight || state.userData.params.weight
      if (state.userData.params.mode === 0) {
        const dif = 100 / (state.userData.params['desired-weight'] - state.userData.params.weight)
        const current = now - state.userData.params.weight
        let result = dif * current
        if (result > 100) {
          result = 100
        } else if (result < 0) {
          result = 0
        }
        return Math.round(result)
      } else if (state.userData.params.mode === 1) {
        const dif = 100 / (state.userData.params.weight - state.userData.params['desired-weight'])
        const current = state.userData.params.weight - now
        let result = dif * current
        if (result > 100) {
          result = 100
        } else if (result < 0) {
          result = 0
        }
        return Math.round(result)
      }
    }
  },
  actions: {
    async load({
      rootGetters,
      commit
    }) {
      const token = rootGetters['auth/token']
      const uid = rootGetters['auth/userId']
      const { data } = await fitbodyAxios.get(`/users/${uid}.json?auth=${token}`)
      commit('loadData', data)
    },
    async update({
      state,
      getters,
      commit,
      rootGetters
    }, extraData) {
      const token = rootGetters['auth/token']
      const uid = rootGetters['auth/userId']
      commit('updateData', extraData)
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
