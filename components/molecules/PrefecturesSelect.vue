<template>
  <UiCheckboxes
    v-model="selectedPrefectures"
    :items="prefectures"
    id-key="prefCode"
    label-key="prefName"
    @add="emit('add', $event)"
    @remove="emit('remove', $event)"
  />
</template>
<script setup lang="ts">
import UiCheckboxes from '~~/components/atoms/Checkbox/UiCheckboxes.vue';
import { Prefecture } from '~~/types/models/resas-model';
import { usePrefectures } from '~~/composables/usePrefectures';

interface Emits {
  (e: 'add', value: Prefecture): void;
  (e: 'remove', value: Prefecture): void;
}
const emit = defineEmits<Emits>();

const { prefectures, selectedPrefectures } = usePrefectures();
</script>
<style lang="scss" scoped></style>
