<template>
    <component :is="layout + '-layout'"></component>
</template>
<script>
import AuthLayout from '@/layouts/AuthLayout'
import MainLayout from '@/layouts/MainLayout'

export default {
  computed: {
    layout () {
      return this.$route.meta.layout
    }
  },
  components: { AuthLayout, MainLayout }
}
</script>
<style scoped lang="scss">
main.main {
  width: 100%;

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
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
