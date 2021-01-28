<template>
  <div class="calories">
    <calories-mode :buttons="dailyButtons"
                   :counter="modeCounter"
    ></calories-mode>
    <button class="btn next">Next step</button>
  </div>
</template>
<script>
import CaloriesMode from '@/components/calories/CaloriesMode'
import { mapGetters } from 'vuex'
export default {
  components: { CaloriesMode },
  data() {
    return {}
  },
  mounted() {
    this.$store.commit('calories/setAge')
    this.$store.commit('calories/setGender')
  },
  computed: {
    ...mapGetters('calories', [
      'modeButtons', 'dailyButtons',
      'dailyCounter', 'modeCounter'
    ])
  },
  methods: {
    modeButton(idx, value) {
      if (value === 'mode') {
        this.currentMode = idx
      } else {
        this.currentDaily = idx
      }
    },
    calculateResult() {
      if (!this.height || !this.weight || !this.age) {
        this.calculated = 'err'
      } else {
        const activity = this.calcModeAndDaily(this.dailyButtonList, this.currentDaily)
        const mode = this.calcModeAndDaily(this.modeButtonList, this.currentMode)
        this.calculated = (((10 * this.weight) + (6.25 * this.height) - (5 * this.age) + 5) * activity) + mode
        this.age = null
        this.height = null
        this.weight = null
      }
    },
    calcModeAndDaily(array, counter) {
      const res = array.filter(el => {
        return el.id === counter
      })
      return res[0].value
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
  button.btn.next {
    margin: 2rem 0 0 0;
  }
}

</style>
