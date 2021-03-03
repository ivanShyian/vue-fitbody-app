<template>
  <AppLoader v-if="loading"/>
  <div class="home container" v-else-if="hasData">
    <div class="home__wrapper">
      <div class="home__wrapper-bar">
        <home-logo :gender="userData.gender"></home-logo>
        <home-bar :uStatus="userStatus"></home-bar>
      </div>
      <div class="home__wrapper-main">
        <home-nav></home-nav>
        <div class="home__main-wrapper card">
            <router-view></router-view>
        </div>
      </div>
    </div>
    <home-sidebar></home-sidebar>
    <teleport to="body">
      <app-modal v-if="firstVisit"></app-modal>
    </teleport>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HomeLogo from '@/components/home/HomeLogo'
import HomeNav from '@/components/home/HomeNav'
import HomeBar from '@/components/home/HomeBar'
import HomeSidebar from '@/components/home/HomeSidebar'
import AppModal from '@/components/ui/AppModal'
import AppLoader from '@/components/ui/AppLoader'

export default {
  async mounted() {
    this.loading = true
    await this.$store.dispatch('load')
    await this.$store.dispatch('goals/loadGoals')
    await this.$store.dispatch('nutrition/loadNutrition')
    this.loading = false
  },
  unmounted() {
    this.$store.commit('clearData')
    this.$store.commit('goals/clear')
    this.$store.commit('nutrition/clearNutrition')
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters(['userData', 'isEmpty', 'firstVisit']),
    hasData() {
      return !this.loading && !this.isEmpty
    },
    userStatus() {
      return this.userData.userStatus ? this.userData.userStatus : 'Change Status...'
    }
  },
  components: {
    HomeBar,
    HomeSidebar,
    HomeLogo,
    HomeNav,
    AppModal,
    AppLoader
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
.home__main-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  height: auto;
  margin: 0;
  background-color: rgba(248, 248, 199, 0.7);
  border-radius: .5rem 1rem 1rem .5rem;
  border: 0;
  z-index: 25;
  h1 {
    color: rgba(45, 32, 58, .8);
    text-align: center;
    max-width: 25rem;
  }
  .btn:focus {
    box-shadow: none;
  }
}

</style>
