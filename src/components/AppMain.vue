<template>
  <div class="app__main">
    <h4>Hello, dear friend!</h4>
    <span>For beginning you should pick some</span>
    <span>action from side bar!</span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.app__main {
  text-align: center;
  display: flex;
  flex-direction: column;
  h4 {
    font-family: "Quicksand", sans-serif;
    color: #2d203a;
    font-size: 2.5rem;
    margin: 0 0 1rem 0;
  }
  span {
    font-size: 1.5rem;
  }
  span:nth-child(2) {
    color: #000063;
  }
  span:last-child {
    color: orangered;
  }
}
</style>
