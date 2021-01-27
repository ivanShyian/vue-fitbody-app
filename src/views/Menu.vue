<template>
  <AppLoader v-if="loading"/>
  <div class="menu container" v-else-if="hasData">
    <div class="menu__wrapper-bar">
      <the-logo :gender="userData.gender"></the-logo>
      <div class="card menu__day-scale"></div>
      <div class="card menu-bar">
        <h2>{{userData.name}}</h2>
      </div>
    </div>
    <div class="menu__wrapper-main">
      <div class="menu__nav card"></div>
      <div class="menu__gen card flex">
        {{userData.birth.day}} -
        {{userData.birth.month}} -
        {{userData.birth.year}}
      </div>
    </div>
  </div>
</template>

<script>

import TheLogo from '@/components/menu/TheLogo'
import { mapGetters } from 'vuex'
import AppLoader from '@/components/ui/AppLoader'

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
  components: { AppLoader, TheLogo }
}
</script>

<style scoped lang="scss">
div.menu {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 1rem 1rem;
}

.menu__wrapper-bar {
  display: flex;
  height: 25%;
  width: 100%;
}

.menu__day-scale {
  flex: 0 1 5%
}

.menu-bar {
  flex: 1 0 auto;
}

.menu__wrapper-main {
  display: flex;
  height: 100%;
  width: 100%;
}
.flex {
  display: flex;
}
.menu__nav {
  flex: 0 0 15%;
  height: auto;
}

.menu__gen {
  flex: 1 1 90%;
  height: auto;
}

</style>
