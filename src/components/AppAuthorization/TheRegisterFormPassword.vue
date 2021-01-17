<template>
  <div class="form-group col-md-12">
    <div>
      <label for="inputPassword4">Create a password</label>
      <input type="password"
             class="form-control"
             id="inputPassword4"
             v-focus
             v-model="password"
             placeholder="Password"
             @keypress.enter.prevent>
      <label for="inputPassword5"></label>
      <input type="password"
             class="form-control"
             :value="modelPassword"
             @input="passwordValue"
             id="inputPassword5"
             placeholder="Confirm password"
             @keypress.enter.prevent>
      <small>Minimum 6 symbols...</small>
    </div>
  </div>
</template>

<script>
import focusDirective from './focusDirective'

export default {
  emits: {
    'update:modelPassword': {
      type: String,
      required: true
    }
  },
  props: {
    modelPassword: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      password: ''
    }
  },
  directives: {
    focus: focusDirective
  },
  methods: {
    passwordValue (e) {
      const value = e.target.value
      if (value === this.password) {
        console.log('confirm')
        this.$emit('update:modelPassword', value.trim())
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../template";

@include buttonStyling
div.form-group.col-md-12 {
  div:first-child {
    label {
      margin: 0 0 1.5rem 0;
      @include registerTitle
    }

    small {
      color: rgba(0, 0, 0, .5);
      letter-spacing: 1px;
    }
  }
}
</style>
