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
  </div>
</template>

<script>
export default {
  emits: {
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
      if (value.length === 0) {
        console.log('h')
      }
      this.$emit('update:modelName', value.trim())
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../template";

@include buttonStyling

div.form-group div:first-child label {
  margin: 0 0 1.5rem 0;
  @include registerTitle

}
</style>
