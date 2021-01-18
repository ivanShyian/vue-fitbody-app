<template>
  <div class="login-form">
    <form @submit.prevent="submitData">
      <span>Sign in to your account</span>
      <div>
        <input type="text"
               placeholder="Login"
               v-focus
               v-model="userName"
               class="form-control">
        <input type="password"
               class="form-control"
               placeholder="Password"
               autocomplete="on"
               v-model="userPassword">
      </div>
      <button class="btn" @click="submitData">Log in</button>
    </form>
    <div>
      <span>Or if you don't have an account</span>
      <router-link :to="{name: 'register'}">Sign up.</router-link>
    </div>
  </div>
</template>

<script>

import focusDirective from './focusDirective'
import axios from 'axios'

export default {
  emits: ['submit-user'],
  data () {
    return {
      userName: '',
      userPassword: '',
      currentUser: {},
      usersData: []
    }
  },
  directives: {
    focus: focusDirective
  },
  computed: {
    isValid () {
      return this.userPassword.length && !this.userPassword.length < 6 && this.userName.length
    }
  },
  methods: {
    async submitData () {
      try {
        if (!this.isValid) {
          throw new Error('Некорректный пароль')
        } else {
          this.currentUser = {
            name: this.userName,
            password: this.userPassword
          }
          const { data } = await axios.get('https://vue-fitbody-project-default-rtdb.europe-west1.firebasedatabase.app/users.json')
          if (!data) throw new Error('Что-то пошло не так..')
          this.usersData = Object.keys(data).map(el => {
            return {
              name: data[el].name,
              password: data[el].password
            }
          })
          this.usersData.find(data => data.name === this.currentUser.name &&
            data.password === this.currentUser.password)
            ? this.$router.push({ name: 'menu' })
            : this.$router.push({ name: 'login' })
        }
      } catch (e) {
      } finally {
        this.userName = ''
        this.userPassword = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../template";

@include buttonStyling;
.login-form {
  margin: 0 auto;
  text-align: center;
  padding: 1rem 1rem;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 1rem;
  width: 25rem;
  box-shadow: -1px 7px 39px -16px rgba(0, 0, 0, 0.75);

  form {
    margin: 0 0 .2rem 0;

    button {
      background: #d1273f;
      color: #ffffe3;
      width: 100%;
    }

    button:hover {
      background: darkred;
    }

    span {
      display: block;
      font-size: 1.5rem;
      margin: 0 0 .5rem 0;
    }

    div {
      display: flex;
      flex-direction: column;

      input {
        border-radius: .5rem;
        margin: 0 0 .5rem 0;
        padding: .2rem .5rem;
        background-color: rgba(255, 255, 227, .7);
      }
    }
  }

  div {
    span {
      font-size: .9rem;
      margin: 0 .3rem 0 0;
    }

    a {
      transition: all ease 0.5s;
    }

    a:hover {
      color: #000063;
      transition: all ease 0.5s;
    }
  }
}
</style>
