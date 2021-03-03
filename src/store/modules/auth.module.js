import axios from 'axios'
import { error } from '@/utils/error'
const TOKEN_KEY = 'jwt-token'
const UID = 'userID'

export default {
  namespaced: true,
  state() {
    return {
      token: localStorage.getItem(TOKEN_KEY),
      uid: localStorage.getItem(UID)
    }
  },
  getters: {
    token(state) {
      return state.token
    },
    userId(state) {
      return state.uid
    },
    isAuthenticated(_, getters) {
      return !!getters.token
    }
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload.token
      state.uid = payload.uid
      localStorage.setItem(TOKEN_KEY, payload.token)
      localStorage.setItem(UID, payload.uid)
    },
    logout(state) {
      state.token = null
      state.uid = null
      localStorage.removeItem(TOKEN_KEY)
      localStorage.removeItem(UID)
    }
  },
  actions: {
    async login({ commit, dispatch }, payload) {
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`
        const { data } = await axios.post(url, { ...payload, returnSecureToken: true })
        commit('setToken', { token: data.idToken, uid: data.localId })
      } catch (e) {
        dispatch('alert/setAlert', {
          value: error(e.response.data.error.message),
          type: 'danger'
        }, { root: true })
        throw new Error()
      }
    }
  }
}
