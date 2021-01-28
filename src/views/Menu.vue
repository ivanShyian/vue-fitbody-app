<template>
  <AppLoader v-if="loading"/>
  <div class="menu container" v-else-if="hasData">
    <div class="menu__wrapper-bar">
      <the-logo :gender="userData.gender"></the-logo>
      <div class="card menu-bar">
        <h2>{{ userData.name }}{{getCounter}}</h2>
      </div>
    </div>
    <div class="menu__wrapper-main">
      <menu-nav :tabs="tabList"
                :id="getCounter"
      ></menu-nav>
      <menu-main>
        <component :is="'app-' + currentTab"></component>
      </menu-main>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import TheLogo from '@/components/menu/TheLogo'
import AppLoader from '@/components/ui/AppLoader'
import MenuMain from '@/components/menu/MenuMain'
import MenuNav from '@/components/menu/MenuNav'
import AppCalories from '@/components/AppCalories'
import AppMain from '@/components/AppMain'

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
    ...mapGetters('menuList', ['tabList', 'currentTab', 'getCounter']),
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
    AppMain,
    AppCalories,
    AppLoader,
    TheLogo,
    MenuMain,
    MenuNav
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
}

.menu-bar {
  flex: 1 0 auto;
  border-radius: 1rem;
  color: #2d203a;
  border: 0;
  background-color: #abbd81;
  box-shadow: -1px 7px 39px -16px rgba(0, 0, 0, 0.75);

}

.menu__wrapper-main {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #e1b16a;
  border-radius: 1rem;
  box-shadow: -1px 7px 39px -16px rgba(0, 0, 0, 0.75);
}

</style>
