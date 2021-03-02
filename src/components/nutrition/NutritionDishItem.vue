<template>
  <div class="nutrition-dish__item">
    <p class="nutrition-dish__item-number">{{ idx + 1 || '1' }}</p>
    <div class="nutrition-dish__item-wrapper">
      <div class="nutrition-dish__item-data">
        <span>{{ nutrient.PROCNT }}</span>
        <span>{{ nutrient.FAT }}</span>
        <span>{{ nutrient.CHOCDF }}</span>
        <span>{{ nutrient.ENERC_KCAL }}</span>
      </div>
      <p>
        <span>{{ name || 'Unnamed' }}</span>
        <span>{{ measure ? measure.portion : null }}</span>
        <span>{{ measure && measure.weight ? measure.weight.toFixed(2) + ' grams' : null }}</span>
      </p>
    </div>
    <button class="btn" v-if="status"
            :disabled="added"
            @click="addToRation(item)"
            :style="added ? 'color: blue; border-color: blue' : null"
    >{{ added ? 'Added' : 'Add' }}</button>
  </div>
</template>

<script>
export default {
  emits: {
    'add-to-ration': {
      type: Function,
      required: false
    }
  },
  props: {
    name: {
      type: String,
      required: false
    },
    idx: {
      type: Number,
      required: false
    },
    status: {
      type: Boolean,
      required: false
    },
    item: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      added: false
    }
  },
  methods: {
    addToRation(item) {
      this.$emit('add-to-ration', item)
      this.added = true
    }
  },
  computed: {
    measure() {
      return this.item.gram
    },
    nutrient() {
      const obj = {}
      Object.keys(this.item.nutrients).map(el => {
        obj[el] = this.item.nutrients[el].toFixed(2)
      })
      return obj || '0.00'
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

    span {
      text-align: center;
      display: block;
      flex: 0 0 33.33%
    }

    span:first-child {
      text-align: left;
    }
  }
}

button.btn {
  border: 2px solid rgba(0, 0, 0, .2);
  @media (max-width: 950px) {
    padding: .2rem;
  }
  @media (max-width: 800px) {
    padding: 0;
  }
}
</style>
