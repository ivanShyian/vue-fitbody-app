<template>
  <div class="modal">
    <div class="modal__wrapper card">
      <h4>Welcome</h4>
      <span>It's your first visit fitBody application</span>
      <span>Before start for correct working you should fill out these fields</span>
      <small>Sorry, but you can't cancel this procedure. It's important data for us</small>
      <div class="calories__params">
        <span class="calories__params-title">Enter your values</span>
        <div>
          <div class="calories__params-height">
            <span>Your height in cm</span>
            <input type="text"
                   maxlength="3">
          </div>
          <div class="calories__params-weight">
            <span>Your weight in kg</span>
            <input type="text"
                   maxlength="3">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
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
    text-align: center;
    width: 50%;
    background-color: #eaeaea;
    color: black;
  }
}
</style>
