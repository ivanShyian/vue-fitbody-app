<template>
  <div class="menu-logo">
    <img :src="currentImage" alt="">
    <div class="menu-logo__lvl">Level - 1</div>
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
  border-radius: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex: 0 1 15%;
  padding: .5rem;
  position: relative;
  background-color: #abbd81;
  box-shadow: rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px;
  img {
    display: block;
    border-radius: 50%;
    max-width: 100%;
    height: 100%;
  }
  &__lvl {
    font-family: Quicksand,serif;
    position: absolute;
    background-color: #ffd79d;
    padding: .2rem 1rem;
    border-radius: 1rem;
    bottom: -5%;
  }
}
</style>
