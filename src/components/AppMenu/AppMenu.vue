<template>
  <div class="app-menu-grid">
    <the-logo></the-logo>
    <div class="bar">
      <h2>User</h2>
    </div>
    <div class="nav">
      <ul>
        <li>Menu</li>
        <li>CalcCalories</li>
        <li>My diet</li>
        <li>My wins</li>
        <li>My sports</li>
        <li>Statistic</li>
      </ul>
    </div>
    <div class="menu">Menu</div>
    <div class="achieves">Achieves</div>
  </div>
</template>

<script>
import TheLogo from '@/components/AppMenu/TheLogo'

export default {
  components: { TheLogo }
}
</script>

<style scoped lang="scss">
div.app-menu-grid {
  border: 1px solid #000063;
  border-radius: 1rem;
  max-width: 80%;
  display: grid;
  grid-gap: 10px;
  height: 80vh;
  margin: 0 auto;
  padding: 1rem 1rem;
  grid-template-areas:
    "logo bar bar"
    "nav menu achieves";
  grid-template-rows: 25% 1fr;
  grid-template-columns: auto 2.5fr 1fr;
}

div.logo {
}

div.bar {
  border: 1px solid #000063;
  grid-area: bar;
}

div.nav {
  border: 1px solid #000063;
  grid-area: nav;
}

div.menu {
  border: 1px solid #000063;
  grid-area: menu;
}

div.achieves {
  border: 1px solid #000063;
  grid-area: achieves;
}
.nav ul {
  padding: 0 0 0 1rem;
  margin: 0;
  width: 100%;
  height: 100%;
}
.nav ul li {
  font-family: "Jost", sans-serif;
  font-size: 1.5em;
  margin: 1em 0;
  list-style: none;
  letter-spacing: 1px;
}

</style>
