<template>
  <AtomsUiSection>
    <h1>都道府県別人口構成</h1>
    <AtomsUiCard>
      <UiCheckboxes
        v-model="selected"
        :items="data"
        id-key="id"
        label-key="name"
      />
    </AtomsUiCard>
  </AtomsUiSection>
</template>
<script setup lang="ts">
import UiCheckboxes from '~~/components/atoms/Checkbox/UiCheckboxes.vue';
const selected = ref([]);
const data = [
  { id: '1', name: 'hoge' },
  { id: '2', name: 'fuga' }
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
