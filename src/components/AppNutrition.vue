<template>
  <div class="app-nutrition">
    <nutrition-add-dish v-if="newDish"
                        :title="title"
                        :status="newDish"
                        @step-back="newDish = false"
    ></nutrition-add-dish>
    <div class="app-nutrition__content" v-else>
      <nutrition-results></nutrition-results>
      <nutrition-daily
        @add-dish="addDish"
        :food="food"
      ></nutrition-daily>
    </div>
  </div>
</template>

<script>
import NutritionResults from '@/components/nutrition/NutritionResults'
import NutritionDaily from '@/components/nutrition/NutritionDaily'
import NutritionAddDish from '@/components/nutrition/NutritionAddDish'

export default {
  async mounted() {
    await this.$store.dispatch('nutrition/loadNutrition')
    this.food = await this.$store.getters['nutrition/nutrition']
  },
  data() {
    return {
      newDish: false,
      title: '',
      food: {}
    }
  },
  methods: {
    addDish(title) {
      this.title = title
      this.newDish = true
    }
  },
  components: {
    NutritionAddDish,
    NutritionDaily,
    NutritionResults
  }
}
</script>

<style scoped lang="scss">
.app-nutrition {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: auto;

  &__content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
}

.app-nutrition::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

.app-nutrition::-webkit-scrollbar {
  width: 10px;
  background-color: #F5F5F5;
  border-radius: 10px;
}

.app-nutrition::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #898989;
}
</style>
