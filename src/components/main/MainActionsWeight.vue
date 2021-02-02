<template>
  <div class="main__actions-weight">
    <label for="newWeight">New weight?</label>
    <input id="newWeight" v-model="newWeight" type="text" maxlength="2">
    <button class="btn" :disabled="newWeight === ''" @click="submitNewWeight">Update</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newWeight: ''
    }
  },
  methods: {
    async submitNewWeight() {
      const modified = this.$store.getters['goals/goals'].map(el => ({
        ...el,
        currentWeight: this.newWeight
      }))
      await this.$store.dispatch('goals/updateGoal', modified)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../template";

@include buttonStyling;
.main__actions-weight {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px dotted rgba(42, 35, 58, .3);
  width: 100%;
  flex: 0 0 50%;
  label {
    font-size: 1.4rem;
    font-family: "Jost", sans-serif;
    color: rgba(0, 0, 99, .7);
  }
  input {
    max-width: 40%;
    text-align: center;
    border-radius: 2rem;
    padding: 0 1rem;
    border: 1px solid rgba(0, 0, 0, .2);
    margin-bottom: 1rem;
  }
  input:focus {
    color: #495057;
    background-color: #fff;
    border-color: #f4ad94;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(233, 84, 32, .2);
  }
  button {
    padding: .1rem;
  }
}

</style>
