export default {
  namespaced: true,
  state() {
    return {
      alertMessage: null
    }
  },
  getters: {
    alert(state) {
      return state.alertMessage
    }
  },
  mutations: {
    setMessage(state, payload) {
      state.alertMessage = payload
    }
  },
  actions: {
    setAlert({ commit }, payload) {
      commit('setMessage', payload)
      setTimeout(() => {
        commit('setMessage', null)
      }, 4000)
    }
  }
}
