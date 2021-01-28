<template>
  <div class="menu-logo">
    <img :src="currentImage" alt="">
    <div class="menu-logo__lvl">lvl - 10</div>
    <div class="menu-logo__status">Update status...</div>
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
  box-shadow: -1px 7px 39px -16px rgba(0, 0, 0, 0.75);

  img {
    display: block;
    border-radius: 50%;
    max-width: 100%;
    height: 100%;
  }
  &__lvl {
    position: absolute;
    right: 60%;
    background-color: #ffd79d;
    padding: .2rem 1rem;
    border-radius: 1rem;
  }
  &__status {
    position: absolute;
    bottom: -5%;
    left: 30%;
    background-color: #ffd79d;
    padding: .3rem 1rem;
    border-radius: 1rem;
  }
}
</style>
