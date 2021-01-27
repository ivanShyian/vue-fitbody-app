<template>
  <AppLoader v-if="loading"/>
  <div class="menu container" v-else-if="hasData">
    <div class="menu__wrapper-bar">
      <the-logo :gender="userData.gender"></the-logo>
      <div class="card menu-bar">
        <h2>{{ userData.name }}</h2>
      </div>
    </div>
    <div class="menu__wrapper-main">
      <menu-nav></menu-nav>
      <div class="menu__gen card flex">
        <component :is="'app-calories'"></component>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import TheLogo from '@/components/menu/TheLogo'
import AppLoader from '@/components/ui/AppLoader'
import MenuNav from '@/components/menu/MenuNav'
import AppCalories from '@/components/calories/AppCalories'

export default {
  async mounted() {
    this.loading = true
    await this.$store.dispatch('load')
    this.loading = false
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters(['userData', 'isEmpty']),
    isLoading() {
      return this.loading
    },
    hasData() {
      return !this.isLoading && !this.isEmpty
    }
  },
  updated() {
  },
  components: {
    AppLoader,
    TheLogo,
    MenuNav,
    AppCalories
  }
}
</script>

<style scoped lang="scss">
div.menu {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-radius: 1rem;
  padding: 1rem;
}

.menu__wrapper-bar {
  border-radius: 1rem;
  margin-bottom: 1rem;
  display: flex;
  height: 25%;
  width: 100%;
  background-color: #abbd81;
  box-shadow: -1px 7px 39px -16px rgba(0, 0, 0, 0.75);
}

.menu-bar {
  flex: 1 0 auto;
  border-radius: 1rem;
  color: #2d203a;
  border: 0;
}

.menu__wrapper-main {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #e1b16a;
  border-radius: 1rem;
  box-shadow: -1px 7px 39px -16px rgba(0, 0, 0, 0.75);
}

.menu__gen.card.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 90%;
  height: auto;
  margin: .5rem .5rem .5rem 0;
  background-color: #ffd69f;

  h1 {
    color: rgba(45, 32, 58, .8);
    text-align: center;
    max-width: 25rem;
  }
}

</style>
