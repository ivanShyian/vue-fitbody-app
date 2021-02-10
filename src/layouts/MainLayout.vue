<template>
  <app-header></app-header>
  <app-message></app-message>
  <main class="main">
    <router-view></router-view>
  </main>
  <app-footer></app-footer>
</template>

<script>
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import AppMessage from '@/components/ui/AppMessage'

export default {
  components: {
    AppFooter,
    AppHeader,
    AppMessage
  }
}
</script>

<style scoped lang="scss">
.main {
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
