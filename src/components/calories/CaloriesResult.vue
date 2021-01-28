<template>
  <div class="calories__result">
    <span>Your result</span>
    <span>{{ result }} <strong>ccal</strong></span>
  </div>
</template>

<script>
export default {
  computed: {
    result() {
      return this.$store.getters['calories/result']
    }
  }
}
</script>

<style scoped lang="scss">
.calories__result {
  text-align: center;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid orangered;
  span:first-child {
    font-family: "Quicksand", sans-serif;
    font-weight: 700;
    font-size: 2rem;
    color: #000063;
    margin-bottom: .7rem;
  }
  span:last-child {
    font-size: 2.5rem;
    color: #f8714f;
    font-weight: bold;
    letter-spacing: 2px;
    strong {
      color: burlywood;
    }
  }
}
</style>
