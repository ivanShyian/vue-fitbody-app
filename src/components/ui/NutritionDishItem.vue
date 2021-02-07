<template>
  <div class="nutrition-dish__item">
    <p class="nutrition-dish__item-number">1</p>
    <div class="nutrition-dish__item-wrapper">
      <div class="nutrition-dish__item-data">
        <span>25</span>
        <span>25</span>
        <span>55</span>
        <span>355</span>
      </div>
      <p>
        <span>Banana with some cream</span>
        <span>100g</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.nutrition-dish__item {
  display: flex;
  align-items: center;
}
.nutrition-dish__item-number {
  font-size: 1.3rem;
  font-weight: 700;
}
.nutrition-dish__item-data {
  display: flex;
  justify-content: space-around;
  margin: 0 -3.5rem 0 0;
  @media (max-width: 1200px) {
    margin: 0 -3rem 0 0;
  }
  @media (max-width: 1100px) {
    margin: 0 -2.5rem 0 0;
  }
  @media (max-width: 890px) {
    margin: 0 -2rem 0 0;
  }
  @media (max-width: 680px) {
    margin: 0 -1.5rem 0 0;
  }
}
.nutrition-dish__item-wrapper {
  padding: .2rem 0;
  border-top: 1px solid rgba(0, 0, 0, .2);
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 -.5rem;
  p {
    display: flex;
    margin-left: 2rem;
    justify-content: space-between;
  }
}
</style>
