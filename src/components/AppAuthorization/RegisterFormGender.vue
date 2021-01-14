<template>
  <div class="form-group">
    <div>
    <label for="inputGender">Who are you?</label>
    <select id="inputGender" class="form-control">
      <option>Choose...</option>
      <option>Man</option>
      <option>Woman</option>
    </select>
    </div>
    <button class="btn">Next</button>
  </div>
</template>

<style lang="scss" scoped>
@import '../../template';
@include buttonStyling;
div.form-group {
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 0 1.5rem 0;
    label {
      font-family: "Quicksand", sans-serif;
      color: #000063;
      font-size: 1.5rem;
    }
    select {
      width: 100%;
    }
  }
}
</style>
