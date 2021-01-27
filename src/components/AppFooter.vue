<template>
  <footer class="footer" :class="{'green': mainLayout}">
    <div class="footer__wrapper">
      <span>ivanShyian prod. Bless you 2021</span>
    </div>
  </footer>
</template>
<script>
export default {
  computed: {
    mainLayout() {
      return this.$route.meta.layout === 'main'
    }
  }
}
</script>
<style scoped lang="scss">
footer.footer {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 5vh;
  padding: .5rem 0 .5rem 0;
  &__wrapper {
    span {
      font-size: .9rem;
      color: rgba(0, 0, 0, .6);
    }
  }
}
.footer.green {
  background-color: transparent;
}
</style>
