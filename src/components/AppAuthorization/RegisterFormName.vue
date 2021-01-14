<template>
  <div class="form-group col-md-12">
    <div>
      <label for="inputName">What is your name?</label>
      <input type="text" class="form-control" id="inputName" placeholder="Name">
    </div>
    <button class="btn btn-primary">Next</button>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "../../template";
@include buttonStyling
div.form-group.col-md-12 div {
  margin: 0 0 1rem 0;
  label {
    @include registerTitle
  }
}
</style>
