<template>
  <nav class="menu-nav">
    <ul>
      <li class="card"
          v-for="(tab, idx) in tabs"
          :class="['', {active: id === tab.id}]"
          :key="tab.id"
          @click="navigate(idx)">
        <a href="#"
        >{{ tab.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  props: ['tabs', 'id'],
  methods: {
    navigate(idx) {
      this.$store.commit('menuList/setActiveTab', idx)
    }
  }
}
</script>

<style scoped lang="scss">
.menu-nav {
  flex: 0 0 15%;
  margin: .5rem 0 0 0;
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
      background-color: transparent;
      border-bottom: 1px solid rgba(45, 32, 58, .2);

      a {
        font-family: "Quicksand", sans-serif;
        font-size: 1.2rem;
        padding: .7em;
        font-weight: 700;
        color: rgba(45, 32, 58, .9);
      }

      a:hover {
        text-decoration: none;
      }
    }
    li.card.active {
      background-color: #ffd69f;
      width: 110%;
    }

    li:first-child {
    }

    li:last-child {
    }
  }
}
</style>
