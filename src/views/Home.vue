<template>
  <AppLoader v-if="loading"/>
  <div class="menu container" v-else-if="hasData">
  <div class="menu__wrapper">
    <div class="menu__wrapper-bar">
      <the-logo :gender="userData.gender"></the-logo>
      <home-bar :name="userData.name"></home-bar>
    </div>
    <div class="menu__wrapper-main">
      <menu-nav :tabs="tabList"
                :id="getCounter"
                :firstLoading="firstLoading"
      ></menu-nav>
      <menu-main>
        <component :is="'app-' + currentTab" :firstLoading="firstLoading"></component>
      </menu-main>
    </div>
  </div>
    <div class="menu__sidebar card"></div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import TheLogo from '@/components/home/TheLogo'
import AppLoader from '@/components/ui/AppLoader'
import MenuMain from '@/components/home/HomeMain'
import MenuNav from '@/components/home/HomeNav'
import AppCalories from '@/components/AppCalories'
import AppMain from '@/components/AppMain'
import HomeBar from '@/components/home/HomeBar'

export default {
  async mounted() {
    this.loading = true
    await this.$store.dispatch('load')
    const data = await this.$store.getters.userData
    if (!data.weight || !data.height) {
      this.firstLoading = true
    }
    this.loading = false
  },
  data() {
    return {
      loading: false,
      firstLoading: false
    }
  },
  watch: {
    'userData.weight'(value) {
      console.log(value, 'there')
      this.firstLoading = false
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
    HomeBar,
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
.menu {
  display: flex;
  height: 100%;
}
.menu__wrapper {
  flex: 1 0 87%;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 1rem;
}
.menu__sidebar {
  flex: 1 0 10%;
  background-color: #abbd81;
  margin: 1rem 1rem 1rem 0;
  box-shadow: -1px 7px 39px -16px rgba(0, 0, 0, 0.75);
  border-radius: 1rem;
  border: 0;

}
.menu__wrapper-bar {
  border-radius: 1rem;
  margin-bottom: 1rem;
  display: flex;
  height: 25%;
  width: 100%;
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
