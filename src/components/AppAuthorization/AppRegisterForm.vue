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
  emits: {
    'cancel-registration': {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      counter: 4,
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
      return this.tabs[this.counter]
    },
    isEmptyPassword () {
      return this.password.length === 0 && this.tabs[this.counter] === 'password'
    },
    isEmpty () {
      if (this.gender === 'Choose...' && this.tabs[this.counter] === 'gender') {
        return true
      } else if (!this.name.length && this.tabs[this.counter] === 'name') {
        return true
      } else if ((this.birthDate.day.length === 0 || this.birthDate.month === 'Month' ||
        this.birthDate.year.length === 0) && this.tabs[this.counter] === 'date-of-birth') {
        return true
      } else if (this.email.length === 0 && this.tabs[this.counter] === 'email') {
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
        this.$emit('cancel-registration')
      } else {
        this.counter--
      }
    },
    nextPage () {
      // !this.lastPage ||
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
  margin: 0 auto;
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
