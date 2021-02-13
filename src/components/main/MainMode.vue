<template>
  <div class="main__mode">
    <button class="btn mode-btn"
            :style="{marginRight: active ? '1rem' : 0}"
            @click.prevent="openGoals">{{ active ? 'Change mode to -' : 'Change mode' }}</button>
    <div v-if="active">
      <button class="btn"
              v-for="goal in goals"
              :key="goal.id"
              @click="setMode(goal.id)"
      >{{ modeNaming[goal.mode] }}</button>
    </div>
  </div>
</template>

<script>
import { modeNaming } from '@/utils/constants'
export default {
  data() {
    return {
      active: false,
      modeNaming
    }
  },
  computed: {
    goals() {
      return this.$store.getters['goals/goals']
    }
  },
  methods: {
    openGoals() {
      this.active = !this.active
    },
    setMode(idx) {
      this.$store.commit('goals/setActive', idx)
      this.$store.dispatch('update', { activeGoal: idx })
    }
  }
}
</script>

<style scoped lang="scss">
.main__mode {
  width: 100%;
  flex: 0 0 10%;
  border-radius: .5rem;
  border-top: 2px solid rgba(0, 0, 0, .1);
  border-bottom: 2px solid rgba(0, 0, 0, .1);
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    position: relative;
    font-family: "Quicksand", sans-serif;
    font-size: 1.2rem;
  }
  button:focus {
    box-shadow: none;
  }
  .mode-btn:hover {
    border: 1px solid rgba(0, 0, 0, .7);
  }
  div {
    button {
      font-family: "Jost", sans-serif;
      border-radius: .8rem;
      padding: .1rem .4rem;
      border: 1px solid rgba(0, 0, 0, .2);
      background-color: rgba(184, 172, 172, 0.5);
      margin: 0 .5rem 0 0;
    }
    button:last-child {
      margin: 0;
    }
    button:hover {
      background-color: rgba(184, 172, 172, 0.3);
    }
  }
}
</style>
