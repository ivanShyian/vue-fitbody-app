<template>
  <div class="form-group col-md-12">
    <div>
      <span>What is your name?</span>
      <Field name="name"
             placeholder="Name"
             type="text"
             v-focus
             :class="['form-control', {invalid: errors.name}]">
      </Field>
    </div>
  </div>
</template>

<script>
import focusDirective from '@/directives/focusDirective'
import { Field } from 'vee-validate'

export default {
  directives: {
    focus: focusDirective
  },
  props: {
    errors: Object
  },
  components: {
    Field
  }
}
</script>

<style lang="scss" scoped>
@import "../../template";
@include buttonStyling
span {
  display: block;
  margin: 0 0 1.5rem 0;
  @include registerTitle

}
</style>
