<template>
  <AppLoader v-if="loading"/>
  <div class="home container" v-else-if="hasData">
    <div class="home__wrapper">
      <div class="home__wrapper-bar">
        <the-logo :gender="userData.gender"></the-logo>
        <home-bar :name="userData.name"></home-bar>
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
    <div class="home__sidebar card"></div>
    <teleport to="#app">
    <modal v-if="firstVisit"></modal>
    </teleport>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TheLogo from '@/components/home/TheLogo'
import AppLoader from '@/components/ui/AppLoader'
import HomeMain from '@/components/home/HomeMain'
import HomeNav from '@/components/home/HomeNav'
import AppCalories from '@/components/AppCalories'
import AppMain from '@/components/AppMain'
import HomeBar from '@/components/home/HomeBar'
import Modal from '@/views/Modal'

export default {
  async mounted() {
    this.loading = true
    await this.$store.dispatch('load')
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
    ...mapGetters(['userData', 'isEmpty', 'firstVisit']),
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
    Modal,
    HomeBar,
    AppMain,
    AppCalories,
    AppLoader,
    TheLogo,
    HomeMain,
    HomeNav
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

.home__sidebar {
  flex: 1 0 10%;
  background-color: #abbd81;
  margin: 1rem 1rem 1rem 0;
  box-shadow: -1px 7px 39px -16px rgba(0, 0, 0, 0.75);
  border-radius: 1rem;
  border: 0;

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
  height: 100%;
  background-color: #e1b16a;
  border-radius: 1rem;
  box-shadow: -1px 7px 39px -16px rgba(0, 0, 0, 0.75);
}

</style>
