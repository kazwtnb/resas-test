import { mount } from '@vue/test-utils';
import { describe, expect, test, beforeAll } from 'vitest';
import UiChart from './UiChart.vue';
import { useCreateChartContainer } from '~~/test-utils/composables/useCreateChartContainer';
import { useTestConfig } from '~~/utils/chart-utils';

describe('UiChart', () => {
  beforeAll(() => {
    useTestConfig();
  });

  describe('snapshot', () => {
    test.each([
      {
        name: '複数データあり',
        input: [
          { name: 'a', data: [1, 2, 3, 4, 5] },
          { name: 'b', data: [3, 4, 5, 6, 7] }
        ]
      },
      {
        name: 'empty表示',
        input: []
      }
    ])(`%o`, ({ input }) => {
      const { container, chartTarget } = useCreateChartContainer();

      const wrapper = mount(UiChart, {
        attachTo: container,
        props: {
          renderTo: chartTarget,
          xAxisTitle: 'x軸',
          yAxisTitle: 'y軸',
          startYear: 2000,
          yearInterval: 5,
          emptyMessage: 'empty-state',
          data: input
        }
      });
      expect(container).toMatchSnapshot();
    });
  });
});
