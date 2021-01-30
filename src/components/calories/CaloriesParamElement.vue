<template>
  <div class="calories__params-element">
    <span>{{ text }}</span>
    <input type="text"
           v-focus
           :value="param"
           @input="$emit('input-param', $event.target.value)"
           maxlength="3">
  </div>
</template>

<script>
import focusDirective from '@/directives/focusDirective'

export default {
  props: {
    param: {
      type: String,
      required: false,
      default: ''
    },
    text: {
      type: String,
      required: false,
      default: ''
    }
  },
  directives: {
    focus: focusDirective
  }
}
</script>

<style scoped lang="scss">
.calories__params-element {
  display: flex;
  flex-direction: column;
}
span {
  font-family: "Quicksand", sans-serif;
  font-size: 1.2rem;
  color: #2d203a;
  margin-bottom: .5rem;
}
input {
  text-align: center;
  max-width: 10rem;
  padding: .2rem .8rem;
  border-radius: .6rem;
  outline: none;
  border: 1px solid rgba(0, 0, 0, .2);
}
input:focus {
  border: 1px solid darkorange;
}
</style>
