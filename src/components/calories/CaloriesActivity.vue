<template>
  <div class="calories__activity">
    <span>Choose your daily activity</span>
    <small>Also your daily activity effects of formula index</small>
    <div class="btn-group">
      <button type="button"
              v-for="btn in activityButtons"
              :class="['btn', {'active': activity === btn.value}]"
              @click="$emit('update:activity', btn.value)"
              :key="btn.id">{{ btn.name }} activity
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activity: {
      type: Number,
      required: true
    }
  },
  emits: {
    'update:activity': {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      activityButtons: [
        { id: 0, name: 'Without', value: 1.2 },
        { id: 1, name: 'Low', value: 1.375 },
        { id: 2, name: 'Normal', value: 1.55 },
        { id: 3, name: 'High', value: 1.725 }]
    }
  }
}
</script>

<style scoped lang="scss">
.calories__activity {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;

  span {
    color: #000063;
    font-family: "Jost", sans-serif;
    font-size: 1.7rem;
  }
  small {
    font-family: "Quicksand", sans-serif;
    color: rgba(0, 0, 0, .6);
    font-size: 1rem;
    margin: 1rem 0 3rem 0;
  }
  button.btn {
    border: 1px solid black;
    font-size: 1.2rem;
  }

  button.btn.active {
    background-color: #abbd81;
  }
}

.btn-group {
  width: 80%;
  margin: 0 auto;
}
</style>
