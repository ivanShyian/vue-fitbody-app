<template>
  <div class="form-group col-md-12">
    <div class="control-group">
      <span>Date of birth</span>
      <div class="d-flex row">
        <div class="col">
          <Field name="birth.day"
                 v-focus
                 type="text"
                 placeholder="Day"
                 :class="['form-control', {invalid: errors['birth.day']}]">
          </Field>
        </div>
        <div class="col1">
          <Field name="birth.month"
                 as="select"
                 :class="['form-control', {invalid: errors['birth.month']}]">
            <option value="" disabled>Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </Field>
        </div>
        <div class="col">
          <Field name="birth.year"
                 type="text"
                 placeholder="Year"
                 :class="['form-control', {invalid: errors['birth.year']}]">
          </Field>
        </div>
      </div>
      <p v-if="errors" class="birth-errors">
        <small>{{ errors['birth.day'] }}</small>
        <small>{{ errors['birth.month'] }}</small>
        <small>{{ errors['birth.year'] }}</small>
      </p>
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
@import "../../template";

@include buttonStyling;
@include smallError();
div.control-group {
  span {
    display: block;
    margin: 0 0 1.5rem 0;
    @include registerTitle
  }

  div.row .col,
  .col1 {
    padding: 0;
  }
}
.birth-errors {
  display: flex;
  flex-direction: column;
}
</style>
