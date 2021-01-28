import store from '../index'
export default {
  namespaced: true,
  state() {
    return {
      currentMode: 0,
      currentDaily: 0,
      height: null,
      weight: null,
      age: null,
      calculated: null,
      modeButtonList: [
        { id: 0, name: 'Gain weight', value: 250 },
        { id: 1, name: 'Lose weight', value: -100 },
        { id: 2, name: 'Keep weight', value: 75 }],
      dailyButtonList: [
        { id: 0, name: 'Without', value: 1.2 },
        { id: 1, name: 'Low', value: 1.375 },
        { id: 2, name: 'Normal', value: 1.55 },
        { id: 3, name: 'High', value: 1.725 }]
    }
  },
  mutations: {
    setAge(state) {
      const birthDate = Object.keys(store.getters.userData.birth).map(el => store.getters.userData.birth[el])
      const month = birthDate[1]
      birthDate[1] = birthDate[0]
      birthDate[0] = month
      state.age = Math.floor((Date.now() - Date.parse(birthDate.join('-'))) / 1000 / 60 / 60 / 24 / 365.25)
    }
  }
}
