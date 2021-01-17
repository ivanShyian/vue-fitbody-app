<template>
  <div class="form-group col-md-12">
    <div>
      <label for="inputEmail4">Enter your email address...</label>
      <input type="email"
             class="form-control"
             id="inputEmail4"
             placeholder="Email"
             v-focus
             :value="modelEmail"
             @input.prevent="emailValue"
             @keypress.enter.prevent>
    </div>
  </div>
</template>

<script>
import focusDirective from './focusDirective'

export default {
  emits: {
    'update:modelEmail': {
      type: String,
      required: true
    }
  },
  props: {
    modelEmail: {
      type: String,
      required: true
    }
  },
  directives: {
    focus: focusDirective
  },
  methods: {
    emailValue (e) {
      const value = e.target.value
      this.$emit('update:modelEmail', value.trim())
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../template";

@include buttonStyling
div.form-group {
  div:first-child {
  }
  label {
    margin: 0 0 1.5rem 0;
    @include registerTitle
  }
}

</style>
