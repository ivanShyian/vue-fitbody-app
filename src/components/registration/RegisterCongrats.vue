<template>
  <div>
    <h2>Congratulation!</h2>
    <h3>You have registered successfully</h3>
    <p>And the most coolest thing that you started a new life! With new body!</p>
    <hr/>
    <router-link :to="{name: 'login'}" v-slot="{navigate}">
      <button class="btn" @click="navigate">To login page</button>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
@import "../../template";
@include buttonStyling;
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  h2, h3, p {
    margin: 0 0 1rem 0;
  }
  a {
    width: 15rem;
    button.btn {
      width: 100%;
    }
  }
}
</style>
