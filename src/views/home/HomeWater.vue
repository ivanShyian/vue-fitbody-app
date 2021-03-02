<template>
  <div class="main__water">
    <h3>Water balance</h3>
    <span>0.250/2.5 liters</span>
<!--    <div>Cup cup cup</div>-->
    <form>
      <label for="water"></label>
      <input id="water" v-focus type="text" placeholder="Enter in liters...">
      <button>Update</button>
    </form>
  </div>
</template>

}
<script>
import focusDirective from '@/directives/focusDirective'
export default {
  directives: {
    focus: focusDirective
  }
}
</script>

<style scoped lang="scss">
@import "../../template";
@include buttonStyling;
@include inputStyling;
.main__water {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h3 {
    color: #000063;
    font-family: "Jost", sans-serif;
    font-size: 2rem;
  }
  span {
    font-family: "Jost", sans-serif;
    font-size: 1.5rem;
    color: #2d203a;
  }
  form {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5rem;
  }
}
</style>
