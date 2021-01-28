<template>
  <div class="menu__main-wrapper card">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.menu__main-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  height: auto;
  margin: 0;
  background-color: rgba(255, 255, 227, .7);
  border-radius: .5rem 1rem 1rem .5rem;
  border: 0;
  z-index: 25;
  h1 {
    color: rgba(45, 32, 58, .8);
    text-align: center;
    max-width: 25rem;
  }
  .btn:focus {
    box-shadow: none;
  }
 }
</style>
