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
      console.log(state.searchResult)
      return state.searchResult
    }
  },
  mutations: {
    setResult(state, result) {
      result.map(obj => {
        let item = {}
        Object.keys(obj).map(el => {
          if (el === 'measures') {
            const calories = obj[el].find(label => label.label === 'Whole' || label === 'Serving')
            if (calories !== undefined) {
              const { label: portion, weight } = calories
              item = { ...item, gram: { portion, weight } }
            }
          } else {
            item = { ...obj[el] }
          }
        })
        state.searchResult.push(item)
      })
    }
  },
  actions: {
    async searchEdamam({ commit }, payload) {
      const query = [payload].join('%20').trim()
      const encoded = query ? `ingr=${encodeURI(query)}` : 'ingr=food'
      const url = `/parser?${encoded}&app_id=${process.env.VUE_APP_EDAMAM_APP_ID}&app_key=${process.env.VUE_APP_EDAMAM_APP_KEY}`
      const { data } = await edamamAxios.get(url)
      commit('setResult', data.hints)
    }
  }
}
