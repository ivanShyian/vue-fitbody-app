<template>
  <div class="app__main">
  </div>
</template>

<script>
export default {
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
  width: 100%;

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
      font-family: "Quicksand", sans-serif;
      max-width: 30rem;
      font-size: 1.5rem;
    }

    span:first-child {
      font-size: 1.8rem;
      color: #000063;
      margin-bottom: 1rem;
    }

    span:last-child {
      color: orangered;
    }
  }
.main-second {
  font-family: "Quicksand", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h5 {
    font-size: 1.8rem;
    color: #000063;
    margin-bottom: 1rem;
  }
  span {
    font-size: 1.3rem;
    color: #ba5800;
    margin-bottom: 1.5rem;
  }
  button {
    max-width: 20%;
  }
}
}
</style>
