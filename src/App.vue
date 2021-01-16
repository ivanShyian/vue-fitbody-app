<template>
  <app-header></app-header>
  <main class="main">
    <div class="main__wrapper">
      <app-login-form @submit-user="submitUser"
                      v-if="!access && unregistered"
                      @register-user="registerUser"></app-login-form>
      <app-register-form v-else-if="!access && !unregistered"
                      @cancel-registration="cancelRegistration"></app-register-form>
      <app-remaining-calc v-else></app-remaining-calc>
      <div>
      </div>
    </div>
  </main>
  <app-footer></app-footer>
</template>
<script>
import axios from 'axios'
import AppLoginForm from './components/AppAuthorization/AppLoginForm'
import AppRemainingCalc from './components/AppRemainingCalc'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import AppRegisterForm from '@/components/AppAuthorization/AppRegisterForm'

export default {

  data () {
    return {
      show: false,
      usersData: [],
      access: false,
      unregistered: false
    }
  },
  computed: {},
  methods: {
    registerUser () {
      this.unregistered = false
    },
    cancelRegistration () {
      this.unregistered = true
    },
    async submitUser (currentUser) {
      try {
        const { data } = await axios.get('https://vue-fitbody-project-default-rtdb.europe-west1.firebasedatabase.app/users.json')
        if (!data) throw new Error('Что-то пошло не так..')
        this.usersData = Object.keys(data).map(el => {
          return {
            name: data[el].name,
            password: data[el].password
          }
        })
        this.usersData.find(data => data.name === currentUser.name &&
          data.password === currentUser.password) ? this.access = true : this.access = false
        console.log(this.access)
      } catch (e) {
      } finally {
      }
    }
  },
  components: {
    AppLoginForm,
    AppRegisterForm,
    AppRemainingCalc,
    AppHeader,
    AppFooter
  }
}
</script>
<style scoped lang="scss">
main.main {
  padding: 0 0 10rem 0;
  width: 100%;

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 100rem;
    text-align: center;

    span {
      font-family: "Jost", sans-serif;
      font-size: 1.7rem;
      font-weight: 700;
      color: #2d203a;
      margin: 0 0 2rem 0;
    }
  }
}
</style>
