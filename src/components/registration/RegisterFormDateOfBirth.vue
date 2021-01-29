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
                 :value="value.day"
                 @input="setField('day', $event.target.value)">
        </div>
        <div class="col1">
          <label for="dobmounth"></label>
          <select class="form-control"
                  name="month"
                  :value="value.month"
                  @input="setField('month', $event.target.value)"
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
                 :value="value.year"
                 @input="setField('year', $event.target.value)"
                 maxlength="4">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import focusDirective from '../../directives/focusDirective'
import { mapGetters } from 'vuex'

export default {
  directives: { focus: focusDirective },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('register', { value: 'currentText' })
  },
  methods: {
    setField(field, value) {
      const date = this.$store.state.register['date-of-birth']
      if (field === 'month' && value !== 'Choose...') {
        this.$store.commit('register/setText', {
          value,
          fieldName: field
        })
        if (date.day !== '' && date.year !== '') {
          this.$store.commit('register/notEmpty')
        }
      } else if (value !== '') {
        this.$store.commit('register/setText', {
          value,
          fieldName: field
        })
        if (date.day !== '' && date.month !== 'Month' && date.year !== '') {
          this.$store.commit('register/notEmpty')
        }
      } else {
        this.$store.commit('register/isEmpty')
      }
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
