<template>
  <div class="main__actions">
    <div class="main__actions-weight">
      <label for="newWeight">New weight?</label>
      <input id="newWeight" v-model="newWeight" type="text">
      <button class="btn" :disabled="newWeight === ''" @click="submitNewWeight">Update</button>
    </div>
    <div class="main__actions-goal">
      <div>
        <label for="newGoal">Add new goal!</label>
<!--        <input id="newGoal" type="text" v-model="desiredWeight">-->
<!--        <button class="btn" @click="addNewGoal">Add</button>-->
      </div>
      <div>
        <label for="changeGoal">Change current goal!</label>
<!--        <input id="changeGoal" type="text">-->
<!--        <button class="btn">Change</button>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newWeight: '',
      desiredWeight: ''
    }
  },
  methods: {
    async submitNewWeight() {
      const modified = this.$store.getters['goals/goals'].map(el => ({
        ...el,
        currentWeight: this.newWeight
      }))
      await this.$store.dispatch('goals/updateGoal', modified)
    },
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
.main__actions {
  display: flex;
  align-items: center;
  flex: 0 1 40%;
  width: 100%;
}

.main__actions-weight {
  border-right: 2px dotted rgba(42, 35, 58, .3);
}

.main__actions-weight,
.main__actions-goal {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 0 0 50%;

  label {
    color: black;
    font-family: "Quicksand", sans-serif;
    font-size: 1.5rem;
  }

  input {
    max-width: 30%;
    border-radius: 1rem;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, .2);
    margin: 0 0 1rem 0;
  }

  button {
    max-width: 25%;
  }

  input:focus {
    outline: none;
  }
}
</style>
