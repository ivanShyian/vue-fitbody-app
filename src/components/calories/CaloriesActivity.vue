<template>
  <div class="calories__activity">
    <span>Choose your daily activity</span>
    <small>Also your daily activity effects of formula index</small>
    <div class="btn-group">
      <button type="button"
              :class="['btn', {'active': idx === currentDaily}]"
              @click="$store.commit('calories/setDaily', idx)"
              v-for="(btn, idx) in dailyButtons"
              :key="btn.id">{{ btn.name }} activity
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('calories', ['currentDaily', 'dailyButtons'])
  }
}
</script>

<style scoped lang="scss">
.calories__activity {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;

  span {
    color: #000063;
    font-family: "Jost", sans-serif;
    font-size: 1.7rem;
  }
  small {
    font-family: "Quicksand", sans-serif;
    color: rgba(0, 0, 0, .6);
    font-size: 1rem;
    margin: 1rem 0 3rem 0;
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
  width: 80%;
  margin: 0 auto;
}
</style>
