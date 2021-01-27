<template>
  <div class="login-form">
    <VeeForm v-slot="{ handleSubmit, submitCount, isSubmitting, errors }"
             :validation-schema="schema">
      <form @submit="handleSubmit($event, onSubmit)">
        <span>Sign in to your account</span>
        <div>
          <Field name="email" v-slot="{ field }">
            <input type="text"
                   :class="['form-control', {invalid: errors.email}]"
                   autocomplete
                   placeholder="Login"
                   v-bind="field">
          </Field>
          <ErrorMessage name="email" as="small"/>
          <Field name="password" v-slot="{ field }">
            <input type="password"
                   :class="['form-control', {invalid: errors.password}]"
                   autocomplete
                   placeholder="Password"
                   v-bind="field">
          </Field>
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
import { error } from '@/utils/error'
import { Form as VeeForm, Field, ErrorMessage } from 'vee-validate'
import { schemaValidator } from '@/utils/login-validator'

export default {
  data() {
    return {
      schema: schemaValidator
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
