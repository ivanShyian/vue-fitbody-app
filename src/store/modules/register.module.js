import axios from 'axios'
import fitbodyAxios from '@/axios/fitbody-requests'
import { error } from '@/utils/error'

export default {
  namespaced: true,
  state() {
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
      databaseUser: {},
      counter: 0,
      tabs: ['gender', 'name', 'date-of-birth', 'email', 'password'],
      emptyField: true,
      correctEmail: false
    }
  },
  getters: {
    isTab(state) {
      return state.tabs[state.counter]
    },
    isEmpty(state) {
      return state.emptyField
    },
    currentText(state, getters) {
      return state[getters.isTab]
    },
    firstPage(state) {
      return state.counter === 0
    },
    lastPage(state) {
      return state.counter + 1 === state.tabs.length
    },
    spanCounter(state) {
      return `${state.counter + 1} / ${state.tabs.length}`
    },
    userPassword(state) {
      return state.password
    }
  },
  mutations: {
    setText(state, payload) {
      const field = state.tabs[state.counter]
      if (payload.fieldName) {
        state[field][payload.fieldName] = payload.value
      } else {
        state[field] = payload
      }
    },
    notEmpty(state) {
      state.emptyField = false
    },
    isEmpty(state) {
      state.emptyField = true
    },
    nextPage(state) {
      if (state.counter !== state.tabs.length) {
        state.counter++
      }
    },
    prevPage(state) {
      if (state.counter !== 0) {
        state.counter--
      }
    },
    addNewUser(state) {
      state.newUser = {
        email: state.email,
        password: state.password
      }
      state.databaseUser = {
        name: state.name,
        email: state.email,
        birth: state['date-of-birth'],
        gender: state.gender,
        registerDate: Date.now()
      }
    },
    clear(state) {
      state.gender = 'Choose...'
      state.name = ''
      state['date-of-birth'] = {
        day: '',
        month: 'Month',
        year: ''
      }
      state.email = ''
      state.password = ''
      state.newUser = {}
      state.databaseUser = {}
      state.counter = 0
    },
    correctEmail(state, access) {
      state.correctEmail = access
      if (!access) {
        state.counter = 3
      }
    }
  },
  actions: {
    async register({ state, commit, dispatch }) {
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FB_KEY}`
        commit('addNewUser')
        const { data } = await axios.post(url, { ...state.newUser, returnSecureToken: true })
        await fitbodyAxios.put(`/users/${data.localId}.json?auth=${data.idToken}`, {
          ...state.databaseUser
        })
        commit('correctEmail', true)
      } catch (e) {
        dispatch('alert/setAlert', {
          value: error(e.response.data.error.message),
          type: 'danger'
        }, { root: true })
        commit('correctEmail', false)
      }
    }
  }
}
