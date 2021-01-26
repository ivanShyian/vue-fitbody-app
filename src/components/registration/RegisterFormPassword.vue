<template>
  <div class="form-group col-md-12">
    <div>
      <label for="inputPassword4">Create a password</label>
      <input type="password"
             class="form-control"
             id="inputPassword4"
             v-focus
             :value="value"
             @input="setValue"
             placeholder="Password"
             autocomplete="on"
             @keypress.enter.prevent>
      <label for="inputPassword5"></label>
      <input type="password"
             class="form-control"
             :value="password"
             @input="$emit('update:password', $event.target.value)"
             id="inputPassword5"
             placeholder="Confirm password"
             autocomplete="on"
             @keypress.enter.prevent>
      <small>Minimum 6 symbols...</small>
    </div>
  </div>
</template>

<script>
import focusDirective from '../../directives/focusDirective'
import { mapGetters } from 'vuex'

export default {
  props: ['password'],
  emits: ['update:password'],
  directives: {
    focus: focusDirective
  },
  computed: {
    ...mapGetters('register', { value: 'currentText' })
  },
  methods: {
    setValue (event) {
      if (event.target.value !== '') {
        this.$store.commit('register/setText', event.target.value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../template";

@include buttonStyling
div.form-group.col-md-12 {
  div:first-child {
    label {
      margin: 0 0 1.5rem 0;
      @include registerTitle
    }

    small {
      color: rgba(0, 0, 0, .5);
      letter-spacing: 1px;
    }
  }
}
</style>
