export default {
  namespaced: true,
  state() {
    return {}
  },
  actions: {
    update(_, payload) {
      console.log(payload)
    }
  }
}
