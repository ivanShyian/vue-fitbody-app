<template>
  <div class="app__main">
    <div class="app__main-first main-first" v-if="firstLoading">
      <h4>Welcome!</h4>
      <div class="main-first__text">
        <span>It's your first visit fitBody application</span>
        <span>Before start, first thing that you need to do - calculate calories that you need</span>
      </div>
      <button class="btn" @click="$store.commit('menuList/setActiveTab', 3)">Click here</button>
    </div>
    <div class="app__main-wrapper" v-else>
      <h3>Welcome back!</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ['firstLoading']
}
</script>

<style scoped lang="scss">
@import "../template";

@include buttonStyling;
.app__main {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    font-family: "Quicksand", sans-serif;
    color: #2d203a;
    font-size: 2.5rem;
    margin: 0 0 1rem 0;
  }

  div.main-first__text {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    span {
      max-width: 30rem;
      font-size: 1.5rem;
    }

    span:first-child {
      color: #000063;
    }

    span:last-child {
      color: orangered;
    }
  }

  button.btn {

  }
}
</style>
