<template>
  <div class="logo">
    <img :src="imageM" alt="">
  </div>
</template>

<script>
import imageMan from '../../assets/man.png'
import imageWoman from '../../assets/woman.png'
export default {
  data () {
    return {
      imageM: imageMan,
      imageW: imageWoman
    }
  }
}
</script>

<style scoped lang="scss">
div.logo {
  grid-area: logo;
  border: 1px solid #000063;
  img {
    display: block;
    margin: 0 auto;
    max-width: 200px;
    height: 100%;
    border-radius: 50%;
    border: 2px solid #d20c0c;
  }
}
</style>
