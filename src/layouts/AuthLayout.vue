<template>
  <app-header></app-header>
  <app-message></app-message>
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
import AppMessage from '@/components/UI/AppMessage'

export default {
  components: { AppMessage, AppFooter, AppHeader }
}
</script>

<style scoped>

</style>
