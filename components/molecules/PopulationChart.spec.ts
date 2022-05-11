import { shallowMount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import PopulationChart from './PopulationChart.vue';

describe('PopulationChart', () => {
  describe('computed populationData', () => {
    test.each([
      {
        input: [{ prefCode: 2, prefName: '青森県', data: [1, 2, 3] }],
        expected: [{ name: '青森県', data: [1, 2, 3] }]
      },
      {
        input: [
          { prefCode: 2, prefName: '青森県', data: [1, 2, 3] },
          { prefCode: 3, prefName: '岩手県', data: [2, 4] }
        ],
        expected: [
          { name: '青森県', data: [1, 2, 3] },
          { name: '岩手県', data: [2, 4] }
        ]
      }
    ])(`%o`, ({ input, expected }) => {
      const wrapper = shallowMount(PopulationChart, {
        props: {
          population: input
        }
      });
      expect(wrapper.vm.populationData).toEqual(expected);
    });
  });
});
