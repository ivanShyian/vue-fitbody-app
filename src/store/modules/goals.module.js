import fitbodyAxios from '@/axios/fitbody-requests'

export default {
  namespaced: true,
  state() {
    return {
      goalList: [],
      activeGoal: null
    }
  },
  getters: {
    activeId(state) {
      return state.activeGoal
    },
    currentGoal(state, getters) {
      console.log(state.goalList.find(el => el.id === getters.activeId))
      return state.goalList.find(el => el.id === getters.activeId)
    },
    goals(state) {
      return state.goalList
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
      if (data) {
        if (!state.goalList.length) {
          console.log('bad')
          state.goalList = [data]
          state.activeGoal = data.id
        } else {
          console.log('good')
          state.goalList = data
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
      console.log('setted--------->', id)
      state.activeGoal = id
    },
    pushNewGoal(state, data) {
      state.goalList.push(data)
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
      await commit('updateGoal', data)
      await state.goalList.map(el => (
        fitbodyAxios.put(`/users/${uid}/goals/${el.id}.json?auth=${token}`, el)
      ))
    }
  }
}
