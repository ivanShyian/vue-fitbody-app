<template>
  <div class="nutrition-dish__item">
    <p class="nutrition-dish__item-number">{{ idx + 1 || '1' }}</p>
    <div class="nutrition-dish__item-wrapper">
      <div class="nutrition-dish__item-data">
        <span>{{ nutrients ? nutrients.PROCNT.toFixed(2) : 25 }}</span>
        <span>{{ nutrients ? nutrients.FAT.toFixed(2) : 25 }}</span>
        <span>{{ nutrients ? nutrients.CHOCDF.toFixed(2) : 25 }}</span>
        <span>{{ nutrients ? nutrients.ENERC_KCAL.toFixed(2) : 25 }}</span>
      </div>
      <p>
        <span>{{ item ? item.food.label : 'Name' }}</span>
        <span>{{ measures ? measures : 'No data' }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: false,
      default: String
    },
    idx: {
      type: Number,
      required: false,
      default: Number
    },
    item: {
      type: Object,
      required: false,
      default: Object
    }
  },
  data() {
    return {
    }
  },
  computed: {
    nutrients() {
      return this.item.food.nutrients
    },
    measures() {
      return this.item.measures.filter(el => el.label === 'Serving' || el.label === 'Whole' ? el : null)
    }
  }
}
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
