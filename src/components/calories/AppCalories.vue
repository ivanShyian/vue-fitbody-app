<template>
  <div class="calories">
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentMode: 0,
      currentDaily: 0,
      height: null,
      weight: null,
      age: null,
      calculated: null,
      modeButtonList: [{
        id: 0,
        name: 'Gain weight',
        value: 250
      }, {
        id: 1,
        name: 'Lose weight',
        value: -100
      }, {
        id: 2,
        name: 'Keep weight',
        value: 75
      }],
      dailyButtonList: [
        {
          id: 0,
          name: 'Without',
          value: 1.2
        },
        {
          id: 1,
          name: 'Low',
          value: 1.375
        },
        {
          id: 2,
          name: 'Normal',
          value: 1.55
        },
        {
          id: 3,
          name: 'High',
          value: 1.725
        }
      ]
    }
  },
  beforeRouteEnter(to, from, next) {
    if (to.meta.cantLogin) {
      next(false)
    } else {
      next()
    }
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
