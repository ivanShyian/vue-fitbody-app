import fitbodyAxios from '@/axios/fitbody-requests'
import { results } from '@/utils/nutrition-results'

export default {
  namespaced: true,
  state() {
    return {
      nutritionList: {}
    }
  },
  getters: {
    nutrition(state) {
      return state.nutritionList
    },
    dailyResult(_, getters) {
      return results(getters.nutrition)
    }
  },
  mutations: {
    setList(state, payload) {
      state.nutritionList = payload
    },
    updateList(state, { source, item }) {
      if (Object.keys(state.nutritionList).length) {
        state.nutritionList[source] = {
          ...state.nutritionList[source], ...{ [item.unicId]: item }
        }
      } else {
        state.nutritionList[source] = { [item.unicId]: item }
      }
    },
    clearNutrition(state) {
      state.nutrition = {}
    }
  },
  actions: {
    async loadNutrition({ commit, rootGetters }) {
      try {
        const uid = rootGetters['auth/userId']
        const { data } = await fitbodyAxios.get(`/users/${uid}/nutrition.json`)
        if (!data) {
          throw new Error('List is empty')
        }
        commit('setList', data)
      } catch (e) {
        console.log(e.message)
      }
    },
    async updateNutrition({ commit, rootGetters, getters }, { source, item }) {
      try {
        const uid = rootGetters['auth/userId']
        commit('updateList', {
          source,
          item
        })
        await fitbodyAxios.put(`/users/${uid}/nutrition/${source}.json`, {
          ...getters.nutrition[source], ...{ [item.unicId]: item }
        })
      } catch (e) {
        console.log(e.message)
      }
    }
  }
}
