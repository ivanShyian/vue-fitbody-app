<template>
  <form class="calories" @keypress.enter.prevent @submit.prevent="updateData">
    <component :is="'calories-' + currentComponent"
    ></component>
    <div class="calories__btns" v-if="currentComponent !== 'result'">
      <button class="btn previous"
              @click.prevent="$store.commit('calories/prevStep')"
              v-if="!firstStep"
      >Step back
      </button>
      <button class="btn next"
              @click.prevent="next"
              :disabled="noValue"
      >{{ lastStep ? 'Calculate' : 'Next step' }}</button>
    </div>
  </form>
</template>
<script>
import CaloriesMode from '@/components/calories/CaloriesMode'
import CaloriesResult from '@/components/calories/CaloriesResult'
import CaloriesParams from '@/components/calories/CaloriesParams'
import CaloriesActivity from '@/components/calories/CaloriesActivity'
import { mapGetters } from 'vuex'

export default {
  components: {
    CaloriesActivity,
    CaloriesResult,
    CaloriesParams,
    CaloriesMode
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('calories', [
      'modeButtons', 'dailyButtons',
      'dailyCounter', 'modeCounter',
      'firstStep', 'lastStep',
      'currentComponent'
    ]),
    noValue() {
      return this.currentComponent === 'params' &&
        (this.$store.getters['calories/weight'] === '' || this.$store.getters['calories/height'] === '')
    }
  },
  methods: {
    next() {
      if (!this.lastStep) {
        this.$store.commit('calories/nextStep')
      } else {
        this.$store.commit('calories/nextStep')
        this.$store.dispatch('calories/calculate')
      }
    },
    async updateData() {
      const add = this.$store.getters['calories/getAdditionalData']
      await this.$store.dispatch('update', { ...add })
      this.$store.commit('calories/clear')
      this.$store.commit('menuList/setActiveTab', 0)
    }
  }
}
</script>
<style scoped lang="scss">
@import '../template';
.calories {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @include buttonStyling;

  &__btns {
    margin: 2rem 0 0 0;
    display: flex;
    justify-content: space-around;
    width: 40%;
    button.btn {
      max-width: 100%;
    }
  }
}
.calories-submit-btn {
  margin-top: 2rem;
  max-width: 15rem;
}

</style>
