<template>
  <div class="app__main">
    <main-indicators></main-indicators>
    <main-mode></main-mode>
    <main-actions></main-actions>
  </div>
</template>

<script>
import MainActions from '@/components/main/MainActions'
import MainIndicators from '@/components/main/MainIndicators'
import MainMode from '@/components/main/MainMode'
export default {
  components: {
    MainMode,
    MainActions,
    MainIndicators
  }
}
</script>

<style scoped lang="scss">
.app__main {
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
