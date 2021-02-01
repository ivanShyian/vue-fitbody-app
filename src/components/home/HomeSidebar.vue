<template>
  <div class="home__sidebar card">
    <p>Calories limit</p>
    <div class="home__sidebar-sc sidebar-sc">
      <span class="sidebar-sc__max">2566ccal</span>
      <span class="sidebar-sc__start">0ccal</span>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.home__sidebar {
  flex: 1 0 10%;
  background-color: #abbd81;
  margin: 1rem 1rem 1rem 0;
  box-shadow: -1px 7px 39px -16px rgba(0, 0, 0, 0.75);
  border-radius: 1rem;
  border: 0;
  height: auto;
  p {
    padding: 3px 0 0 0;
    text-align: center;
    font-size: 1.4rem;
    font-family: "Jost", sans-serif;
  }
}
.home__sidebar-sc {
  padding: 1rem 0;
  border-top: 2px solid rgba(0, 0, 0, .1);
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sidebar-sc__max,
.sidebar-sc__start {
  font-size: 1.2rem;
}
</style>
