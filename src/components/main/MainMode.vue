<template>
  <div class="main__mode">
    <button class="btn">Change mode</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.main__mode {
  width: 100%;
  flex: 0 0 10%;
  border-radius: .5rem;
  border-top: 2px solid rgba(0, 0, 0, .1);
  border-bottom: 2px solid rgba(0, 0, 0, .1);
  button {
    position: relative;
    font-family: "Quicksand", sans-serif;
    font-size: 1.2rem;
  }
}
</style>
