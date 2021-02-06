export default {
  namespaced: true,
  state() {
    return {
      tabs: [
        { id: 0, name: 'Main', path: 'main' },
        { id: 1, name: 'Nutrition', path: 'nutrition' },
        { id: 2, name: 'Activities', path: '' },
        { id: 3, name: 'Calories', path: 'calories' },
        { id: 4, name: 'Motivation', path: '' },
        { id: 5, name: 'Statistic', path: '' }
      ],
      counter: 0
    }
  },
  getters: {
    tabList(state) {
      return state.tabs
    },
    currentTab(state) {
      return state.tabs[state.counter].path
    },
    getCounter(state) {
      return state.counter
    }
  },
  mutations: {
    setActiveTab(state, tab) {
      state.counter = tab
    }
  }
}
