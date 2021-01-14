<template>
  <form class="d-flex flex-column align-items-center register-form">
    <keep-alive>
      <component :is="'register-form-' + currentTab"></component>
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
  data () {
    return {
      currentTab: 'password'
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    RegisterFormEmail,
    // eslint-disable-next-line vue/no-unused-components
    RegisterFormName,
    // eslint-disable-next-line vue/no-unused-components
    RegisterFormPassword,
    RegisterFormGender,
    // eslint-disable-next-line vue/no-unused-components
    RegisterFormDateOfBirth
  }
}
</script>

<style scoped lang="scss">
.register-form {
  margin: 0 auto;
  text-align: center;
  padding: 1rem 1rem;
  width: 25rem;
}
</style>
