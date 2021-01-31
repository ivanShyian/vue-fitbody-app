import fitbodyAxios from '@/axios/fitbody-requests'

export default {
  namespaced: true,
  state() {
    return {
      goalList: [],
      goalCounter: 0
    }
  },
  getters: {
    counter(state) {
      return state.goalCounter
    },
    currentGoal(state, getters) {
      return state.goalList[getters.counter]
    },
    goals(state) {
      return state.goalList
    },
    progressValue(state, getters) {
      const goal = getters.currentGoal
      console.log(goal)
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
      if (!state.goalList.length) {
        state.goalList = [data]
      } else {
        state.goalList = state.goalList.map(el => ({ ...el, ...data }))
      }
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
      console.log('upd', data)
      await commit('updateGoal', data)
      await Object.keys(getters.goals).map(el => (
        fitbodyAxios.put(`/users/${uid}/goals/${getters.goals[el].id}.json?auth=${token}`, getters.goals[el])
      ))
    }
  }
}
