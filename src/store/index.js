import { createStore, createLogger } from 'vuex'
import auth from './modules/auth.module'
import alert from './modules/alert.module'
import register from './modules/register.module'

const plugins = []
if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

export default createStore({
  plugins,
  state () {
    return {}
  },
  modules: {
    auth,
    alert,
    register
  }
})
