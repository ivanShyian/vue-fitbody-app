import fitbodyAxios from '@/axios/fitbody-requests'
import { modeNaming } from '@/utils/constants'
import { progress } from '@/utils/goal-progress'

export default {
  namespaced: true,
  state() {
    return {
      goalList: [],
      activeGoal: ''
    }
  },
  getters: {
    currentGoal(state) {
      return state.goalList ? state.goalList.find(el => el.id === state.activeGoal) : null
    },
    goals(state) {
      return state.goalList
    },
    progressValue(state, getters) {
      const goal = getters.currentGoal
      const currentWeight = goal.currentWeight
      return progress(goal, currentWeight)
    },
    modeName(state, getters) {
      return getters.currentGoal.mode ? modeNaming[getters.currentGoal.mode] : 'Not set'
    }
  },
  mutations: {
    addGoal(state, data) {
      if (data) {
        if (!state.goalList.length) {
          state.goalList = [data]
        } else {
          state.goalList.push(data)
        }
      }
    },
    loadGoal(state, data) {
      state.goalList = Object.keys(data).map(goal => {
        return {
          id: goal,
          ...data[goal]
        }
      })
    },
    setActive(state, id) {
      state.activeGoal = id
    },
    clear(state) {
      state.activeGoal = null
      state.goalList = []
    },
    updateWeight(state, goals) {
      state.goalList = goals
    },
    updateCurrentGoal(state, goal) {
      state.goalList = state.goalList.map(el => {
        if (el.id === state.activeGoal) {
          return goal
        }
        return el
      })
    }
  },
  actions: {
    async updateGoal({ rootGetters, commit }, goal) {
      try {
        const { id, ...data } = goal
        const token = rootGetters['auth/token']
        const uid = rootGetters['auth/userId']
        await fitbodyAxios.patch(`/users/${uid}/goals/list/${id}.json?auth=${token}`, data)
        commit('updateCurrentGoal', goal)
      } catch (e) {
      }
    },
    async updateWeight({ state, getters, commit, rootGetters }, data) {
      try {
        const token = rootGetters['auth/token']
        const uid = rootGetters['auth/userId']
        await data.map(g => {
          const { id, ...data } = g
          fitbodyAxios.put(`/users/${uid}/goals/list/${id}.json?auth=${token}`, data)
        })
        commit('updateWeight', data)
      } catch (e) {
        console.warn(e)
      }
    },
    async addGoal({ rootGetters, commit, dispatch }, goal) {
      try {
        const token = rootGetters['auth/token']
        const uid = rootGetters['auth/userId']
        const { data } = await fitbodyAxios.post(`/users/${uid}/goals/list.json?auth=${token}`, goal)
        commit('addGoal', { ...goal, id: data.name })
        await dispatch('setActiveGoal', data.name)
      } catch (e) {
        console.warn(e)
      }
    },
    async setActiveGoal({ rootGetters, commit }, activeGoal) {
      try {
        const token = rootGetters['auth/token']
        const uid = rootGetters['auth/userId']
        await fitbodyAxios.patch(`/users/${uid}/goals.json?auth=${token}`, { activeGoal })
        commit('setActive', activeGoal)
      } catch (e) {
        console.warn(e)
      }
    },
    async loadGoals({ rootGetters, commit }) {
      try {
        const token = rootGetters['auth/token']
        const uid = rootGetters['auth/userId']
        const { data } = await fitbodyAxios.get(`/users/${uid}/goals.json?auth=${token}`)
        if (data) {
          commit('loadGoal', data.list)
          commit('setActive', data.activeGoal)
        }
      } catch (e) {
        console.warn(e)
      }
    }
  }
}
