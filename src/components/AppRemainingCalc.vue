<template>
  <div class="main__remaining-calculator remaining-calculator">
    <div class="remaining-calculator__mode">
      <span>Choose mode</span>
      <div class="btn-group remaining-calculator__group-mode">
        <button type="button"
                :class="['btn', {'active-btn': idx === currentMode}]"
                @click="modeButton(idx, 'mode')"
                v-for="(btn, idx) in modeButtonList"
                :key="btn.id"> {{ btn.name }}
        </button>
      </div>
      <div class="remaining-calculator__form-wrapper">
        <span>Enter your values</span>
        <form action="" class="remaining-calculator__form">
          <div class="remaining-calculator__form-first-group">
            <div>
              <span>Your height in cm</span>
              <input type="text" v-model="height">
            </div>
            <div>
              <span>Your weight in kg</span>
              <input type="text" v-model="weight">
            </div>
          </div>
        </form>
      </div>
      <div>
        <span class="remaining-calculator__daily-activity">Choose your daily activity</span>
        <div class="btn-group remaining-calculator__daily-activity-group">
          <button type="button"
                  :class="['btn', {'active-btn': idx === currentDaily}]"
                  @click="modeButton(idx)"
                  v-for="(btn, idx) in dailyButtonList"
                  :key="btn.id">{{ btn.name }} activity
          </button>
        </div>
      </div>
      <button class="btn remaining-calculator__button" @click="calculateResult">Calculate</button>
      <span>{{ showCalculatedRes }}</span>
    </div>
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
.remaining-calculator {
  width: 50%;
  margin: 0 auto;

  &__mode {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    box-shadow: -1px 7px 39px -16px rgba(0, 0, 0, 0.75);

    span {
      text-align: center;
      margin: 0 0 1rem 0;
    }
  }

}

.remaining-calculator__group-mode,
.remaining-calculator__daily-activity-group {
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, .2);
  margin: 0 0 2rem 0;
  transition: all ease 0.5s;
}

.remaining-calculator__group-mode .btn,
.remaining-calculator__daily-activity-group .btn {
  padding: .7rem 2rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  color: #2d203a;
}

.remaining-calculator__group-mode button:hover,
.remaining-calculator__daily-activity-group button:hover {
  background-color: #d1273f;
  color: rgba(255, 255, 227, 1);
}

.remaining-calculator__form-wrapper {
  margin: 0 0 2rem 0;
}

.remaining-calculator__form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.remaining-calculator__form-wrapper span {
  display: block;
  margin: 0 0 1rem 0;
}

.remaining-calculator__form span {
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  margin: 0;
}

.remaining-calculator__form-first-group {
  display: flex;
  margin: 0 0 3rem 0;
}

.remaining-calculator__form-first-group div:first-child {
  margin: 0 5rem 0 0;
}

.remaining-calculator__form-first-group div,
.remaining-calculator__form-second-group {
  width: 13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .7rem .5rem;
  border-radius: 1rem;
  background-color: rgba(255, 255, 227, .7);
  border: 1px solid rgba(0, 0, 0, .2);
}

.remaining-calculator__form-first-group input,
.remaining-calculator__form-second-group input {
  text-align: center;
  font-weight: 700;
  max-width: 5rem;
}

.remaining-calculator__daily-activity {
  display: flex;
  flex-direction: column;
}

.remaining-calculator__button {
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  background-color: #fecb30;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, .2);
  transition: all ease 0.5s;
}

.remaining-calculator__button:hover {
  background-color: #03ffaf;
  transition: all ease 0.5s;
}

.btn.active-btn {
  background-color: #d1273f;
  color: rgba(255, 255, 227, 1);
}
</style>
