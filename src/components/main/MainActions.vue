<template>
  <div class="main__actions">
    <main-actions-weight></main-actions-weight>
    <main-actions-goals></main-actions-goals>
  </div>
</template>

<script>
import MainActionsWeight from '@/components/main/MainActionsWeight'
import MainActionsGoals from '@/components/main/MainActionsGoals'
export default {
  components: { MainActionsWeight, MainActionsGoals }
}
</script>

<style scoped lang="scss">
.main__actions {
  display: flex;
  align-items: center;
  flex: 0 1 50%;
  width: 100%;
  height: 100%;
}
</style>
