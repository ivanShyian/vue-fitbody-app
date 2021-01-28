<template>
  <div class="menu__main-wrapper card flex">
    <div class="menu__main-inner">
      <slot></slot>
    </div>
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
  flex: 1 1 90%;
  height: auto;
  margin: 0;
  background-color: #ffd69f;
  z-index: 25;
  border: 0;
  h1 {
    color: rgba(45, 32, 58, .8);
    text-align: center;
    max-width: 25rem;
  }
}
</style>
