<template>
  <div class="app__main">
    <div>
      <label for="newWeight">New weight?</label>
      <input id="newWeight" v-model="newWeight" type="text">
      <button class="btn" :disabled="newWeight === ''" @click="submitNewWeight">Update</button>
    </div>
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
    submitNewWeight() {
      const params = {
        ...this.$store.state.userData.params,
        newWeight: this.newWeight
      }
      this.$store.dispatch('update', params)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../template";

@include buttonStyling;
.app__main {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    label {
      color: black;
      font-family: "Quicksand", sans-serif;
      font-size: 1.5rem;
    }
    input {
      max-width: 30%;
      border-radius: 1rem;
    }
    input {
      text-align: center;
      border: 1px solid rgba(0, 0, 0, .2);
      margin: 0 0 1rem 0;
    }
    button {
      max-width: 10%;
    }
    input:focus {
      outline: none;
    }
  }
}
</style>
