<template>
  <AppLoader v-if="loading"/>
  <div class="home container" v-else-if="hasData">
    <div class="home__wrapper">
      <div class="home__wrapper-bar">
        <home-logo :gender="userData.gender"></home-logo>
        <home-bar :uStatus="userStatus"></home-bar>
      </div>
      <div class="home__wrapper-main">
        <home-nav :tabs="tabList"
                  :id="getCounter"
        ></home-nav>
        <home-main>
          <component :is="'app-' + currentTab"></component>
        </home-main>
      </div>
    </div>
    <home-sidebar></home-sidebar>
    <teleport to="#app">
    <app-modal v-if="firstVisit"></app-modal>
    </teleport>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HomeLogo from '@/components/home/HomeLogo'
import HomeMain from '@/components/home/HomeMain'
import HomeNav from '@/components/home/HomeNav'
import HomeBar from '@/components/home/HomeBar'
import HomeSidebar from '@/components/home/HomeSidebar'
import AppLoader from '@/components/ui/AppLoader'
import AppCalories from '@/components/AppCalories'
import AppMain from '@/components/AppMain'
import AppNutrition from '@/components/AppNutrition'
import AppModal from '@/components/AppModal'
import AppWater from '@/components/AppWater'
import AppActivities from '@/components/AppActivities'

export default {
  async mounted() {
    this.loading = true
    await this.$store.dispatch('load')
    await this.$store.dispatch('nutrition/loadNutrition')
    this.loading = false
  },
  unmounted() {
    this.$store.commit('clearData')
    this.$store.commit('goals/clear')
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters(['userData', 'isEmpty', 'firstVisit']),
    ...mapGetters('menuList', ['tabList', 'currentTab', 'getCounter']),
    isLoading() {
      return this.loading
    },
    hasData() {
      return !this.isLoading && !this.isEmpty
    },
    userStatus() {
      return this.userData.userStatus ? this.userData.userStatus : 'Change Status...'
    }
  },
  components: {
    HomeBar,
    HomeSidebar,
    HomeLogo,
    HomeMain,
    HomeNav,
    AppModal,
    AppMain,
    AppCalories,
    AppLoader,
    AppNutrition,
    AppWater,
    AppActivities
  }
}
</script>

<style scoped lang="scss">
.home {
  display: flex;
  height: 100%;
}

.home__wrapper {
  flex: 1 0 87%;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 1rem;
}
.home__wrapper-bar {
  border-radius: 1rem;
  margin-bottom: 1rem;
  display: flex;
  height: 25%;
  width: 100%;
}

.home__wrapper-main {
  display: flex;
  width: 100%;
  height: 72%;
  background-color: #e1b16a;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px, rgba(0, 0, 0, 0.22) 0 10px 10px;
}

</style>
