<template>
  <div>
    <h3>Sorry, page not found :(</h3>
    <router-link to="/" v-slot="{navigate}">
      <button class="btn" @click="navigate">To home page</button>
    </router-link>
  </div>
</template>
<style scoped lang="scss">
@import "../template";
@include buttonStyling
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin: 0 0 2rem 0;
  }
  a {
    text-align: center;
    width: 15rem;
    button {
      width: 100%;
      background-color: transparent;
      border: 1px solid #2d203a;
    }
    button:hover {
      background-color: #dbdbdb;
      color: black
    }
  }
}
</style>
