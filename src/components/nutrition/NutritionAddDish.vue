<template>
  <button class="btn prev-btn">Step back</button>
  <div class="add-dish">
    <h4>Add dish that you ate on {{ title }}</h4>
    <div class="add-dish__indicators">
      <span>Proteins</span>
      <span>Fats</span>
      <span>Carbs</span>
      <span>Calories</span>
    </div>
    <form>
      <div>
        <input id="dish"
               type="text"
               v-model="query"
               placeholder="Enter here...">
        <button @click.prevent="searchDish">Search</button>
      </div>
    </form>
    <ul v-if="result">
      <li v-for="(item, idx) in result" :key="item.food.foodId">
        <nutrition-dish-item :idx="idx" :item="item"></nutrition-dish-item>
      </li>
    </ul>
  </div>
</template>

<script>
import NutritionDishItem from '@/components/ui/NutritionDishItem'

export default {
  props: {
    title: String
  },
  data() {
    return {
      query: '',
      result: null
    }
  },
  methods: {
    async searchDish() {
      if (this.query.length && isNaN(this.query)) {
        await this.$store.dispatch('edamam/searchEdamam', this.query)
      } else {
        this.$store.dispatch('alert/setAlert', {
          value: 'Enter correct query please',
          type: 'warning'
        })
      }
    }
  },
  components: { NutritionDishItem }
}
</script>

<style scoped lang="scss">
@import "../../template";

@include inputStyling();
@include buttonStyling;
.prev-btn {
  padding: 0;
  width: 25%;
}
.add-dish {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  &__indicators {
    width: 90%;
    font-family: "Jost", sans-serif;
    display: flex;
    justify-content: space-around;
    color: rgba(42, 35, 58, .3);
    margin-right: -3rem;
    margin-bottom: .5rem;
  }
  h4 {
    color: #2d203a;
    font-family: "Quicksand", sans-serif;
    margin-bottom: .5rem;
  }

  form {
    width: 60%;
    text-align: center;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  button {
    flex: 1 0 25%;
    font-size: 1rem;
    padding: .15rem .2rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  input {
    flex: 0 1 75%;
    font-size: 1.1rem;
    text-align: left;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin: 0;
  }
  ul {
    width: 90%;
    margin-top: .5rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    li {
      width: 100%;
      padding: 0 1rem;
      margin: 0 auto;
      color: black;
      border-bottom: 1px solid rgba(0, 0, 0, .4);
      font-family: "Quicksand", sans-serif;
    }
  }
}
.nutrition-dish__item-wrapper:first-child {
  border-top: 0;
}
</style>
