import { createApp } from 'vue'
import App from './components/App.vue'
import LoginForm from './components/login-form'
import RemainingCalculator from './components/remaining-calculator'

const app = createApp(App)
app.component('login-form', LoginForm)
app.component('remaining-calculator', RemainingCalculator)
app.mount('#app')
