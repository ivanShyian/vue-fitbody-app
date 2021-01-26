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
import AppHeader from '../components/TheNavbar'
import AppFooter from '@/components/TheFooter'
import AppMessage from '@/components/ui/AppMessage'

export default {
  components: { AppMessage, AppFooter, AppHeader }
}
</script>

<style scoped>

</style>
