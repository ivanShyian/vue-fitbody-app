<template>
  <div class="form-group col-md-12">
    <div>
      <label for="inputName">What is your name?</label>
      <input type="text"
             class="form-control"
             id="inputName"
             placeholder="Name"
             :value="value"
             @input="setField"
             v-focus
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

div.form-group div:first-child label {
  margin: 0 0 1.5rem 0;
  @include registerTitle

}
</style>
