import fitbodyAxios from '@/axios/fitbody-requests'

export default {
  namespaced: true,
  state() {
    return {
      goal: {}
    }
  },
  getters: {
    isGoal(state) {
      return state.goal
    },
    hasGoal(state) {
      return Object.keys(state.goal).length
    },
    progressValue(state, getters) {
      const goal = getters.isGoal
      const now = goal.currentWeight
      if (goal.mode === 0) {
        const dif = 100 / (goal['desired-weight'] - goal.weight)
        const current = now - goal.weight
        let result = dif * current
        if (result > 100) {
          result = 100
        } else if (result < 0) {
          result = 0
        }
        return Math.round(result)
      } else if (goal.mode === 1) {
        const dif = 100 / (goal.weight - goal['desired-weight'])
        const current = goal.weight - now
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
  mutations: {
    updGoal(state, data) {
      state.goal = data
    },
    loadGoal(state, data) {
      state.goalList = Object.keys(data).map(goal => {
        return {
          id: goal,
          ...data[goal]
        }
      })
    }
  },
  actions: {
    async updateGoal({
      state,
      getters,
      commit,
      rootGetters
    }, data) {
      const token = rootGetters['auth/token']
      const uid = rootGetters['auth/userId']
      console.log(data)
      commit('updGoal', data)
      await fitbodyAxios.put(`/users/${uid}/goal.json?auth=${token}`, getters.goals)
    }
  }
}
