<template>
  <div class="ui-chart">
    <div id="ui-chart-container" />
    <span
      v-if="!!emptyMessage && !data.length"
      class="ui-chart-empty-message"
      >{{ emptyMessage }}</span
    >
  </div>
</template>
<script setup lang="ts">
import { toRefs, onMounted, watch } from 'vue';
import { ChartData } from '~~/types/models/chart-model';
import { createLineChart } from '~~/utils/chart-utils';

interface Props {
  renderTo?: HTMLDivElement;
  xAxisTitle?: string;
  yAxisTitle?: string;
  startYear?: number;
  yearInterval?: number;
  emptyMessage?: string;
  data: ChartData[];
}

const props = withDefaults(defineProps<Props>(), {
  renderTo: undefined,
  xAxisTitle: '',
  yAxisTitle: '',
  startYear: 2000,
  yearInterval: 5,
  emptyMessage: ''
});
const { data } = toRefs(props);

const createChart = () => {
  createLineChart({
    renderTo: props.renderTo || 'ui-chart-container',
    xAxisTitle: props.xAxisTitle,
    yAxisTitle: props.yAxisTitle,
    startYear: props.startYear,
    yearInterval: props.yearInterval,
    data: data.value
  });
};

onMounted(() => {
  createChart();
});

watch(data, () => {
  createChart();
});
</script>
<style lang="scss" scoped>
.ui-chart {
  position: relative;
  color: colors.$color-border;
  .ui-chart-empty-message {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
