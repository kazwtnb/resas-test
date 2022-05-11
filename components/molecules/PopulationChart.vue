<template>
  <UiChart
    :render-to="chartRenderTo"
    :data="populationData"
    :start-year="1960"
    x-axis-title="（年）"
    y-axis-title="人口（人）"
    empty-message="都道府県を選択するとグラフで結果が表示されます"
  />
</template>
<script setup lang="ts">
import { toRefs, computed } from 'vue';
import UiChart from '../atoms/Chart/UiChart.vue';
import { Population } from '~~/types/models/resas-model';

interface Props {
  chartRenderTo?: HTMLDivElement;
  population: Population[];
}

const props = withDefaults(defineProps<Props>(), { chartRenderTo: undefined });

const { population } = toRefs(props);

const populationData = computed(() =>
  population.value?.map((p: Population) => ({
    name: p.prefName,
    data: p.data
  }))
);
</script>
<style lang="scss" scoped></style>
