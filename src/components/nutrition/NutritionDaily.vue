<template>
  <div class="app-nutrition__daily nutrition-daily">
    <nutrition-item v-for="nut in nutrition"
                    :key="nut.id"
                    :label="nut.label"
                    @click="toggleItem(nut.id)"
                    :active="activeItem === nut.id"
    >
      Some Component
    </nutrition-item>
  </div>
</template>

<script>
import NutritionItem from '@/components/ui/NutritionItem'
export default {
  emits: {
  },
  data() {
    return {
      activeItem: null,
      nutrition: [
        { id: 0, name: 'breakfast', label: 'Breakfast' },
        { id: 1, name: 'lunch', label: 'Lunch' },
        { id: 2, name: 'dinner', label: 'Dinner' },
        { id: 3, name: 'snacks', label: 'Snacks' }
      ]
    }
  },
  methods: {
    toggleItem(idx) {
      if (idx === this.activeItem) {
        this.activeItem = null
      } else {
        this.activeItem = idx
      }
    }
  },
  components: { NutritionItem }
}
</script>

<style scoped lang="scss">
.nutrition-daily {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 0 75%;
  &__item:last-child {
    margin: 0;
  }
}
</style>
