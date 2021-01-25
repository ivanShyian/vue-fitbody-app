<template>
  <div class="form-group col-md-12">
    <div>
      <label for="inputGender">Who are you?</label>
      <select
        id="inputGender"
        v-focus
        :value="modelGender"
        @input.prevent="genderValue"
        class="form-control">
        <option>Choose...</option>
        <option value="man">Man</option>
        <option value="woman">Woman</option>
      </select>
    </div>
  </div>
</template>

<script>
import focusDirective from '../../directives/focusDirective'

export default {
  emits: {
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
  directives: {
    focus: focusDirective
  },
  computed: {
    isEmpty () {
      return this.modelGender === 'Choose...'
    }
  },
  methods: {
    genderValue (e) {
      const value = e.target.value
      if (value === 'man' || value === 'woman') {
        this.$emit('update:modelGender', value)
      }
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

    label {
      margin: 0 0 1.5rem 0;
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
