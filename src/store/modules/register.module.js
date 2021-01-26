export default {
  namespaced: true,
  state () {
    return {
      gender: 'Choose...',
      name: '',
      'date-of-birth': {
        day: '',
        month: 'Month',
        year: ''
      },
      email: '',
      password: '',
      newUser: {},
      counter: 0,
      tabs: ['gender', 'name', 'date-of-birth', 'email', 'password'],
      emptyField: true
    }
  },
  getters: {
    isTab (state) {
      return state.tabs[state.counter]
    },
    isEmpty (state) {
      return state.emptyField
    },
    currentText (state, getters) {
      return state[getters.isTab]
    },
    firstPage (state) {
      return state.counter === 0
    },
    lastPage (state) {
      return state.counter + 1 === state.tabs.length
    },
    spanCounter (state) {
      return `${state.counter + 1} / ${state.tabs.length}`
    },
    password (state) {
      return state.exactPassword
    }
  },
  mutations: {
    setText (state, payload) {
      const field = state.tabs[state.counter]
      if (payload.fieldName) {
        state[field][payload.fieldName] = payload.value
      } else {
        state[field] = payload
      }
    },
    notEmpty (state) {
      state.emptyField = false
    },
    isEmpty (state) {
      state.emptyField = true
    },
    nextPage (state) {
      if (state.counter !== state.tabs.length) {
        state.counter++
      }
    },
    prevPage (state) {
      if (state.counter !== 0) {
        state.counter--
      }
    }
  }
}
