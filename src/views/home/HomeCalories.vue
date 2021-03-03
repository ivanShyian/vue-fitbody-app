<template>
  <form class="calories" @keypress.enter.prevent @submit.prevent="updateData">
    <component :is="'calories-' + currentComponent"
               v-model:mode.number="mode"
               v-model:activity.number="activity"
               v-model:weight="userParams.weight"
               v-model:height="userParams.height"
               v-model:desired-weight="userParams['desired-weight']"
               @restart="clear"
    ></component>
    <div class="calories__btns" v-if="currentComponent !== 'result'">
      <button class="btn previous"
              @click.prevent="prevStep"
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

export default {
  data() {
    return {
      mode: 250,
      activity: 1.2,
      userParams: {
        height: '',
        weight: '',
        'desired-weight': ''
      },
      counter: 0,
      caloriesComponents: ['mode', 'params', 'activity', 'result']
    }
  },
  computed: {
    noValue() {
      if (this.currentComponent === 'params') {
        return !this.userParams.height.length || !this.userParams.weight.length
      }
      return false
    },
    currentComponent() {
      return this.caloriesComponents[this.counter]
    },
    firstStep() {
      return this.counter === 0
    },
    lastStep() {
      return this.currentComponent === 'activity'
    },
    genderValue() {
      return this.$store.state.userData.gender === 'man' ? 5 : 161
    }
  },
  methods: {
    prevStep() {
      if (!this.firstStep) {
        this.counter--
      }
    },
    next() {
      if (!this.lastStep) {
        this.counter++
      } else {
        const result = this.calculate()
        this.$store.commit('calories/setResult', result)
        this.counter++
      }
    },
    clear() {
      this.userData = {
        weight: '',
        height: '',
        'desired-weight': ''
      }
      this.counter = 0
      this.mode = 250
      this.daily = 1.2
    },
    calculate() {
      const age = this.age()
      return (((10 * this.userParams.weight) + (6.25 * this.userParams.height) - (5 * age) + this.genderValue) * this.activity) + this.mode
    },
    age() {
      const birthDate = Object.keys(this.$store.state.userData.birth).map(el => this.$store.state.userData.birth[el])
      const month = birthDate[1]
      birthDate[1] = birthDate[0]
      birthDate[0] = month
      return Math.floor((Date.now() - Date.parse(birthDate.join('-'))) / 1000 / 60 / 60 / 24 / 365.25)
    },
    async updateData() {
      await this.$store.dispatch('calories/submitCalories')
      this.clear()
      this.$router.replace('/home/main')
    }
  },
  components: {
    CaloriesActivity,
    CaloriesResult,
    CaloriesParams,
    CaloriesMode
  }
}
</script>
<style scoped lang="scss">
@import '../../template';
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
    @media (max-width: 1400px) {
      width: 50%;
    }
    @media (max-width: 1100px) {
      width: 65%;
    }
    @media (max-width: 900px) {
      width: 90%;
    }
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
