<template>
  <div class="form-group col-md-12">
    <div>
      <span>Who are you?</span>
      <Field name="gender"
             v-focus
             as="select"
             :class="['form-control', {invalid: errors.gender}]">
        <option value="" disabled>Choose...</option>
        <option value="man">Man</option>
        <option value="woman">Woman</option>
      </Field>
    </div>
  </div>
</template>

<script>
import focusDirective from '../../directives/focusDirective'
import { Field } from 'vee-validate'

export default {
  props: {
    errors: Object
  },
  directives: {
    focus: focusDirective
  },
  components: {
    Field
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

    span {
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
