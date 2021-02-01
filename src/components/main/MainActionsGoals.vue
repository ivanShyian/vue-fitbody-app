<template>
  <div class="main__actions-goal">
    <div class="main__actions-goal-new">
      <label for="newGoal">Add new goal</label>
      <div class="main__actions-goal-new-wrapper" v-if="false">
        <div class="main__actions-goal-new-mode">
          <span v-for="btn in modeButtons" :key="btn.id">{{ btn.name }}</span>
        </div>
        <input id="newGoal" type="text" v-model="desiredWeight" placeholder="Desired weight">
        <button class="btn" @click="addNewGoal">Add</button>
      </div>
    </div>
    <div class="main__actions-goal-change">
      <label for="changeGoal">Change current goal</label>
      <div v-if="false">
        <div>
          <input id="changeGoalFrom" type="text" placeholder="From...">
          <input id="changeGoal" type="text" placeholder="To...">
        </div>
        <button class="btn">Change</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      desiredWeight: ''
    }
  },
  computed: {
    ...mapState('calories', ['modeButtons'])
  },
  methods: {
    async addNewGoal() {
      const newItem = {
        id: Date.now().toString(),
        mode: 0,
        currentWeight: this.$store.getters.userData.params.weight,
        weight: this.$store.getters.userData.params.weight,
        finished: false,
        'desired-weight': this.desiredWeight
      }
      await this.$store.commit('goals/pushNewGoal', newItem)
      await this.$store.dispatch('goals/updateGoal')
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../template";

@include buttonStyling;
.main__actions-goal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  flex: 0 0 50%;

  label {
    display: block;
    position: relative;
    padding: 0 1rem;
    font-size: 1.4rem;
    font-family: "Jost", sans-serif;
    color: rgba(0, 0, 99, .7);
    border-radius: 2rem;
  }

  input {
    max-width: 50%;
    border-radius: 2rem;
    border: 1px solid rgba(0, 0, 0, .2);
    text-align: center;
    margin-bottom: 1rem;
  }

  button {
    padding: .1rem .2rem;
    max-width: 35%;
  }
}
.main__actions-goal-new {
  margin-bottom: 1rem;
  label:before {
    position: absolute;
    bottom: -75%;
    left: 50%;
    content: '';
    width: 1px;
    height: 1.5rem;
    border: 1px dashed rgba(0, 0, 0, .2);
  }
}
.main__actions-goal-new,
.main__actions-goal-change {
  display: flex;
  flex-direction: column;
}

.main__actions-goal-new-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
}

.main__actions-goal-new-mode {
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: block;
    padding: .3rem .5rem;
    margin-bottom: 1rem;
    color: black;
    border: 1px solid black;
  }

  span:last-child {
    border-bottom-right-radius: .5rem;
    border-top-right-radius: .5rem;
    border-left: 0;
  }

  span:first-child {
    border-bottom-left-radius: .5rem;
    border-top-left-radius: .5rem;
    border-right: 0;
  }
}

.main__actions-goal-change {
  input:first-child {
    margin-right: 1rem;
  }

  input {
    max-width: 25%;
  }
}
</style>
