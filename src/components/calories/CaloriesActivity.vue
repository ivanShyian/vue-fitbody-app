<template>
  <div class="calories__activity">
      <span>Choose your daily activity</span>
      <div class="btn-group">
        <button type="button"
                :class="['btn', {'active': idx === dcounter}]"
                @click="$store.commit('calories/setDaily', idx)"
                v-for="(btn, idx) in dbuttons"
                :key="btn.id">{{ btn.name }} activity
        </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dbuttons', 'dcounter']
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
  margin-bottom: 3rem;
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
