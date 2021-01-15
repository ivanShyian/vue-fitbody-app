<template>
  <form class="d-flex flex-column align-items-center register-form"
        @submit.prevent="submitRegister">
    <span class="register-form__counter">Step: {{ counter + 1 }} of {{ tabs.length }}</span>
    <keep-alive>
      <component :is="'register-form-' + isTab"
                 v-model:modelGender="gender"
                 v-model:modelName="name"
                 v-model:modelBirth="birthDate"
                 v-model:modelEmail="email"
                 v-model:modelPassword="password"
                 @prev="prevPage"
                 @next="nextPage"
                 @submit-register="submitRegister"></component>
    </keep-alive>
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
      birthDate: {
        day: '',
        month: 'Month',
        year: ''
      },
      email: '',
      password: ''
    }
  },
  computed: {
    isTab () {
      console.log(this.birthDate)
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
      console.log('ssssss')
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
