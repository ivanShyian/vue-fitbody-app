<template>
  <div class="app-nutrition">
    <nutrition-results></nutrition-results>
    <nutrition-daily
    ></nutrition-daily>
  </div>
</template>

<script>
import NutritionResults from '@/components/nutrition/NutritionResults'
import NutritionDaily from '@/components/nutrition/NutritionDaily'
export default {
  components: { NutritionDaily, NutritionResults }
}
</script>

<style scoped lang="scss">
.app-nutrition {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: auto;
}
.app-nutrition::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

.app-nutrition::-webkit-scrollbar
{
  width: 10px;
  background-color: #F5F5F5;
  border-radius: 10px;
}

.app-nutrition::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #898989;
}
</style>
