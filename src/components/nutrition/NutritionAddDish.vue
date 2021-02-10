<template>
  <button class="btn prev-btn"
          @click="$emit('step-back')"
  >&#8592; Step back</button>
  <div class="add-dish">
    <h4>Add dish that you ate on {{ title }}</h4>
    <div class="add-dish__indicators">
      <span>Proteins</span>
      <span>Fats</span>
      <span>Carbs</span>
      <span>Calories</span>
    </div>
    <form @submit.prevent="searchDish">
      <div>
        <input id="dish"
               type="text"
               v-model="query"
               placeholder="Enter here...">
        <button type="submit">Search</button>
      </div>
    </form>
    <app-loader v-if="loading"></app-loader>
    <span class="add-dish__no-food" v-else-if="isEmpty && !loading"
    >No food matching your request :(</span>
    <ul v-else-if="resultList && !loading">
      <li v-for="(item, idx) in resultList" :key="item.unicId">
        <nutrition-dish-item :idx="idx"
                             :name="item.label"
                             :measure="item.gram"
                             :nutrients="item.nutrients"
                             :status="status"
                             :itemId="item.unicId"
                             :item="item"
                             @add-to-ration="addToRation"
        ></nutrition-dish-item>
      </li>
    </ul>
  </div>
</template>

<script>
import NutritionDishItem from '@/components/ui/NutritionDishItem'
import AppLoader from '@/components/ui/AppLoader'

export default {
  emits: {
    'step-back': Function
  },
  props: {
    title: String,
    status: Boolean
  },
  data() {
    return {
      query: '',
      resultList: null,
      loading: false
    }
  },
  computed: {
    isEmpty() {
      return this.$store.getters['edamam/empty']
    }
  },
  methods: {
    async searchDish() {
      if (this.query.length && isNaN(this.query)) {
        this.loading = true
        await this.$store.dispatch('edamam/searchEdamam', this.query)
        this.resultList = await this.$store.getters['edamam/result']
        this.query = ''
        this.loading = false
      } else {
        this.$store.dispatch('alert/setAlert', {
          value: 'Enter correct query please',
          type: 'warning'
        })
      }
    },
    addToRation(item) {
      this.$store.dispatch('nutrition/updateNutrition', { source: this.title, item })
    }
  },
  components: { AppLoader, NutritionDishItem }
}
</script>

<style scoped lang="scss">
@import "../../template";

@include inputStyling();
@include buttonStyling;
.prev-btn {
  padding: 0;
  width: 25%;
  background: transparent;
}
.prev-btn:hover {
  background: transparent;
  color: #74706c;
}
.prev-btn:focus {
  box-shadow: none;
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
.add-dish__no-food {
  margin-top: 2rem;
  color: rgba(0, 0, 0, .7);
  font-family: "Jost", sans-serif;
  font-size: 1.5rem;
}
</style>
