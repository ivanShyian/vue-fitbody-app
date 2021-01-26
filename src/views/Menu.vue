<template>
  <div class="menu container">
    <div class="menu__wrapper-bar">
      <the-logo></the-logo>
      <div class="card menu__day-scale"></div>
      <div class="card menu-bar">
        <h2>User</h2>
      </div>
    </div>
    <div class="menu__wrapper-main">
      <div class="menu__nav card"></div>
      <div class="menu__gen card"></div>
    </div>
  </div>
</template>

<script>

import TheLogo from '@/components/menu/TheLogo'
export default {
  components: { TheLogo }
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
  flex: 0 1 4%
}
.menu-bar {
  flex: 1 0 auto;
}
.menu__wrapper-main {
  display: flex;
  height: 100%;
  width: 100%;
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
