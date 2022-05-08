<template>
  <div :id="props.id" class="ui-chart" />
</template>
<script setup lang="ts">
import { ChartData } from '~~/types/models/chart-model';
import { createLineChart } from '~~/utils/chart-utils';

interface Props {
  id?: string;
  xAxisTitle?: string;
  yAxisTitle?: string;
  startYear?: number;
  yearInterval?: number;
  data: ChartData[];
}

const props = withDefaults(defineProps<Props>(), {
  id: 'ui-chart-container',
  xAxisTitle: '',
  yAxisTitle: '',
  startYear: 2001,
  yearInterval: 5
});
const { data } = toRefs(props);

const createChart = () => {
  createLineChart({
    id: props.id,
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
<style lang="scss" scoped></style>
