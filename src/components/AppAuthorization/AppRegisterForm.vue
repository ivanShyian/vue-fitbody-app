<template>
  <form class="d-flex flex-column align-items-center register-form"
        @submit.prevent="submitRegister">
    <span class="register-form__counter">Step: {{ counter + 1 }} of {{ tabs.length }}</span>
      <component :is="'register-form-' + isTab"
                 v-model:modelGender="gender"
                 v-model:modelName="name"
                 @birth-day="setBirth"
                 v-model:modelEmail="email"
                 v-model:modelPassword="password"
                 @prev="prevPage"
                 @next="nextPage"></component>
  </form>

</template>

<script>
import RegisterFormGender from './RegisterFormGender'
import RegisterFormName from './RegisterFormName'
import RegisterFormDateOfBirth from './RegisterFormDateOfBirth'
import RegisterFormEmail from './RegisterFormEmail'
import RegisterFormPassword from './RegisterFormPassword'

export default {
  emits: {
    'cancel-registration': {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      counter: 0,
      tabs: ['gender', 'name', 'date-of-birth', 'email', 'password'],
      gender: 'Choose...',
      name: '',
      birthDate: {},
      email: '',
      password: ''
    }
  },
  computed: {
    isTab () {
      return this.tabs[this.counter]
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
        this.$emit('cancel-registration')
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
      console.group()
      console.log('gender: ', this.gender)
      console.log('name: ', this.name)
      console.log('date of birth: ', this.birthDate.day, this.birthDate.month, this.birthDate.year)
      console.log('email: ', this.email)
      console.log('password', this.password)
    }
  },
  components: {
    RegisterFormGender,
    RegisterFormName,
    RegisterFormDateOfBirth,
    RegisterFormEmail,
    RegisterFormPassword
  }
}
</script>

<style scoped lang="scss">
.register-form {
  position: relative;
  margin: 0 auto;
  text-align: center;
  padding: 1rem 1rem;
  width: 25rem;

  &__counter {
    position: absolute;
    top: -50%;
    left: 30%;
    display: block;
    font-size: 2rem;
  }
}
</style>
