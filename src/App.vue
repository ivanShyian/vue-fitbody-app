<template>
  <transition name="registration"
              mode="out-in"
              enter-active-class="animate__animated animate__slideInDown"
              leave-active-class="animate__animated animate__slideOutUp">
    <app-message></app-message>
  </transition>
  <component :is="layout + '-layout'"></component>
</template>
<script>
import AuthLayout from '@/layouts/AuthLayout'
import MainLayout from '@/layouts/MainLayout'
import AppMessage from '@/components/ui/AppMessage'

export default {
  computed: {
    layout() {
      return this.$route.meta.layout
    }
  },
  components: {
    AuthLayout,
    MainLayout,
    AppMessage
  }
}
</script>
<style scoped lang="scss">
main.main {
  width: 100%;
  &__wrapper {
    margin: 0 auto;
    width: 100%;
    max-width: 100rem;
    text-align: center;
    span {
      font-family: "Jost", sans-serif;
      font-size: 1.7rem;
      font-weight: 700;
      color: #2d203a;
      margin: 0 0 2rem 0;
    }
  }
}
</style>
