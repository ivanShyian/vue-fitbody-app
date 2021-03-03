import edamamAxios from '@/axios/edamam-requests'

export default {
  namespaced: true,
  state() {
    return {
      searchResult: [],
      empty: false
    }
  },
  getters: {
    result(state) {
      return state.searchResult
    },
    empty(state) {
      return state.empty
    }
  },
  mutations: {
    setResult(state, result) {
      if (result.length) {
        state.searchResult = []
        state.empty = false
        result.map(obj => {
          let item = {}
          Object.keys(obj).map(el => {
            if (el === 'measures') {
              const calories = obj[el].find(label => label.label === 'Whole' || label.label === 'Serving')
              if (calories) {
                const { label: portion, weight } = calories
                item = { ...item, gram: { portion, weight } }
              }
            } else {
              const unicId = encodeURI(obj[el].label) + '%' + obj[el].foodId
              delete obj[el].nutrients.FIBTG
              item = { ...obj[el], unicId }
            }
          })
          state.searchResult.push(item)
        })
      } else {
        state.empty = true
      }
    }
  },
  actions: {
    async searchEdamam({ commit }, payload) {
      try {
        const query = [payload].join('%20').trim()
        const encoded = query ? `ingr=${encodeURI(query)}` : 'ingr=food'
        const url = `/parser?${encoded}&app_id=${process.env.VUE_APP_EDAMAM_APP_ID}&app_key=${process.env.VUE_APP_EDAMAM_APP_KEY}`
        const { data } = await edamamAxios.get(url)
        commit('setResult', data.hints)
      } catch (e) {
        console.log(e.message)
      }
    }
  }
}
