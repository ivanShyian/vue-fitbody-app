<template>
  <div class="form-group col-md-12">
    <div>
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
      <small>Minimum 6 symbols...</small>
    </div>
    <button class="btn btn-primary">Next</button>
  </div>
</template>

<style lang="scss" scoped>
@import "../../template";
@include buttonStyling
div.form-group.col-md-12 div {
  margin: 0 0 1rem 0;
  label {
    @include registerTitle
  }
  small {
    color: rgba(0, 0, 0, .5);
    letter-spacing: 1px;
  }
}
</style>
