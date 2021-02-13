<template>
  <footer class="footer" :class="{'green': mainLayout}">
    <div class="footer__wrapper">
      <span>Telegram: <a href="https://t.me/vanjke">@vanjkes</a></span>
      <span>Developed by Shyian Ivan</span>
      <span>Github: <a href="https://github.com/ivanShyian">@ivanShyian</a></span>
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
.footer {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 5vh;
  padding: .5rem 0 .5rem 0;
  &__wrapper {
    width: 50%;
    display: flex;
    justify-content: space-around;
    span {
      font-family: "Jost", sans-serif;
      font-size: 1rem;
      color: rgba(0, 0, 0, .6);
    }
  }
}
.footer.green {
  background-color: transparent;
}
</style>
