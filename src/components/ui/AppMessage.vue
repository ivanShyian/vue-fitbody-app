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
        primary: 'Успешно!',
        danger: 'Ошибка!',
        warning: 'Внимание!'
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
  box-shadow: -1px 7px 39px -16px rgba(0, 0, 0, 0.75);

  p.alert-title {
    font-family: "Jost", sans-serif;
    letter-spacing: 2px;
    font-size: 1.4rem;
    font-weight: 700;
  }

  span.alert-close {
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
