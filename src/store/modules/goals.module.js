import fitbodyAxios from '@/axios/fitbody-requests'

export default {
  namespaced: true,
  state() {
    return {
      goalsList: [],
      goalCounter: 0
    }
  },
  getters: {
    counter(state) {
      return state.goalCounter
    },
    currentGoal(state, getters) {
      return getters.goals[getters.counter]
    },
    goals(state) {
      return state.goalsList
    },
    progressValue(state, getters) {
      const goal = getters.currentGoal
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
    updateGoal(state, data) {
      state.goalsList[data.id] = data.goal
    },
    loadGoal(state, data) {
      state.goalsList.push(data)
    }
  },
  actions: {
    async updateGoal({ state, getters, commit, rootGetters }, data) {
      const token = rootGetters['auth/token']
      const uid = rootGetters['auth/userId']
      await fitbodyAxios.put(`/users/${uid}/goals/${data.id}.json?auth=${token}`, data.goal)
    }
  }
}
