<template>
  <div class="form-group col-md-12">
    <div>
      <label for="inputGender">Who are you?</label>
      <select id="inputGender"
              :value="modelGender"
              @input.prevent="genderValue"
              class="form-control">
        <option>Choose...</option>
        <option value="man">Man</option>
        <option value="woman">Woman</option>
      </select>
    </div>
    <div class=" flex-row">
      <button class="btn" @click.prevent="$emit('prev')">Back</button>
      <button class="btn" @click.prevent="$emit('next')">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  emits: {
    prev: {
      type: Function,
      required: true
    },
    next: {
      type: Function,
      required: true
    },
    'update:modelGender': {
      type: String,
      required: true
    }
  },
  props: {
    modelGender: {
      type: String,
      required: true
    }
  },
  methods: {
    genderValue (e) {
      const value = e.target.value
      this.$emit('update:modelGender', value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../template';

@include buttonStyling;
div.form-group {
  width: 100%;

  div:first-child {
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

  div:last-child {
    display: flex;
    justify-content: space-evenly;

    button.btn:first-child {
      border: 1px solid rgba(0, 0, 0, .2);
      background-color: snow;
    }
  }
}
</style>
