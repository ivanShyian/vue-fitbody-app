<template>
  <div class="form-group col-md-12">
    <div>
      <label for="inputEmail4">Enter your email address...</label>
      <input type="email"
             class="form-control"
             id="inputEmail4"
             v-model.trim="email"
             placeholder="Email"
             @keypress.enter.prevent>
    </div>
    <div>
      <button class="btn" @click.prevent="$emit('prev')">Back</button>
      <button class="btn" @click.prevent="$emit('next')">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['prev', 'next'],
  data () {
    return {
      email: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../template";

@include buttonStyling
div.form-group {
  div:first-child {
    margin: 0 0 1rem 0;
  }

  div:last-child {
    display: flex;
    justify-content: space-evenly;

    button.btn:first-child {
      border: 1px solid rgba(0, 0, 0, .2);
      background-color: snow;
    }
  }

  label {
    @include registerTitle
  }
}

</style>
