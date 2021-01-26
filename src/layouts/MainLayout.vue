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
import AppHeader from '../components/TheNavbar'
import AppFooter from '../components/TheFooter'
export default {
  components: { AppFooter, AppHeader }
}
</script>

<style scoped lang="scss">
.main {
  height: 100%;
  width: 100%;
  background-color: #1e3d59;
  &__wrapper {
    height: 100%;
  }
}
</style>
