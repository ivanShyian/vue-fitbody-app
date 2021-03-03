import fitbodyAxios from '@/axios/fitbody-requests'
import { modeNaming } from '@/utils/constants'

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
      const now = goal.currentWeight
      if (goal.mode === 250) {
        const dif = 100 / (goal['desired-weight'] - goal.weight)
        const current = now - goal.weight
        let result = dif * current
        if (result > 100) {
          result = 100
        } else if (result < 0) {
          result = 0
        }
        return Math.round(result)
      } else if (goal.mode === -100) {
        const dif = 100 / (goal.weight - goal['desired-weight'])
        const current = goal.weight - now
        let result = dif * current
        if (result > 100) {
          result = 100
        } else if (result < 0) {
          result = 0
        }
        return Math.round(result)
      } else {
        const max = +now + 10
        const min = now - 10
        if (now < goal.weight) {
          return Math.round((100 / goal.weight) * min)
        } else if (now > goal.weight) {
          console.log(max)
          return Math.round((100 / max) * goal.weight)
        } else {
          return 100
        }
      }
    },
    modeName(state, getters) {
      return getters.currentGoal.mode ? modeNaming[getters.currentGoal.mode] : 'Not set'
    }
  },
  mutations: {
    updateGoal(state, data) {
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
    }
  },
  actions: {
    async updateGoal({ state, getters, commit, rootGetters }, data) {
      const token = rootGetters['auth/token']
      const uid = rootGetters['auth/userId']
      commit('updateGoal', data)
      await getters.goals.map(el => {
        fitbodyAxios.put(`/users/${uid}/goals/list/${el.id}.json?auth=${token}`, el)
      })
    },
    async addGoal({ rootGetters, commit, dispatch }, goal) {
      try {
        const token = rootGetters['auth/token']
        const uid = rootGetters['auth/userId']
        const { data } = await fitbodyAxios.post(`/users/${uid}/goals/list.json?auth=${token}`, goal)
        commit('updateGoal', { ...goal, id: data.name })
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
