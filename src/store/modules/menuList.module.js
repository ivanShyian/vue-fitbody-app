export default {
  namespaced: true,
  state() {
    return {
      tabs: [
        { id: 0, name: 'Calories Calculator', path: '/calories' },
        { id: 1, name: 'Something else', path: '' },
        { id: 2, name: 'And something', path: '' },
        { id: 3, name: 'Here will be', path: '' },
        { id: 4, name: 'But here will be', path: '' }
      ],
      counter: 1
    }
  },
  getters: {
    tabList(state) {
      return state.tabs
    }
  }
}
