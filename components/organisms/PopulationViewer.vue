<template>
  <div class="population-viewer">
    <PrefecturesSelect @add="add($event)" @remove="remove($event)" />
    <UiSpacer height="2rem" />
    <PopulationChart :chart-render-to="chartRenderTo" :population="population" />
  </div>
</template>
<script setup lang="ts">
import UiSpacer from '~/components/atoms/UiSpacer.vue';
import PrefecturesSelect from '~/components/molecules/PrefecturesSelect.vue';
import PopulationChart from '~/components/molecules/PopulationChart.vue';
import { usePopulation } from '~/composables/usePopulation';

interface Props {
  chartRenderTo?: HTMLDivElement;
}

const props = withDefaults(defineProps<Props>(), { chartRenderTo: undefined });

const { population, add, remove } = usePopulation();
</script>
<style lang="scss" scoped></style>
