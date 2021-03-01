import axios from 'axios'
import fitbodyAxios from '@/axios/fitbody-requests'
import { error } from '@/utils/error'

export default {
  namespaced: true,
  state() {
    return {
      isValid: null
    }
  },
  mutations: {
    validEmail(state, access) {
      state.isValid = access
    }
  },
  actions: {
    async register({ state, commit, dispatch }, payload) {
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FB_KEY}`
        const { data } = await axios.post(url, { ...payload.firebaseUser, returnSecureToken: true })
        dispatch('registerToDatabase', { data, user: payload.databaseUser })
        commit('validEmail', true)
      } catch (e) {
        dispatch('alert/setAlert', {
          value: error(e.response.data.error.message),
          type: 'danger'
        }, { root: true })
        commit('validEmail', false)
      }
    },
    async registerToDatabase(_, payload) {
      try {
        await fitbodyAxios.put(`/users/${payload.data.localId}.json?auth=${payload.data.idToken}`, {
          ...payload.user
        })
      } catch (e) {
        console.warn(e)
      }
    }
  }
}
