import fitbodyAxios from '@/axios/fitbody-requests'

export default {
  namespaced: true,
  state() {
    return {
      nutritionList: {},
      nutResults: {}
    }
  },
  getters: {
    nutrition(state) {
      return state.nutritionList
    },
    calories(_, getters) {
      console.log(getters.nutrition)
      return getters.nutrition
    },
    itemResults() {}
  },
  mutations: {
    calcResults() {
      // if (this.currentDishes) {
      //   this.currentDishes.map(el => {
      //     return el.nutrients
      //   }).reduce((acc, curr) => {
      //     if (curr.FAT) {
      //       result.FAT += curr.FAT
      //     }
      //     if (curr.CHOCDF) {
      //       result.CHOCDF += curr.FAT
      //     }
      //     if (curr.PROCNT) {
      //       result.PROCNT += curr.PROCNT
      //     }
      //     if (curr.ENERC_KCAL) {
      //       result.ENERC_KCAL += curr.FAT
      //     }
      //     return acc
      //   }, 0)
    },
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
      console.log(state.nutritionList)
    }
  },
  actions: {
    async loadNutrition({ commit, rootGetters }) {
      try {
        const token = rootGetters['auth/token']
        const uid = rootGetters['auth/userId']
        const { data } = await fitbodyAxios.get(`/users/${uid}/nutrition.json?auth=${token}`)
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
        const token = rootGetters['auth/token']
        const uid = rootGetters['auth/userId']
        commit('updateList', { source, item })
        const response = await fitbodyAxios.put(`/users/${uid}/nutrition/${source}.json?auth=${token}`, {
          ...getters.nutrition[source], ...{ [item.unicId]: item }
        })
        console.log(response)
      } catch (e) {
        console.log(e.message)
      }
    }
  }
}
