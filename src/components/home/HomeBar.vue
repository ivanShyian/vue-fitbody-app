<template>
  <div class="card home-bar">
    <div class="home-bar__upper bar-upper">
      <div class="bar-upper__nickname">
        <h2>{{ name }}</h2>
      </div>
      <div class="bar-upper__status">
        <span>Change status</span>
        <i class="fas fa-edit"></i>
      </div>
    </div>
    <div class="home-bar__bottom bar-bottom">
      <div class="bar-bottom__pointers">
        <span class="bar-bottom__pointers-title">ROAD</span>
        <div class="bar-bottom__pointers-inner">
          <span><small>FROM</small> 80kg</span>
          <span><small>TO</small> 100kg</span>
        </div>
      </div>
      <div class="bar-bottom__headway-line">
        <i class="fas fa-dragon"></i>
        <span>30%</span>
        <i class="fas fa-flag-checkered"></i>
        <div class="bar-bottom__headway-line_active" :style="{'width': '30%'}"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style scoped lang="scss">
.home-bar {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  border-radius: 1rem;
  color: #2d203a;
  border: 0;
  background-color: #abbd81;
  box-shadow: -1px 7px 39px -16px rgba(0, 0, 0, 0.75);
  margin: .5rem 0 .5rem .5rem;
}
.bar-upper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 40%;
  border-bottom: 2px solid rgba(0, 0, 0, .1);
  &__status {
    font-size: 1.2rem;
    i {
      color: rgba(0, 0, 0, .5)
    }
    span {
      font-weight: 700;
      color: rgba(0, 0, 0, .5);
      font-size: .9rem;
      margin-right: .5rem;
    }
  }
}
.bar-bottom {
  flex: 0 0 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1rem;
  &__pointers {
    display: flex;
    flex-direction: column;
    margin: .5rem 0 0 0;
    span {
      font-family: "Quicksand", sans-serif;
    }
  }
  &__pointers-title {
    font-weight: 700;
    font-size: 1.1rem;
    color: rgba(0, 0, 0, .7);
    text-align: center;
  }
  &__pointers-inner {
    display: flex;
    justify-content: space-between;
    span {
      font-weight: 700;
    }
    small {
      font-size: .7rem;
    }
  }
  &__headway-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    position: relative;
    text-align: center;
    background-color: rgba(255, 255, 255, .1);
    border-radius: 1rem;
    span {
      z-index: 2;
      font-weight: 700;
    }
    i {
      z-index: 2;
    }
    &_active {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 1.5rem;
      background-color: rgba(100, 255, 100, .7);
      border-radius: 1rem;
    }
  }
}

</style>
