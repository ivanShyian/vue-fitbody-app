<template>
  <div class="calories__params">
    <span class="calories__params-title">Enter your values</span>
    <div class="calories__params-small">
      <small>These values very important for current formula</small>
      <small>Also these values will be used in application</small>
    </div>
    <div class="calories__params-wrapper">
      <div class="calories__params-height">
        <span>Your height in cm</span>
        <input type="text"
               :value="$store.getters['calories/height']"
               @input="$store.commit('calories/setHeight', $event.target.value)"
               maxlength="3">
      </div>
      <div class="calories__params-weight">
        <span>Your weight in kg</span>
        <input type="text"
               :value="$store.getters['calories/weight']"
               @input="$store.commit('calories/setWeight', $event.target.value)"
               maxlength="3">
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.calories__params {
  text-align: center;
  width: 100%;
}
.calories__params-title {
  display: block;
  font-size: 2rem;
  color: #000063;
  font-family: "Jost", sans-serif;
}
.calories__params-small {
  font-family: "Quicksand", sans-serif;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, .6);
  margin: 1rem 0 3rem 0;
}
.calories__params-wrapper {
  justify-content: center;
  display: flex;
  width: 100%;
  span {
    font-family: "Quicksand", sans-serif;
    font-size: 1.2rem;
    color: #2d203a;
    margin-bottom: .5rem;
  }
  input {
    text-align: center;
    max-width: 10rem;
    padding: .2rem .8rem;
    border-radius: .6rem;
    outline: none;
    border: 1px solid rgba(0, 0, 0, .2);
  }
  div:first-child {
    margin-right: 3rem;
  }
}
.calories__params-height,
.calories__params-weight {
  display: flex;
  flex-direction: column;
}
</style>
