import edamamAxios from '@/axios/edamam-requests'

export default {
  namespaced: true,
  state() {
    return {
      searchResult: []
    }
  },
  getters: {
    result(state) {
      return state.searchResult
    }
  },
  mutations: {
    setResult(state, result) {
      state.searchResult = result
    }
  },
  actions: {
    async loadNutrition({ commit }, payload) {
      const query = [payload].join('%20').trim()
      const encoded = query ? `ingr=${encodeURI(query)}` : 'ingr=food'
      const url = `/parser?${encoded}&app_id=${process.env.VUE_APP_EDAMAM_APP_ID}&app_key=${process.env.VUE_APP_EDAMAM_APP_KEY}`
      const { data } = await edamamAxios.get(url)
      commit('setResult', data.hints)
    }
  }
}
