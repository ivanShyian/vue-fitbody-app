<template>
  <div class="form-group col-md-12">
    <div>
      <label for="inputPassword4">Create a password</label>
      <input type="password"
             class="form-control"
             id="inputPassword4"
             v-model="password"
             placeholder="Password"
             @keypress.enter.prevent>
      <label for="inputPassword5"></label>
      <input type="password"
             class="form-control"
             :value="modelPassword"
             @input="passwordValue"
             id="inputPassword5"
             placeholder="Confirm password"
             @keypress.enter.prevent>
      <small>Minimum 6 symbols...</small>
    </div>
    <div>
      <button class="btn" @click.prevent="$emit('prev')">Back</button>
      <button class="btn">Register</button>
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
    'update:modelPassword': {
      type: String,
      required: true
    }
  },
  props: {
    modelPassword: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      password: ''
    }
  },
  methods: {
    passwordValue (e) {
      const value = e.target.value
      if (value === this.password) {
        console.log('confirm')
        this.$emit('update:modelPassword', value.trim())
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
    margin: 0 0 1rem 0;

    label {
      @include registerTitle
    }

    small {
      color: rgba(0, 0, 0, .5);
      letter-spacing: 1px;
    }
  }

  div:last-child {
    display: flex;
    justify-content: space-evenly;

    button.btn:first-child {
      border: 1px solid rgba(0, 0, 0, .2);
      background-color: snow;
    }

    button.btn:last-child {
      width: auto;
    }
  }
}
</style>
