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
                 :value="modelBirth.day"
                 @input.prevent="birthValues.day"
                 @keypress.enter.prevent>
        </div>
        <div class="col1">
          <label for="dobmounth"></label>
          <select class="form-control"
                  name="month"
                  :value="modelBirth.month"
                  @input.prevent="birthValues.month"
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
                 @input.prevent="birthValues.year"
                 maxlength="4"
                 @keypress.enter.prevent>
        </div>
      </div>
    </div>
    <div class="dob-btns">
      <button class="btn" @click.prevent="$emit('prev')">Back</button>
      <button class="btn" @click.prevent="nextPage">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  emits: {
    prev: {
      type: Function,
      required: true
    },
    next: {
      type: Function,
      required: true
    },
    'update:modelBirth': {
      type: Object,
      required: true
    }
  },
  props: {
    modelBirth: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      birthValues: {
        day: null,
        month: null,
        year: null
      }
    }
  },
  methods: {
    nextPage () {
      this.birthValue()
      this.$emit('next')
    },
    birthValue () {
      this.$emit('update:modelBirth', this.birthValues)
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

  div.row {
    margin-bottom: 1rem;

    .col,
    .col1 {
      padding: 0;
    }
  }
}

.dob-btns {
  display: flex;
  justify-content: space-evenly;

  button.btn:first-child {
    border: 1px solid rgba(0, 0, 0, .2);
    background-color: snow;
  }
}
</style>
