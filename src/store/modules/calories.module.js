import store from '../index'
import fitbodyAxios from '@/axios/fitbody-requests'
export default {
  namespaced: true,
  state() {
    return {
      currentMode: 0,
      currentDaily: 0,
      counter: 0,
      height: '',
      weight: '',
      age: null,
      calculated: null,
      gender: null,
      'desired-weight': '',
      caloriesComponents: ['mode', 'params', 'activity', 'result'],
      modeButtons: [
        { id: 0, name: 'Gain weight', value: 250 },
        { id: 1, name: 'Lose weight', value: -100 },
        { id: 2, name: 'Keep weight', value: 75 }],
      dailyButtons: [
        { id: 0, name: 'Without', value: 1.2 },
        { id: 1, name: 'Low', value: 1.375 },
        { id: 2, name: 'Normal', value: 1.55 },
        { id: 3, name: 'High', value: 1.725 }]
    }
  },
  mutations: {
    setAge(state, age) {
      state.age = Math.floor((Date.now() - Date.parse(age.join('-'))) / 1000 / 60 / 60 / 24 / 365.25)
    },
    setGender(state) {
      state.gender = store.getters.userData.gender
    },
    setMode(state, id) {
      state.currentMode = id
    },
    setDaily(state, id) {
      state.currentDaily = id
    },
    nextStep(state) {
      if (state.counter + 1 !== state.caloriesComponents.length) {
        state.counter++
      }
    },
    prevStep(state) {
      if (state.counter !== 0) {
        state.counter--
      }
    },
    setHeight(state, height) {
      state.height = height
    },
    setDesWeight(state, weight) {
      state['desired-weight'] = weight
    },
    setWeight(state, weight) {
      state.weight = weight
    },
    setResult(state, result) {
      state.calculated = result
    },
    clear(state) {
      state.currentMode = 0
      state.currentDaily = 0
      state.counter = 0
      state.height = ''
      state.weight = ''
      state['desired-weight'] = ''
      state.age = null
      state.calculated = null
      state.gender = null
    }
  },
  getters: {
    result(state) {
      return Math.floor(state.calculated)
    },
    currentComponent(state) {
      return state.caloriesComponents[state.counter]
    },
    firstStep(state) {
      return state.counter === 0
    },
    lastStep(_, getters) {
      return getters.currentComponent === 'activity'
    },
    height(state) {
      return state.height
    },
    weight(state) {
      return state.weight
    },
    desiredWeight(state) {
      return state['desired-weight']
    },
    mode(state) {
      return state.currentMode
    },
    genderValue(state) {
      return state.gender === 'man' ? 5 : 161
    },
    firstVisitInfo(state) {
      return state['desired-weight'] === '' ||
        state.weight === '' ||
        state.height === ''
    }
  },
  actions: {
    calculate({ commit, state, dispatch, getters }) {
      dispatch('age')
      commit('setGender')
      const mode = state.modeButtons[state.currentMode].value
      const activity = state.dailyButtons[state.currentDaily].value
      const result = (((10 * state.weight) + (6.25 * state.height) - (5 * state.age) + getters.genderValue) * activity) + mode
      commit('setResult', result)
    },
    age({ rootGetters, commit }) {
      const birthDate = Object.keys(rootGetters.userData.birth).map(el => rootGetters.userData.birth[el])
      const month = birthDate[1]
      birthDate[1] = birthDate[0]
      birthDate[0] = month
      commit('setAge', birthDate)
    },
    async submitCalories({ getters, rootGetters, commit }) {
      try {
        const token = rootGetters['auth/token']
        const uid = rootGetters['auth/userId']
        console.log(store.getters.userData.nutrition)
        await fitbodyAxios.put(`/users/${uid}/nutrition.json?auth=${token}`, {
          ...store.getters['nutrition/nutrition'],
          calories: getters.result
        })
        store.commit('updateData', { nutrition: { calories: getters.result } })
        commit('clear')
        store.commit('menuList/setActiveTab', 0)
        console.log(store.getters.userData)
        console.log('here')
      } catch (e) {
        console.warn(e.message)
      }
    }
  }
}
