<template>
  <div class="card menu-logo">
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
div.menu-logo {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex: 0 1 10%;
  padding: 0;
  background-color: #1e3d59;
  img {
    display: block;
    border-radius: .5rem;
    max-width: 100%;
    height: 100%;
  }
}
</style>
