<template>
  <div class="calories__result">
    <span>Your result</span>
    <span>{{ result }} <strong>ccal</strong></span>
  </div>
  <div class="calories__result-buttons">
    <button class="btn" @click.prevent="$store.commit('calories/clear')">Try again</button>
    <button class="btn calories-submit-btn" type="submit">Save</button>
  </div>
</template>

<script>
export default {
  unmounted() {
    this.$store.commit('calories/clear')
  },
  computed: {
    result() {
      return this.$store.getters['calories/result']
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../template";

@include buttonStyling;
.calories__result {
  text-align: center;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid orangered;
  margin-bottom: 2rem;

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
.calories__result-buttons {
  width: 50%;
  display: flex;
  justify-content: center;
  button.btn:first-child {
    margin-right: 2rem;
  }
}
</style>
