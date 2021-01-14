<template>
  <div class="form-group">
    <label for="inputEmail4">Enter your email address...</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
  </div>
  <button type="submit" class="btn btn-primary">Next</button>
</template>

<style lang="scss" scoped>
@import "../../template";
@include buttonStyling
div.form-group {
  label {
    @include registerTitle
  }
}

</style>
