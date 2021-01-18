<template>
  <app-header></app-header>
  <main class="main">
    <div class="main__wrapper">
      <router-view></router-view>
    </div>
  </main>
  <app-footer></app-footer>
</template>
<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

export default {

  data () {
    return {
      show: false,
      access: false
    }
  },
  computed: {},
  methods: {
    registerUser () {
      console.log('work')
      this.unregistered = false
    }
  },
  components: {
    AppHeader,
    AppFooter
  }
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
