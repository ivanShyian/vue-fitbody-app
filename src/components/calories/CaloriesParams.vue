<template>
  <div class="calories__params">
    <div class="calories__params-small">
      <span class="calories__params-title" v-if="!firstVisit">Enter your values</span>
      <p v-if="firstVisit">Let's think.. what weight you wanna reach =)</p>
      <small>These values very important for current formula</small>
    </div>
    <div class="calories__params-wrapper">
      <calories-param-element
        text="Your weight in kg"
        input-id="calWeight"
        :param="$store.getters['calories/weight']"
        @input-param="$store.commit('calories/setWeight', $event)"
      ></calories-param-element>
      <calories-param-element
        v-if="!firstVisit"
        text="Your height in cm"
        input-id="calHeight"
        :param="$store.getters['calories/height']"
        @input-param="$store.commit('calories/setHeight', $event)">
      </calories-param-element>
      <calories-param-element
        v-if="firstVisit"
        text="Desired weight"
        input-id="calDesWeight"
        :param="$store.getters['calories/desireWeight']"
        @input-param="$store.commit('calories/setDesWeight', $event)">
      </calories-param-element>
    </div>
  </div>
</template>

<script>
import CaloriesParamElement from '@/components/calories/CaloriesParamElement'

export default {
  computed: {
    firstVisit() {
      return this.$store.getters.firstVisit
    }
  },
  components: {
    CaloriesParamElement
  }
}
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
  input:focus {
    border: 1px solid darkorange;
  }
  div:first-child {
    margin-right: 3rem;
  }
}
.calories__params-height,
.calories__params-weight,
.calories__params-desire-weight{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
