<template>
  <div class="form-group col-md-12">
    <div>
      <label for="inputGender">Who are you?</label>
      <select
        v-focus
        id="inputGender"
        :value="value"
        @input="setField"
        class="form-control"
      >
        <option>Choose...</option>
        <option value="man">Man</option>
        <option value="woman">Woman</option>
      </select>
    </div>
  </div>
</template>

<script>
import focusDirective from '../../directives/focusDirective'
import { mapGetters } from 'vuex'

export default {
  directives: {
    focus: focusDirective
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters('register', { value: 'currentText' })
  },
  methods: {
    setField (event) {
      if (event.target.value !== 'Choose...') {
        this.$store.commit('register/setText', event.target.value)
        this.$store.commit('register/notEmpty')
      } else {
        this.$store.commit('register/isEmpty')
      }
    }
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

    label {
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
