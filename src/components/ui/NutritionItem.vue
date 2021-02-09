<template>
  <div :class="['nutrition-daily__item', {'active-item': active}]">
    <div class="nutrition-daily__item-upper">
      <p>{{ nutrition.label }}</p>
      <div>
        <span><strong>{{ showIndicators.kcal || '0' }}</strong></span>
        <a href="#">
          <i class="fas fa-plus"
             @click.prevent="$emit('add-dish', nutrition.name)"
          ></i>
        </a>
      </div>
    </div>
    <div class="nutrition-daily__item-bottom">
      <div class="nutrition-daily__item-bottom-inner">
        <div class="nutrition-daily__item-bottom-results">
          <p>{{ showIndicators.procnt || '0' }}</p>
          <p>{{ showIndicators.fat || '0' }}</p>
          <p>{{ showIndicators.chocs || '0' }}</p>
        </div>
        <div class="nutrition-daily__item-bottom-list" v-if="active">
          <nutrition-dish-item v-for="(dish, idx) in currentDishes"
                               :key="dish.unicId"
                               :name="dish.label"
                               :idx="idx"
                               :item="dish"
          ></nutrition-dish-item>
        </div>
      </div>
      <div class="nutrition-daily__item-bottom-arrow">
        <i class="fas fa-chevron-down"
           style="cursor: pointer"
           @click.prevent="$emit('set-active', nutrition.id)"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import NutritionDishItem from '@/components/ui/NutritionDishItem'
export default {
  emits: {
    'add-dish': Function,
    'set-active': Function
  },
  props: {
    active: Boolean,
    nutrition: Object,
    food: {
      type: Object,
      required: false
    }
  },
  computed: {
    currentDishes() {
      return this.food ? Object.keys(this.food).map(el => this.food[el]) : null
    },
    calcData() {
      const result = {
        FAT: 0,
        CHOCDF: 0,
        PROCNT: 0,
        ENERC_KCAL: 0
      }
      if (this.currentDishes) {
        this.currentDishes.map(el => {
          return el.nutrients
        }).reduce((acc, curr) => {
          if (curr.FAT) {
            result.FAT += curr.FAT
          }
          if (curr.CHOCDF) {
            result.CHOCDF += curr.FAT
          }
          if (curr.PROCNT) {
            result.PROCNT += curr.PROCNT
          }
          if (curr.ENERC_KCAL) {
            result.ENERC_KCAL += curr.FAT
          }
          return acc
        }, 0)
      }
      return result
    },
    showIndicators() {
      const data = {}
      Object.keys(this.calcData).map(el => {
        data[el] = this.calcData[el].toFixed(2)
      })
      return this.calcData ? data : null
    }
  },
  methods: {
  },
  components: { NutritionDishItem }
}
</script>

<style scoped lang="scss">
.nutrition-daily {
  &__item {
    width: 90%;
    display: flex;
    flex-direction: column;
    font-family: "Quicksand", sans-serif;
    color: #467048;
    margin: 0 0 1rem 0;
    border-radius: .5rem;
    overflow: hidden;
    flex: 1 0 20%;
  }

  &__item-upper {
    display: flex;
    background-color: #dbdbdb;
    flex: 0 1 auto;
    padding: .5rem 1rem 0 .5rem;

    p {
      flex: 0 0 85%;
      font-weight: 700;
      font-size: 1.2rem;
    }

    div {
      display: flex;
      flex: 0 0 15%;
      justify-content: space-between;
      width: 100%;

      span {
        font-size: 1.1rem;
      }

      a i {
        font-size: 1.5rem;
        color: #17c271;
      }
    }
  }

  &__item-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex: 1 0 60%;
    padding: .5rem 1rem;
    background-color: rgb(171, 189, 129);
  }

  &__item-bottom-inner {
    flex: 1 0 95%;
    width: 100%;
  }

  &__item-bottom-results {
    display: flex;
    justify-content: space-around;
    max-width: 79%;

    p {
      font-family: "Jost", sans-serif;
      color: #5e3200;
    }
  }

  &__item-bottom-arrow {
    display: flex;
    flex: 0 1 5%;
    font-size: 1.5rem;
    justify-content: flex-end;
    color: #e2dfd6;
  }

  &__snacks {
    margin: 0;
  }
}

.nutrition-daily__item.active-item {
}

.nutrition-daily__item.active-item .nutrition-daily__item-bottom {
  div:first-child {
  }

  div:last-child {
    align-items: flex-end;

    i {
      transform: rotate(180deg);
    }
  }
}
.nutrition-daily__item-bottom-list {
  div {
    border-top: 2px solid rgba(0, 0, 0, .2);
  }
}
</style>
