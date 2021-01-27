<template>
  <div class="remaining-calculator__mode">
    <div>
      <span class="remaining-calculator__daily-activity">Choose your daily activity</span>
      <div class="btn-group remaining-calculator__daily-activity-group">
        <button type="button"
                :class="['btn', {'active-btn': idx === currentDaily}]"
                @click="modeButton(idx)"
                v-for="(btn, idx) in dailyButtonList"
                :key="btn.id">{{ btn.name }} activity
        </button>
      </div>
    </div>
    <button class="btn remaining-calculator__button" @click="calculateResult">Calculate</button>
    <span>{{ showCalculatedRes }}</span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
