<template>
  <div class="app-nutrition__daily nutrition-daily">
    <nutrition-item v-for="nut in nutrition"
                    :key="nut.id"
                    :label="nut.label"
                    :nutrition="nut"
                    @set-active="toggleItem"
                    @add-dish="$emit('add-dish', $event)"
                    :active="activeItem === nut.id"
                    :food="food[nut.name]"
    >
    </nutrition-item>
  </div>
</template>

<script>
import NutritionItem from '@/components/nutrition/NutritionItem'
export default {
  emits: {
    'add-dish': {
      type: Function,
      required: false,
      default: Function
    }
  },
  props: {
    food: {
      type: Object,
      required: false
    }
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
  computed: {
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  &__item:last-child {
    margin: 0;
  }
}
</style>
