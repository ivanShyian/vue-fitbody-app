<template>
  <div class="control-group">
    <span>Date of birth</span>
    <div class="d-flex">
    <div>
      <label for="dobday"></label>
      <input placeholder="Day" class="form-control" type="text" id="dobday" maxlength="2">
    </div>
    <div>
      <label for="dobmounth"></label>
      <select class="form-control" name="month" id="dobmounth">
        <option selected value="">Month</option>
        <option value="1">Jan</option>
        <option value="2">Feb</option>
        <option value="3">Mar</option>
        <option value="4">Apr</option>
        <option value="5">May</option>
        <option value="6">Jun</option>
        <option value="7">Jul</option>
        <option value="8">Aug</option>
        <option value="9">Sep</option>
        <option value="10">Oct</option>
        <option value="11">Nov</option>
        <option value="12">Dec</option>
      </select>
    </div>
    <div>
      <label for="dobyear"></label>
      <input placeholder="Year" class="form-control" type="text" id="dobyear" maxlength="4">
    </div>
    </div>
  </div>
  <button class="btn btn-primary">Next</button>
</template>

<style lang="scss" scoped>
@import "../../template";
@include buttonStyling
div.control-group {
  span {
    @include registerTitle
  }
  div {
    input,
    select {
      width: 7rem;
    }
    margin-bottom: 1rem;
  }
}
</style>
