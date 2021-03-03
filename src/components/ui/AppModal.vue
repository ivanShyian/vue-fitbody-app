<template>
  <div class="modal">
    <div class="modal__wrapper card">
      <the-greeting/>
    </div>
  </div>
</template>

<script>
import TheGreeting from '@/components/TheGreeting'
export default {
  components: {
    TheGreeting
  }
}
</script>

<style scoped lang="scss">
@import "../../template";

@include buttonStyling;
div.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .4);
  z-index: 200;

  &__wrapper.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 50%;
    background-color: #eaeaea;
    color: black;
    height: 50%;
    overflow-y: hidden;
  }
}
</style>
