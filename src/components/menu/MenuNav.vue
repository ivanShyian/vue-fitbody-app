<template>
  <nav class="menu-nav">
    <ul>
      <li class="card" v-for="tab in tabList"
          :key="tab.id">
        <a href="#"
        >{{tab.name}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters('menuList', ['tabList'])
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
      margin: 1rem 0;
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

    li:first-child {
      margin: 0 0 1rem 0;
    }

    li:last-child {
      margin: 1rem 0 0 0;
    }
  }
}
</style>
