<template>
  <div class="card home-bar">
    <div class="home-bar__upper bar-upper">
      <div class="bar-upper__nickname">
        <h2>{{userData.name}}</h2>
      </div>
      <div class="bar-upper__status">
        <span>Change status</span>
        <i class="fas fa-edit"></i>
      </div>
    </div>
    <div class="home-bar__bottom bar-bottom">
      <div class="bar-bottom__pointers">
        <span class="bar-bottom__pointers-title">ROAD</span>
        <div class="bar-bottom__pointers-inner" v-if="currentGoal">
          <span><small>FROM </small>{{currentGoal.weight}}kg</span>
          <span><small>TO </small>{{currentGoal['desired-weight']}}kg</span>
        </div>
      </div>
      <div class="bar-bottom__headway-line" v-if="currentGoal">
        <i class="fas fa-flag"></i>
        <span>{{ progressValue === 100 ? 'Done!' : progressValue + '%' }}</span>
        <i class="fas fa-flag-checkered"></i>
        <div class="bar-bottom__headway-line_active" :style="{'width': progressValue + '%'}"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['userData']),
    ...mapGetters('goals', ['goals', 'progressValue', 'currentGoal'])
  }
}
</script>

<style scoped lang="scss">
.home-bar {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  border-radius: 1rem;
  color: #2d203a;
  border: 0;
  background-color: #abbd81;
  box-shadow: -1px 7px 39px -16px rgba(0, 0, 0, 0.75);
  margin: .5rem 0 .5rem .5rem;
  padding: 1rem;
  overflow-y: hidden;
}

.bar-upper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0 1 35%;
  border-bottom: 2px solid rgba(0, 0, 0, .1);

  h2 {
    @media (max-height: 700px) {
      font-size: 1.3rem;
    }
  }

  &__status {
    font-size: 1.2rem;

    i {
      color: rgba(0, 0, 0, .5)
    }

    span {
      font-weight: 700;
      color: rgba(0, 0, 0, .5);
      font-size: .9rem;
      margin-right: .5rem;
      @media (max-height: 700px) {
        font-size: .7rem;
      }
    }
  }
}

.bar-bottom {
  flex: 0 0 65%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1rem;

  &__pointers {
    display: flex;
    flex-direction: column;

    span {
      font-family: "Quicksand", sans-serif;
    }
  }

  &__pointers-title {
    font-weight: 700;
    font-size: 1.1rem;
    color: rgba(0, 0, 0, .7);
    text-align: center;
    @media (max-height: 700px) {
      font-size: .8rem;
    }
  }

  &__pointers-inner {
    display: flex;
    justify-content: space-between;

    span {
      font-weight: 700;
      @media (max-height: 700px) {
        font-size: .8rem;
      }
    }

    small {
      font-size: .7rem;
      @media (max-height: 700px) {
        font-size: .6rem;
      }
    }
  }

  &__headway-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    position: relative;
    text-align: center;
    background-color: rgba(255, 255, 255, .1);
    border-radius: 1rem;
    @media (max-height: 700px) {
      font-size: .8rem;
    }

    span {
      z-index: 2;
      font-weight: 700;
    }

    i {
      z-index: 2;
    }

    &_active {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 1.5rem;
      background-color: rgba(100, 255, 100, .7);
      border-radius: 1rem;
      @media (max-height: 700px) {
        height: 1.1rem;
      }
    }
  }
}

</style>
