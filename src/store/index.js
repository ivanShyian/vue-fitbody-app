import { createStore, createLogger } from 'vuex'
import fitbodyAxios from '@/axios/fitbody-requests'
import auth from './modules/auth.module'
import alert from './modules/alert.module'
import register from './modules/register.module'
import menuList from './modules/menuList.module'
import calories from './modules/calories.module'
import goals from './modules/goals.module'

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
    updateData(state, payload) {
      state.userData = {
        ...state.userData,
        ...payload
      }
      console.log(state.userData)
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
    }
  },
  actions: {
    async load({ rootGetters, commit }) {
      try {
        const token = rootGetters['auth/token']
        const uid = rootGetters['auth/userId']
        const { data } = await fitbodyAxios.get(`/users/${uid}.json?auth=${token}`)
        commit('loadData', data)
        if (data.goals) {
          commit('goals/loadGoal', data.goals)
          commit('goals/setActive', data.activeGoal)
        }
      } catch (e) {
        console.log(e.message)
      }
    },
    async update({ state, getters, commit, rootGetters }, payload) {
      try {
        const token = rootGetters['auth/token']
        const uid = rootGetters['auth/userId']
        commit('updateData', payload)
        if (payload.goals) {
          Object.keys(payload.goals).map(el => {
            commit('goals/updateGoal', payload.goals[el])
          })
        }
        await fitbodyAxios.put(`/users/${uid}.json?auth=${token}`, getters.userData)
      } catch (e) {
        console.log(e.message)
      }
    }
  },
  modules: {
    auth,
    alert,
    register,
    menuList,
    calories,
    goals
  }
})
