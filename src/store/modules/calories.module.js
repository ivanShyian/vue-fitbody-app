import store from '../index'
import fitbodyAxios from '@/axios/fitbody-requests'

export default {
  namespaced: true,
  state() {
    return {
      calculated: null,
      modeButtons: [
        { id: 0, name: 'Gain weight', value: 250 },
        { id: 1, name: 'Lose weight', value: -100 },
        { id: 2, name: 'Keep weight', value: 75 }]
    }
  },
  mutations: {
    setResult(state, result) {
      state.calculated = result
    }
  },
  getters: {
    result(state) {
      return Math.floor(state.calculated)
    }
  },
  actions: {
    async submitCalories({ rootGetters, getters }) {
      try {
        const token = rootGetters['auth/token']
        const uid = rootGetters['auth/userId']
        console.log(getters.result)
        await fitbodyAxios.patch(`/users/${uid}/nutrition.json?auth=${token}`, { calories: getters.result })
        store.commit('updateData', { nutrition: { calories: getters.result } })
      } catch (e) {
        console.warn(e.message)
      }
    }
  }
}
