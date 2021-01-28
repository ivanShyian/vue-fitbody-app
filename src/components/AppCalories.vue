<template>
  <div class="calories">
    <component :is="'calories-' + currentComponent"
               :mbuttons="modeButtons"
               :mcounter="modeCounter"
               :dbuttons="dailyButtons"
               :dcounter="dailyCounter"
    ></component>
    <div class="calories__btns" v-if="currentComponent !== 'result'">
      <button class="btn previous"
              @click="$store.commit('calories/prevStep')"
              v-if="!firstStep"
      >Step back
      </button>
      <button class="btn next"
              @click="next"
              :disabled="noValue"
      >{{ lastStep ? 'Calculate' : 'Next step' }}</button>
    </div>
  </div>
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
      'currentComponent',
      'firstStep', 'lastStep'
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
    justify-content: center;
    width: 100%;

    button.btn:first-child {
      margin-right: 2rem;
    }

    button.btn {
      max-width: 25%;
    }
  }
}

</style>
