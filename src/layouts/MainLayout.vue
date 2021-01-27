<template>
  <app-header></app-header>
  <main class="main">
    <router-view></router-view>
  </main>
  <app-footer></app-footer>
</template>

<script>
import AppHeader from '../components/TheNavbar'
import AppFooter from '../components/TheFooter'

export default {
  components: {
    AppFooter,
    AppHeader
  }
}
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #abbd81
}
</style>
