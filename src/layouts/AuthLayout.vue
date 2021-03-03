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
import AppHeader from '../components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  components: { AppFooter, AppHeader }
}
</script>

<style scoped>

</style>
