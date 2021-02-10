<template>
  <div class="app-nutrition__results nutrition__results">
    <p>
      <strong>Proteins</strong>
      <span>{{ nutResults[0] }}</span>
    </p>
    <p>
      <strong>Fats</strong>
      <span>{{ nutResults[1] }}</span>
    </p>
    <p>
      <strong>Carbs</strong>
      <span>{{ nutResults[2] }}</span>
    </p>
    <p>
      <strong>Calories</strong>
      <span>{{ nutResults[3] }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    food: {
      type: Object,
      required: false
    }
  },
  computed: {
    nutResults() {
      return this.$store.getters['nutrition/dailyResult'].map(el => el.toFixed(2))
    }
  }
}
</script>

<style scoped lang="scss">
.nutrition__results {
  margin: 0 auto;
  width: 90%;
  display: flex;
  padding: 0 1rem;
  flex: 0 0 20%;
  p {
    flex: 0 0 25%;
    color: #2d203a;
    text-align: center;
    font-family: "Quicksand", sans-serif;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
  }
}
</style>
