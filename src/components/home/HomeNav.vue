<template>
  <nav class="menu-nav">
    <ul>
      <li class="card"
          v-for="(tab, idx) in tabs"
          :class="['', {active: id === tab.id}]"
          :key="tab.id">
        <button
           @click="navigate(idx)"
           :disabled="firstLoading"
        >{{ tab.name }}</button>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  props: ['tabs', 'id', 'firstLoading'],
  methods: {
    navigate(idx) {
      if (!this.firstLoading) {
        this.$store.commit('menuList/setActiveTab', idx)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.menu-nav {
  flex: 0 0 15%;
  margin: .5rem 0 0 0;
  overflow: hidden;
  ul {
    margin: 0;

    li.card {
      border-radius: 0;
      padding: 0;
      width: 100%;
      list-style: none;
      margin: 0;
      z-index: 10;
      border: 0;
      border-bottom: 1px solid rgba(45, 32, 58, .2);

      button {
        background-color: transparent;
        border: 0;
        font-family: "Quicksand", sans-serif;
        font-size: 1.2rem;
        padding: .7em;
        font-weight: 700;
        color: rgba(45, 32, 58, .9);
      }
      button:disabled {
        cursor: not-allowed;
        color: rgba(45, 32, 58, .4);
        background-color: rgba(255, 255, 255, 0.2);
      }
      button:focus {
        outline: none;
      }
      button:hover {
        text-decoration: none;
      }
    }
    li.card.active {
      background-color: rgba(248, 248, 199, 0.7);
      width: 110%;
    }
  }
}
</style>
