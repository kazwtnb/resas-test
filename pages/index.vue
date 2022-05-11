<template>
  <UiSection>
    <h1>都道府県別人口構成</h1>
    <UiCard>
      <PopulationViewer />
    </UiCard>
  </UiSection>
</template>
<script setup lang="ts">
import UiSection from '~/components/atoms/UiSection.vue';
import UiCard from '~/components/atoms/UiCard.vue';
import PopulationViewer from '~/components/organisms/PopulationViewer.vue';
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;

  + * {
    margin-top: 20px;
  }
}
</style>
