<template>
  <div class="login-form">
    <VeeForm v-slot="{ handleSubmit, submitCount, isSubmitting, errors }"
             :validation-schema="schema"
             as="div">
      <form @submit="handleSubmit($event, onSubmit)">
        <span class="login-title">Sign in to your account</span>
        <div>
          <Field name="email"
                 type="text"
                 autocomplete
                 placeholder="Email"
                 :class="['form-control', {invalid: errors.email}]"/>
          <ErrorMessage name="email" as="small"/>
          <Field name="password"
                 type="password"
                 autocomplete
                 placeholder="Password"
                 :class="['form-control', {invalid: errors.password}]"/>
          <ErrorMessage name="password" as="small"/>
        </div>
        <button class="btn"
                type="submit"
                :disabled="isSubmitting || submitCount > 3"
        >{{ submitCount > 3 ? 'Try again later...' : 'Log in' }}
        </button>
      </form>
    </VeeForm>
    <div>
      <span>Or if you don't have an account</span>
      <router-link :to="{name: 'register'}">Sign up.</router-link>
    </div>
  </div>
</template>

<script>
import { markRaw } from 'vue'
import { error } from '@/utils/error'
import { Form as VeeForm, Field, ErrorMessage } from 'vee-validate'
import { schemaValidatorLogin } from '@/utils/auth-validators'

export default {
  data() {
    return {
      schema: markRaw(schemaValidatorLogin)
    }
  },
  mounted() {
    if (this.$route.query.message) {
      this.$store.dispatch('alert/setAlert', {
        value: error(this.$route.query.message),
        type: 'warning'
      })
    }
  },
  methods: {
    async onSubmit(values) {
      try {
        await this.$store.dispatch('auth/login', values)
        this.$router.push('/')
      } catch (e) {
        console.warn(e)
      }
    }
  },
  components: {
    VeeForm,
    Field,
    ErrorMessage
  }
}
</script>

<style lang="scss" scoped>
@import "../template";

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
      margin: .5rem 0 0 0;
      background: #d1273f;
      color: #ffffe3;
      width: 100%;
    }

    button:hover {
      background: darkred;
    }

    button:disabled:hover {
      cursor: not-allowed;
      color: #ffffe3;
      background: #d1273f;
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
        margin: .5rem 0 .2rem 0;
        padding: .2rem .5rem;
        background-color: rgba(255, 255, 227, .7);
      }

      small {
        color: red;
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
