import fitbodyAxios from '@/axios/fitbody-requests'
import { modeNaming } from '@/utils/constants'

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
      if (getters.currentGoal) {
        if (getters.currentGoal.mode === 0) {
          return modeNaming[getters.currentGoal.mode]
        }
        return getters.currentGoal.mode ? modeNaming[getters.currentGoal.mode] : 'Not set'
      }
    }
  },
  mutations: {
    updateGoal(state, data) {
      if (data) {
        if (!state.goalList.length) {
          state.goalList = [data]
          state.activeGoal = data.id
        } else {
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
      await getters.goals.map(el => {
        fitbodyAxios.put(`/users/${uid}/goals/${el.id}.json?auth=${token}`, el)
        return console.log(el)
      })
    }
  }
}
