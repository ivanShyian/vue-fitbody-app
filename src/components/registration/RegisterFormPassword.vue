<template>
  <div class="form-group col-md-12">
    <div>
      <span>Create a password</span>
      <Field name="password"
             type="password"
             autocomplete
             placeholder="Password"
             :class="['form-control', {invalid: errors.password}]"/>
      <ErrorMessage name="password" as="small"/>
      <Field name="passwordCheck"
             type="password"
             autocomplete
             placeholder="Confirm password"
             :class="['form-control', {invalid: errors.passwordCheck}]"/>
      <ErrorMessage name="passwordCheck" as="small"/>
    </div>
  </div>
</template>

<script>
import focusDirective from '../../directives/focusDirective'
import { Field, ErrorMessage } from 'vee-validate'

export default {
  props: {
    errors: Object
  },
  directives: {
    focus: focusDirective
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
div.form-group.col-md-12 {
  div {
    span {
      display: block;
      margin: 0 0 1.5rem 0;
      @include registerTitle
    }

    input:last-child {
      margin-top: 1rem;
    }
  }
}
</style>
