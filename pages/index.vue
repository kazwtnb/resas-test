<template>
  <AtomsUiSection>
    <h1>都道府県別人口構成</h1>
    <AtomsUiCard>
      <MoleculesPrefecturesSelect />
      <AtomsUiChart :data="data" x-axis-title="（年）" y-axis-title="人口（人）" />
    </AtomsUiCard>
  </AtomsUiSection>
</template>
<script setup lang="ts">
const data = [
  {
    name: 'hoge',
    data: [1, 2, 3, 4, 5, 6, 7]
  },
  {
    name: 'huga',
    data: [3, 4, 5, 6, 7, 8, 9]
  }
];
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;

  + * {
    margin-top: 20px;
  }
}
</style>
