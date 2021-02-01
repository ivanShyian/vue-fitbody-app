<template>
  <div class="main__indicators">
    <div class="main__indicators-left">
      <div class="main__indicators-weight">
        <span>Weight</span>
        <strong>{{ params.weight + ' kg' }}</strong>
      </div>
      <div class="main__indicators-height">
        <span>Height</span>
        <strong>{{ params.height + ' cm' }}</strong>
      </div>
    </div>
    <div class="main__indicators-right">
      <div class="main__indicators-online">
        <span>Days with assistant</span>
        <strong>1 day</strong>
      </div>
      <div class="main__indicators-mode">
        <span>Mode</span>
        <strong>Lose weight</strong>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['params'])
  }
}
</script>

<style scoped lang="scss">
.main__indicators {
  flex: 0 0 40%;
  display: flex;
  width: 100%;
}
.main__indicators-left,
.main__indicators-right{
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  flex: 0 0 50%;
  div {
    position: relative;
    width: 40%;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    span {
      display: block;
      font-family: "Jost", sans-serif;
      font-size: 1.1rem;
      letter-spacing: 1px;
      color: rgba(0, 0, 99, .7);
    }
    strong {
      font-family: "Quicksand", sans-serif;
      color: orangered;
      font-size: 1.3rem;
    }
  }
  div:after {
    position: absolute;
    top: 33%;
    left: 50%;
    content: '';
    width: 1px;
    height: 33%;
    border: 1px dashed rgba(0, 0, 0, .1);
  }
}
</style>
