<template>
  <div class="menu-logo">
    <img :src="currentImage" alt="">
  </div>
</template>

<script>
import imageMan from '../../assets/man.png'
import imageWoman from '../../assets/woman.png'

export default {
  props: ['gender'],
  data() {
    return {
      imageM: imageMan,
      imageW: imageWoman
    }
  },
  computed: {
    currentImage() {
      return this.gender === 'man' ? this.imageM : this.imageW
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
  padding: .5rem 0 .5rem .5rem;

  img {
    display: block;
    border-radius: .5rem;
    max-width: 100%;
    height: 100%;
  }
}
</style>
