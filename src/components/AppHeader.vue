<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__logo">F<span>i</span><span>t</span>Body</div>
      <div class="header__text">"A healthy mind is in a healthy body"</div>
    </div>
  </header>
</template>
<style scoped lang="scss">
.header {
  width: 100%;
  margin: 0 0 1rem 0;

  &__wrapper {
    text-align: center;
    padding: 1rem 0 0 0;
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
