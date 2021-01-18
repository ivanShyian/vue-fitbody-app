<template>
  <form class="d-flex flex-column align-items-center register-form"
        @submit.prevent="submitRegister">
    <span class="register-form__counter">Step: {{ counter + 1 }} of {{ tabs.length }}</span>
    <component
      :is="'the-register-form-' + isTab"
      v-model:modelGender="gender"
      v-model:modelName="name"
      v-model:modelBirth="birthDate"
      v-model:modelEmail="email"
      v-model:modelPassword="password"
    ></component>
    <div>
      <button class="btn" @click.prevent="prevPage">Back</button>
      <button
        class="btn"
        :disabled="isEmpty"
        @click.prevent="nextPage"
        v-if="!lastPage"
      >Next
      </button>
      <button class="btn" :disabled="isEmptyPassword" v-else>Register</button>
    </div>
  </form>

</template>
<script>
import TheRegisterFormGender from './TheRegisterFormGender'
import TheRegisterFormName from './TheRegisterFormName'
import TheRegisterFormDateOfBirth from './TheRegisterFormDateOfBirth'
import TheRegisterFormEmail from './TheRegisterFormEmail'
import TheRegisterFormPassword from './TheRegisterFormPassword'

export default {
  data () {
    return {
      counter: 0,
      tabs: ['gender', 'name', 'date-of-birth', 'email', 'password'],
      gender: 'Choose...',
      name: '',
      birthDate: {
        day: '',
        month: 'Month',
        year: ''
      },
      email: '',
      password: '',
      newUser: {}
    }
  },
  computed: {
    isTab () {
      return this.tabs[this.counter]
    },
    isEmptyPassword () {
      return !this.password.length && this.tabs[this.counter] === 'password'
    },
    passToRegister () {
      return this.gender !== 'Choose...' || this.name.length || this.birthDate.day.length || this.email.length
    },
    isEmpty () {
      if (this.gender === 'Choose...' && this.tabs[this.counter] === 'gender') {
        return true
      } else if (!this.name.length && this.tabs[this.counter] === 'name') {
        return true
      } else if ((!this.birthDate.day.length || this.birthDate.month === 'Month' ||
        !this.birthDate.year.length) && this.tabs[this.counter] === 'date-of-birth') {
        return true
      } else if (!this.email.length && this.tabs[this.counter] === 'email') {
        return true
      } else {
        return false
      }
    },
    firstPage () {
      return this.counter === 0
    },
    lastPage () {
      return this.counter + 1 === this.tabs.length
    }
  },
  methods: {
    setBirth (object) {
      this.birthDate = object
    },
    prevPage () {
      if (this.firstPage) {
        this.counter = 0
        this.$router.push({ name: 'login' })
      } else {
        this.counter--
      }
    },
    nextPage () {
      if (!this.lastPage) {
        this.counter++
      }
    },
    submitRegister () {
      if (this.passToRegister && !this.isEmptyPassword) {
        this.newUser = {
          gender: this.gender,
          name: this.name,
          'date-of-birth': this.birthDate,
          email: this.email,
          password: this.password
        }
        console.log(this.newUser)
        this.$router.push({ name: 'true-register' })
      } else {
        console.log('falsieee')
      }
    }
  },
  components: {
    TheRegisterFormGender,
    TheRegisterFormName,
    TheRegisterFormDateOfBirth,
    TheRegisterFormEmail,
    TheRegisterFormPassword
  }
}
</script>

<style scoped lang="scss">
@import '../../template';

@include buttonStyling;
.register-form {
  position: relative;
  margin: 0 auto 5rem auto;
  text-align: center;
  width: 25rem;

  &__counter {
    display: block;
    font-size: 2rem;
    margin: 0 0 5rem 0;
  }

  div:last-child {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    button.btn:first-child {
      border: 1px solid rgba(0, 0, 0, .2);
      background-color: snow;
    }

    button.btn.disable,
    button.btn:disabled {
      cursor: not-allowed;
    }

    button.btn:disabled:hover {
      background-color: #fecb30;
    }
  }
}
</style>
