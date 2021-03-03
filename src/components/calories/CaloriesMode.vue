<template>
  <div class="calories__mode">
    <div class="calories__title" v-if="!type">
      <span>Choose your mode</span>
      <small>Mode is like general point to usage this app</small>
    </div>
    <div class="btn-group">
      <button type="button"
              v-for="btn in modeButtons"
              :class="['btn', 'danger', {'active': btn.value === mode}]"
              @click="$emit('update:mode', btn.value)"
              :key="btn.id"> {{ btn.name }}
      </button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    mode: {
      type: Number,
      required: true
    },
    type: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: {
    'update:mode': {
      type: Number,
      required: true
    }
  },
  data() {
    return {
    }
  },
  computed: {
    modeButtons() {
      return this.$store.state.calories.modeButtons
    }
  }
}
</script>

<style scoped lang="scss">
.calories__title {
  display: flex;
  flex-direction: column;
  text-align: center;
  span {
    color: #000063;
    font-family: "Jost", sans-serif;
    font-size: 1.7rem;
    @media (max-height: 800px) {
      font-size: 1.4rem;
    }
  }
  small {
    font-family: Quicksand, sans-serif;
    font-size: 1rem;
    color: rgba(0, 0, 0, .6);
    margin: 1rem 0 2rem 0;
    @media (max-height: 700px) {
      margin: 1rem 0 1rem 0;
    }
    @media (max-height: 650px) {
      margin: .5rem 0 .5rem 0;
      font-size: .8rem;
    }
  }
}
.calories__mode .btn-group {
  margin: 0 auto;
  button.btn {
    border: 1px solid black;
    font-size: 1.2rem;
    @media (max-height: 700px) {
      padding: .2rem;
    }
  }
  button.btn.active {
    background-color: #abbd81;
  }
}
</style>
