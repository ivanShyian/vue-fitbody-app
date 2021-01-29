<template>
  <div class="calories__mode">
    <span>Choose your mode</span>
    <small>Mode is like general point to usage this app</small>
    <div class="btn-group">
    <button type="button"
            :class="['btn', 'danger', {'active': idx === currentMode}]"
            @click="$store.commit('calories/setMode', idx)"
            v-for="(btn, idx) in modeButtons"
            :key="btn.id"> {{ btn.name }}
    </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('calories', ['currentMode', 'modeButtons'])
  }
}
</script>

<style scoped lang="scss">
.calories__mode {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  span {
    color: #000063;
    font-family: "Jost", sans-serif;
    font-size: 1.7rem;
    @media (max-height: 800px) {
      font-size: 1.4rem;
    }
  }
  small {
    font-family: Quicksand, sans-serif;
    font-size: 1rem;
    color: rgba(0, 0, 0, .6);
    margin: 1rem 0 2rem 0;
    @media (max-height: 700px) {
      margin: 1rem 0 1rem 0;
    }
    @media (max-height: 650px) {
      margin: .5rem 0 .5rem 0;
      font-size: .8rem;
    }
  }
  button.btn {
    border: 1px solid black;
    font-size: 1.2rem;
  }
  button.btn.active {
    background-color: #abbd81;
  }
}
.btn-group {
  width: 50%;
  margin: 0 auto;
  button.btn {
    @media (max-height: 700px) {
      padding: .2rem;
    }
  }
}
</style>
