<template>
  <div class="home__sidebar card">
    <p>Calories limit</p>
    <div class="home__sidebar-message" v-if="!calories">
      <span>Calculate calories limit</span>
      <button class="btn">Click</button>
    </div>
    <div class="home__sidebar-sc sidebar-sc" v-if="calories">
      <span class="sidebar-sc__max">{{ calories + 'ccal' }}</span>
      <span class="sidebar-sc__value">10%</span>
      <div class="sidebar-sc__scale" :style="{'height': '10%'}"></div>
      <span class="sidebar-sc__start">10ccal</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    calories() {
      const nutrition = this.$store.getters.userData.nutrition
      return nutrition ? nutrition.calories : null
    }
  }
}
</script>

<style scoped lang="scss">
.home__sidebar {
  flex: 1 0 10%;
  background-color: #abbd81;
  margin: 1rem 1rem 1rem 0;
  box-shadow: -1px 7px 39px -16px rgba(0, 0, 0, 0.75);
  border-radius: 1rem;
  border: 0;
  height: auto;
  p {
    padding: 3px 0 0 0;
    text-align: center;
    font-size: 1.4rem;
    font-family: "Jost", sans-serif;
    color: black;
  }
}
.home__sidebar-message {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  span {
    color: rgba(0, 0, 99, .7);
    font-weight: 700;
    font-family: "Quicksand", sans-serif;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  button {
    color: rgba(0, 0, 0, .5);
    width: 50%;
    padding: 0;
    border: 1px solid rgba(0, 0, 0, .5);
    transition: all ease 0.5s;
  }
  button:hover {
    color: rgba(0, 0, 0, .8);
    border: 1px solid rgba(0, 0, 0, .8);
    transition: all ease 0.5s;
  }
}
.sidebar-sc {
  overflow: hidden;
  border: 2px solid rgba(0, 0, 0, .1);
  border-radius: 3rem;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  &__start {
    border-top: 2px solid rgba(0, 0, 0, .1);
  }
  &__max {
    border-bottom: 2px solid rgba(0, 0, 0, .1);
  }
  &__max,
  &__start {
    font-size: 1.2rem;
    font-family: "Quicksand", sans-serif;
    font-weight: 700;
    color: #2d203a;
    z-index: 2;
  }
  &__value {
    font-family: "Jost", sans-serif;
    color: #2d203a;
    font-weight: 700;
    font-size: 1.2rem;
    z-index: 2;
  }
  &__scale {
    content: '';
    background-color: rgba(100, 255, 100, 0.6);
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}
</style>
