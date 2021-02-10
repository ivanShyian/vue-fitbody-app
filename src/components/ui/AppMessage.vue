<template>
  <div :class="['alert', message.type]" v-if="message">
    <p class="alert-title">{{ title }}</p>
    <p>{{ message.value }}</p>
    <span class="alert-close" @click="close">&times;</span>
  </div>
</template>
<script>

export default {
  data() {
    return {
      TITLE_MAP: {
        primary: 'Successful!',
        danger: 'Error!',
        warning: 'Warning!'
      }
    }
  },
  computed: {
    message() {
      return this.$store.getters['alert/alert']
    },
    title() {
      return this.$store.getters['alert/alert'] ? this.TITLE_MAP[this.$store.getters['alert/alert'].type] : ''
    }
  },
  methods: {
    close() {
      this.$store.commit('alert/setMessage', null)
    }
  }
}
</script>
<style scoped lang="scss">
div.alert {
  position: absolute;
  z-index: 10;
  top: .5rem;
  text-align: center;
  width: 25rem;
  background: #f8f8ff;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  border-bottom: 1rem solid transparent;
  border-left: 1rem solid transparent;
  border-right: 1rem solid transparent;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  p.alert-title {
    font-family: "Jost", sans-serif;
    letter-spacing: 2px;
    font-size: 1.4rem;
    font-weight: 700;
  }

  span.alert-close {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.5rem;
  }
}

div.alert.warning {
  border-bottom: 1rem solid darkorange;
}

div.alert.primary {
  border-bottom: 1rem solid #00bf00;
}

div.alert.danger {
  border-bottom: 1rem solid red;
}
</style>
