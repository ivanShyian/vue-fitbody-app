<template>
  <app-header></app-header>
  <main class="main">
    <div class="main__wrapper">
      <app-login-form v-model:user.trim="userName"
                      v-model:password="userPassword"
                      @submit-user="submitUser"
                      v-if="!access"></app-login-form>
      <app-remaining-calc v-else></app-remaining-calc>
      <div>
      </div>
    </div>
  </main>
  <app-footer></app-footer>
</template>
<script>
import axios from 'axios'
import AppLoginForm from './components/AppLoginForm'
import AppRemainingCalc from './components/AppRemainingCalc'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

export default {

  data () {
    return {
      show: false,
      userName: '',
      userPassword: '',
      currentUser: {},
      usersData: [],
      access: false
    }
  },
  computed: {},
  methods: {
    async submitUser () {
      if (!this.userPassword.length || this.userPassword.length < 6) {
        throw new Error('Некорректный пароль')
      } else if (!this.userName.length) {
        throw new Error('Введите логин')
      } else {
        this.currentUser = {
          name: this.userName,
          password: this.userPassword
        }
        this.userName = ''
        this.userPassword = ''
        try {
          const { data } = await axios.get('https://vue-fitbody-project-default-rtdb.europe-west1.firebasedatabase.app/users.json')
          if (!data) throw new Error('Что-то пошло не так..')
          this.usersData = Object.keys(data).map(el => {
            return {
              name: data[el].name,
              password: data[el].password
            }
          })
          this.usersData.find(data => data.name === this.currentUser.name &&
            data.password === this.currentUser.password) ? this.access = true : this.access = false
          console.log(this.access)
        } catch (e) {
        } finally {
        }
      }
    }
  },
  components: {
    AppLoginForm,
    AppRemainingCalc,
    AppHeader,
    AppFooter
  }
}
</script>
<style scoped lang="scss">
.main {
  margin: 0 0 2rem 0;

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
