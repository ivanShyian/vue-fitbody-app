<template>
  <div class="form-group col-md-12">
    <div>
      <span>Enter your email address...</span>
      <Field name="email"
             placeholder="Email"
             type="text"
             v-focus
             :class="['form-control', {invalid: errors.email}]">
      </Field>
      <ErrorMessage name="email" as="small"/>
    </div>
  </div>
</template>

<script>

import focusDirective from '@/directives/focusDirective'
import { Field, ErrorMessage } from 'vee-validate'

export default {
  directives: {
    focus: focusDirective
  },
  props: {
    errors: Object
  },
  components: {
    Field,
    ErrorMessage
  }
}
</script>

<style lang="scss" scoped>
@import "../../template";

@include buttonStyling;
@include smallError;
div.form-group {
  div:first-child {
  }
  span {
    display: block;
    margin: 0 0 1.5rem 0;
    @include registerTitle
  }
}

</style>
