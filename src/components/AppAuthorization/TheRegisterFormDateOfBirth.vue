<template>
  <div class="form-group col-md-12">
    <div class="control-group">
      <span>Date of birth</span>
      <div class="d-flex row">
        <div class="col">
          <label for="dobday"></label>
          <input placeholder="Day"
                 class="form-control"
                 type="text"
                 id="dobday"
                 maxlength="2"
                 v-focus
                 :value="modelBirth.day"
                 @input="updateValue('day', $event.target.value)"
                 @keypress.enter.prevent>
        </div>
        <div class="col1">
          <label for="dobmounth"></label>
          <select class="form-control"
                  name="month"
                  :value="modelBirth.month"
                  @input="updateValue('month', $event.target.value)"
                  id="dobmounth">
            <option>Month</option>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
        </div>
        <div class="col">
          <label for="dobyear"></label>
          <input placeholder="Year"
                 class="form-control"
                 type="text"
                 id="dobyear"
                 :value="modelBirth.year"
                 @input="updateValue('year', $event.target.value)"
                 maxlength="4"
                 @keypress.enter.prevent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import focusDirective from './focusDirective'

export default {
  props: {
    modelBirth: {
      type: Object,
      required: true
    }
  },
  emits: {
    'update:modelBirth': {
      type: Object,
      required: true
    }
  },
  directives: {
    focus: focusDirective
  },
  methods: {
    updateValue (key, value) {
      this.$emit('update:modelBirth', {
        ...this.modelBirth,
        [key]: value
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../template";

@include buttonStyling
div.control-group {
  span {
    @include registerTitle
  }

  div.row .col,
  .col1 {
    padding: 0;
  }
}
</style>
