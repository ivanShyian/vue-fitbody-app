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
  border-radius: 2rem;
  border-top: 2px solid rgba(0, 0, 0, .1);
  border-bottom: 2px solid rgba(0, 0, 0, .1);
  button {
    position: relative;
    font-family: "Quicksand", sans-serif;
    font-size: 1.2rem;
  }
  button:before {
    position: absolute;
    top: 50%;
    left: -20%;
    content: '';
    width: 2rem;
    border: 1px dashed rgba(0, 0, 0, .2);
  }
  button:after {
    position: absolute;
    top: 50%;
    right: -20%;
    content: '';
    width: 2rem;
    border: 1px dashed rgba(0, 0, 0, .2);
  }
}
</style>
