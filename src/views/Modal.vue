<template>
  <div class="modal">
    <div class="modal__wrapper card">
      <form @keyup.prevent.enter @submit.prevent="send">
        <h4>Welcome!</h4>
        <div class="modal__text" v-if="counter === 0">
          <span>Before start you should fill out these fields</span>
          <small>Sorry, but you can't cancel this procedure. It's important data for us</small>
        </div>
        <component :is="'calories-' + tabs[counter]"
        ></component>
        <button class="btn"
                v-if="counter + 1 !== tabs.length"
                @click.prevent="counter++"
        >Next</button>
        <button class="btn"
                type="submit"
                v-if="counter + 1 === tabs.length"
                :disabled="noValue"
        >Finish</button>
      </form>
    </div>
  </div>
</template>

<script>
import CaloriesParams from '@/components/calories/CaloriesParams'
import CaloriesMode from '@/components/calories/CaloriesMode'

export default {
  data() {
    return {
      counter: 0,
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
      const id = Date.now().toString()
      const params = {
        weight: this.$store.getters['calories/weight'],
        height: this.$store.getters['calories/height']
      }
      const goal = {
        mode: this.$store.getters['calories/mode'],
        weight: this.$store.getters['calories/weight'],
        currentWeight: this.$store.getters['calories/weight'],
        'desired-weight': this.$store.getters['calories/desiredWeight'],
        finished: false
      }
      await this.$store.dispatch('update', params)
      await this.$store.dispatch('goals/updateGoal', { goal, id })
      this.$store.commit('calories/clear')
    }
  },
  components: { CaloriesParams, CaloriesMode }
}
</script>

<style scoped lang="scss">
@import "../template";

@include buttonStyling;
div.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .4);
  z-index: 200;

  &__wrapper.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 50%;
    background-color: #eaeaea;
    color: black;
    height: 50%;
    overflow-y: hidden;
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
  }

  &__text {
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

  &__params {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  button.btn {
    margin-top: 1rem;
    @media (max-height: 700px) {
      margin-top: .5rem;
    }
  }
}
</style>
