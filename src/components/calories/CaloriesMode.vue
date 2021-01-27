<template>
  <div class="btn-group remaining-calculator__group-mode">
    <button type="button"
            :class="['btn', {'active-btn': idx === currentMode}]"
            @click="modeButton(idx, 'mode')"
            v-for="(btn, idx) in modeButtonList"
            :key="btn.id"> {{ btn.name }}
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
