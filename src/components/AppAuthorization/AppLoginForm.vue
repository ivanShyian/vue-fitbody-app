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
               v-model="userPassword">
      </div>
      <button class="btn">Log in</button>
    </form>
    <div>
      <span>Or if you don't have an account</span>
      <a href="#" @click.prevent="$emit('register-user')">Sign up.</a>
    </div>
  </div>
</template>

<script>

import focusDirective from './focusDirective'

export default {
  emits: ['submit-user', 'register-user'],
  data () {
    return {
      userName: '',
      userPassword: '',
      currentUser: {}
    }
  },
  directives: {
    focus: focusDirective
  },
  methods: {
    submitData () {
      if (!this.userPassword.length || this.userPassword.length < 6) {
        throw new Error('Некорректный пароль')
      } else if (!this.userName.length) {
        throw new Error('Введите логин')
      } else {
        this.currentUser = {
          name: this.userName,
          password: this.userPassword
        }
        this.$emit('submit-user', this.currentUser)
        this.userName = ''
        this.userPassword = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../template";

@include buttonStyling
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
