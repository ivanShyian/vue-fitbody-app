<template>
  <nav class="home-nav">
    <ul>
      <li class="card" v-for="tab in tabs" :key="tab.name">
        <router-link :to="'/home/' + tab.path"
                     v-slot="{ navigate }">
          <button class="btn" @click="navigate"
                  :disabled="tab.path === ''"
          >{{ tab.name }}
          </button>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      tabs: [
        { name: 'Main', path: 'main' },
        { name: 'Nutrition', path: 'nutrition' },
        { name: 'Activities', path: '' },
        { name: 'Calories', path: 'calories' },
        { name: 'Water', path: '' },
        { name: 'Statistic', path: '' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.home-nav {
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
        width: 100%;
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
    a.active {
      background-color: rgba(248, 248, 199, 0.7);
      width: 110%;
    }
  }
}
</style>
