<template>
  <AppLoader v-if="loading"/>
  <form class="d-flex flex-column align-items-center register-form"
        v-else
        @submit.prevent="submitRegister"
        @keypress.prevent.enter>
    <span class="register-form__counter"
    >Step: {{ $store.getters['register/spanCounter'] }}</span>
      <component :is="'the-register-form-' + isTab"
                 v-model:password="password"
      ></component>
    <div>
      <button class="btn"
              @click.prevent="previous"
      >Back
      </button>
      <button
        class="btn"
        :disabled="isEmpty"
        @click.prevent="next"
        v-if="!lastPage"
      >Next
      </button>
      <button class="btn"
              type="submit"
              v-if="lastPage"
              :disabled="!hasValues"
      >Register
      </button>
    </div>
  </form>

</template>
<script>
import TheRegisterFormGender from '../components/registration/RegisterFormGender'
import TheRegisterFormName from '../components/registration/RegisterFormName'
import TheRegisterFormDateOfBirth from '../components/registration/RegisterFormDateOfBirth'
import TheRegisterFormEmail from '../components/registration/RegisterFormEmail'
import TheRegisterFormPassword from '../components/registration/RegisterFormPassword'
import AppLoader from '../components/ui/AppLoader'
import { mapGetters } from 'vuex'

export default {
  unmounted() {
    this.password = ''
    this.$store.commit('register/clear')
  },
  data() {
    return {
      loading: false,
      password: ''
    }
  },
  computed: {
    ...mapGetters('register', [
      'isTab',
      'isEmpty',
      'lastPage',
      'firstPage',
      'userPassword'
    ]),
    hasValues() {
      return this.password.length && this.$store.state.register.password
    }
  },
  methods: {
    next() {
      if (!this.lastPage) {
        this.$store.commit('register/nextPage')
        this.$store.commit('register/isEmpty')
      }
    },
    previous() {
      if (!this.firstPage) {
        this.$store.commit('register/prevPage')
        this.$store.commit('register/notEmpty')
      } else {
        this.$router.push('/auth')
      }
    },
    async submitRegister() {
      if (this.password !== this.userPassword) {
        this.$store.dispatch('alert/setAlert', {
          value: 'Пароли не совпадают',
          type: 'warning'
        })
      } else if (this.userPassword.length < 6) {
        this.$store.dispatch('alert/setAlert', {
          value: 'Слишком маленький пароль',
          type: 'warning'
        })
      } else {
        this.loading = true
        await this.$store.dispatch('register/register')
        this.$router.push('/registered')
        this.loading = false
      }
    }
  },
  components: {
    AppLoader,
    TheRegisterFormGender,
    TheRegisterFormName,
    TheRegisterFormDateOfBirth,
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
