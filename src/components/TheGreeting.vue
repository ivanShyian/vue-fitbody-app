<template>
  <form @keyup.prevent.enter @submit.prevent="send">
    <h4>Welcome!</h4>
    <div class="greeting__text" v-if="counter === 0">
      <span>Before start you should fill out these fields</span>
      <small>Sorry, but you can't cancel this procedure. It's important data for us</small>
    </div>
    <component :is="'calories-' + tabs[counter]"
               v-model:mode.number="mode"
               v-model:weight="userParams.weight"
               v-model:desired-weight="userParams['desired-weight']"
               v-model:height="userParams.height"
    ></component>
    <button class="btn"
            v-if="counter + 1 !== tabs.length"
            @click.prevent="counter++"
    >Next
    </button>
    <button class="btn"
            type="submit"
            v-if="counter + 1 === tabs.length"
            :disabled="noValue"
    >Finish
    </button>
  </form>
</template>

<script>
import CaloriesParams from '@/components/calories/CaloriesParams'
import CaloriesMode from '@/components/calories/CaloriesMode'

export default {
  data() {
    return {
      counter: 0,
      mode: 250,
      userParams: {
        height: '',
        weight: '',
        'desired-weight': ''
      },
      tabs: ['mode', 'params']
    }
  },
  computed: {
    noValue() {
      return this.$store.getters['calories/firstVisitInfo']
    }
  },
  methods: {
    async send() {
      const params = {
        weight: this.userParams.weight,
        height: this.userParams.height
      }
      const goals = {
        mode: this.mode,
        weight: this.userParams.weight,
        currentWeight: this.userParams.weight,
        'desired-weight': this.userParams['desired-weight'],
        finished: false
      }
      await this.$store.dispatch('goals/addGoal', goals)
      await this.$store.dispatch('updateParams', params)
      // alert
    }
  },
  components: {
    CaloriesParams,
    CaloriesMode
  }
}
</script>

<style scoped lang="scss">
@import "../template";
@include buttonStyling;
h4 {
  font-family: "Jost", sans-serif;
  font-size: 2.2rem;
  color: #000063;
  @media (max-height: 750px) {
    font-size: 1.7rem;
    margin: 0 0 .5rem 0;
  }
}

form {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.greeting__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  span {
    font-family: "Quicksand", sans-serif;
    font-size: 1.5rem;
  }

  small {
    font-weight: 400;
    font-family: "Jost", sans-serif;
    font-size: 1.2rem;
  }
}

button.btn {
  margin-top: 1rem;
  @media (max-height: 700px) {
    margin-top: .5rem;
  }
}
</style>
