<template>
  <header class="header">
    <nav :class="{'header__wrapper': !mainLayout, 'header__wrapper-true': mainLayout}">
      <div class="header__logo">F<span>i</span><span>t</span>Body</div>
      <div class="header__text" v-if="!mainLayout">"A healthy mind is in a healthy body"</div>
      <ul v-if="mainLayout" class="header__ul">
        <li><a href="#">Home</a></li>
        <li><a href="#">Some</a></li>
        <li><a href="#" @click="$store.commit('auth/logout')">Exit</a></li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  data () {
    return {}
  },
  computed: {
    mainLayout () {
      return this.$route.meta.layout === 'main'
    }
  }
}
</script>
<style scoped lang="scss">
.header {
  width: 100%;
  margin: 0 0 1rem 0;
  &__wrapper {
    text-align: center;
    padding: 1rem 0 0 0;
  }
  &__wrapper-true {
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
    text-align: center;
    padding: 1rem 0 0 0;
  }
  &__ul {
    display: flex;
    li {
      list-style: none;
      margin: 0 1rem;
    }
  }

  &__logo {
    font-family: "Jost", sans-serif;
    font-size: 1.8rem;
    letter-spacing: .2rem;
    font-weight: 700;

    span:nth-child(1) {
      color: #fecb30;
    }

    span:nth-child(2) {
      color: #d1273f;
    }
  }
  &__text {
    font-family: "Quicksand", sans-serif;
    color: rgba(0, 0, 0, .6);
    letter-spacing: 1px;
  }
}
</style>
