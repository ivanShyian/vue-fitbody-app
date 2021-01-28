<template>
  <div class="calories">
    <h1>Here will be calories calculator</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  beforeRouteEnter(to, from, next) {
    if (to.meta.cantLogin) {
      next(false)
    } else {
      next()
    }
  },
  mounted() {
    this.$store.commit('calories/setAge')
  },
  computed: {
    showCalculatedRes() {
      if (this.calculated === 'err') {
        return null
      } else {
        return this.calculated
      }
    }
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

</style>
