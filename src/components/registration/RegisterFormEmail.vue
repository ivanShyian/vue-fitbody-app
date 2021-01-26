<template>
  <div class="form-group col-md-12">
    <div>
      <label for="inputEmail4">Enter your email address...</label>
      <input type="email"
             class="form-control"
             id="inputEmail4"
             placeholder="Email"
             v-focus
             :value="value"
             @input.prevent="setField"
             @keypress.enter.prevent>
    </div>
  </div>
</template>

<script>

import { registerMixin } from '@/mixins/register.mixin'

export default {
  mixins: [registerMixin]
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
