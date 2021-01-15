<template>
  <div class="form-group col-md-12">
    <div>
      <label for="inputName">What is your name?</label>
      <input type="text"
             class="form-control"
             id="inputName"
             placeholder="Name"
             :value="modelName"
             @input.prevent="nameValue"
             @keypress.enter.prevent>
    </div>
    <div>
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
    'update:modelName': {
      type: String,
      required: true
    }
  },
  props: {
    modelName: {
      type: String,
      required: true
    }
  },
  methods: {
    nameValue (e) {
      const value = e.target.value
      this.$emit('update:modelName', value.trim())
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../template";

@include buttonStyling
div.form-group {
  div:first-child {
    margin: 0 0 1rem 0;

    label {
      @include registerTitle
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
