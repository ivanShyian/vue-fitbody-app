<template>
  <AppLoader v-if="loading"/>
  <VeeForm v-slot="{ handleSubmit, submitCount, isSubmitting, errors, meta }"
           :validation-schema="schemaRegister"
           v-else
           as="div">
    <form class="d-flex flex-column align-items-center register-form"
          @submit="handleSubmit($event, submitRegister)"
          @keydown.enter.prevent>
      <span class="register-form__counter">Step: {{ stepCounter }}</span>
      <transition name="registration"
                  mode="out-in"
                  :duration="500"
                  enter-active-class="animate__animated animate__fadeIn"
                  leave-active-class="animate__animated animate__fadeOut">
        <keep-alive>
            <component :is="'the-register-form-' + currentTab"
                       :errors="errors"/>
        </keep-alive>
      </transition>
      <div>
        <button class="btn"
                @click.prevent="toLogin()">To Login
        </button>
        <button class="btn"
                @click.prevent="nextPage(meta)"
                v-if="!lastPage">Next
        </button>
        <button class="btn"
                type="submit"
                v-if="lastPage"
                :disabled="submitCount > 3 || isSubmitting">Register
        </button>
      </div>
    </form>
  </VeeForm>
</template>
<script>
import { markRaw } from 'vue'
import { Form as VeeForm } from 'vee-validate'
import { registerValidator } from '@/utils/auth-validators'
import TheRegisterFormGender from '../components/registration/RegisterFormGender'
import TheRegisterFormName from '../components/registration/RegisterFormName'
import TheRegisterFormBirth from '../components/registration/RegisterFormBirth'
import TheRegisterFormEmail from '../components/registration/RegisterFormEmail'
import TheRegisterFormPassword from '../components/registration/RegisterFormPassword'
import AppLoader from '../components/ui/AppLoader'

export default {
  data() {
    return {
      schemaRegister: markRaw(registerValidator),
      loading: false,
      counter: 0,
      tabs: ['gender', 'name', 'birth', 'email', 'password']
    }
  },
  computed: {
    currentTab() {
      return this.tabs[this.counter]
    },
    firstPage() {
      return this.counter === 0
    },
    lastPage() {
      return this.counter + 1 === this.tabs.length
    },
    stepCounter() {
      return `${this.counter + 1} / ${this.tabs.length}`
    }
  },
  methods: {
    nextPage({
      valid,
      dirty
    }) {
      if (valid && dirty) {
        this.counter++
      }
    },
    toLogin() {
      this.$router.push('/auth')
    },
    async submitRegister(values) {
      if (values.password !== values.passwordCheck) {
        this.$store.dispatch('alert/setAlert', {
          value: 'Password mismatch',
          type: 'warning'
        })
      } else {
        this.loading = true
        const {
          email,
          password,
          ...data
        } = values
        delete data.passwordCheck

        const firebaseUser = {
          email,
          password
        }
        const databaseUser = {
          ...data,
          email
        }

        await this.$store.dispatch('register/register', {
          firebaseUser,
          databaseUser
        })
        if (this.$store.state.register.isValid) {
          await this.$router.push('/registered')
        } else {
          this.counter = 0
        }
        this.loading = false
      }
    }
  },
  components: {
    VeeForm,
    AppLoader,
    TheRegisterFormGender,
    TheRegisterFormName,
    TheRegisterFormBirth,
    TheRegisterFormEmail,
    TheRegisterFormPassword
  }
}
</script>

<style scoped lang="scss">
@import '../template';

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
