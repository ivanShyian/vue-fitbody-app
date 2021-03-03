<template>
  <div class="main__actions-goal">
    <div class="main__actions-goal-new">
      <label for="newGoal"
             @click="toggleGoal('new')"
      >Add new goal</label>
      <div class="main__actions-goal-new-wrapper" v-if="openNew">
        <div class="main__actions-goal-new-mode">
          <span v-for="btn in modeButtons"
                :key="btn.id"
                @click="activeNewGoal = btn.value"
                :class='[{active: activeNewGoal === btn.value}]'
          >{{ btn.name }}</span>
        </div>
        <input v-model.number="desiredWeight"
               type="text"
               id="newGoal"
               maxlength="4"
               placeholder="Desired weight">
        <button class="btn"
                :disabled="!desiredWeight.length"
                @click="addNewGoal">Add</button>
      </div>
    </div>
    <div class="main__actions-goal-change">
      <label for="changeGoalFrom"
             @click="toggleGoal('change')"
      >Change active goal</label>
      <div v-if="openChange">
        <div>
          <label for="changeGoal"></label>
          <input id="changeGoalFrom"
                 type="text"
                 v-model="changeFrom"
                 placeholder="From...">
          <input id="changeGoal"
                 type="text"
                 v-model="changeTo"
                 placeholder="To...">
        </div>
        <button class="btn"
                :disabled="!changeFrom.length || !changeTo.length"
                @click="change"
        >Change</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import focusDirective from '@/directives/focusDirective'

export default {
  directives: {
    focus: focusDirective
  },
  data() {
    return {
      desiredWeight: '',
      openNew: false,
      openChange: false,
      activeNewGoal: 250,
      changeFrom: '',
      changeTo: '',
      changed: null
    }
  },
  computed: {
    ...mapState('calories', ['modeButtons'])
  },
  methods: {
    async addNewGoal() {
      const newItem = {
        mode: this.activeNewGoal,
        currentWeight: this.$store.getters.userData.params.weight,
        weight: this.$store.getters.userData.params.weight,
        finished: false,
        'desired-weight': this.desiredWeight
      }
      await this.$store.dispatch('goals/addGoal', newItem)
      this.activeNewGoal = 250
      this.desiredWeight = ''
    },
    toggleGoal(link) {
      if (link === 'new') {
        if (this.openNew === false) {
          this.openNew = true
          this.openChange = false
        } else {
          this.openNew = false
        }
      } else if (link === 'change') {
        if (this.openChange === false) {
          this.openChange = true
          this.openNew = false
        } else {
          this.openChange = false
        }
      }
    },
    async change() {
      this.changed = {
        ...this.$store.getters['goals/currentGoal'],
        weight: this.changeFrom,
        'desired-weight': this.changeTo
      }
      await this.$store.dispatch('goals/updateGoal', this.changed)
      this.changeFrom = ''
      this.changeTo = ''
      this.changed = null
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../template";

@include buttonStyling;
.main__actions-goal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  flex: 0 0 50%;

  label {
    display: block;
    position: relative;
    font-size: 1.3rem;
    font-family: "Jost", sans-serif;
    color: rgba(0, 0, 99, .7);
    border-radius: 2rem;
    cursor: pointer;
    @media (max-height: 750px) {
      font-size: 1.2rem;
    }
    @media (max-height: 660px) {
      margin: 0;
      padding: .1rem .4rem;
    }
  }

  input {
    max-width: 50%;
    border-radius: 2rem;
    border: 1px solid rgba(0, 0, 0, .2);
    text-align: center;
    margin-bottom: 1rem;
    @media (max-height: 750px) {
      margin-bottom: .5rem;
    }
  }
  input:focus {
    color: #495057;
    background-color: #fff;
    border-color: #f4ad94;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(233, 84, 32, .2);
  }

  button {
    padding: 0;
    max-width: 35%;
    @media (max-height: 750px) {
      font-size: .9rem;
    }
  }
}
.main__actions-goal-new {
  margin-bottom: 1rem;
  @media (max-height: 750px) {
    margin-bottom: .5rem;
  }
}
.main__actions-goal-new,
.main__actions-goal-change {
  display: flex;
  flex-direction: column;
}

.main__actions-goal-new-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
}

.main__actions-goal-new-mode {
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: block;
    padding: .3rem .5rem;
    margin-bottom: 1rem;
    color: black;
    border: 1px solid rgba(0, 0, 0, .4);
    cursor: pointer;
    @media (max-height: 750px) {
      margin-bottom: .5rem;
      padding: .1rem .4rem;
    }
  }
  span.active {
    background-color: rgba(28, 241, 28, 0.7);
    color: #1d0055;
  }
  span:last-child {
    border-bottom-right-radius: .5rem;
    border-top-right-radius: .5rem;
    border-left: 0;
  }

  span:first-child {
    border-bottom-left-radius: .5rem;
    border-top-left-radius: .5rem;
    border-right: 0;
  }
}

.main__actions-goal-change {
  input:last-child {
    margin-left: 1rem;
  }
  input {
    max-width: 25%;
  }
}

</style>
