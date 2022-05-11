import { beforeEach, describe, expect, test, vi } from 'vitest';
import {
  createPopulation
} from './../../test-utils/test-data/resas/population';
import { usePopulation } from './index';
import $resasRepository from '~~/repository/resas-repository';
import { testPrefectures } from '~~/test-utils/test-data/resas/prefectures';

describe('usePopulation', () => {
  const population1 = createPopulation(testPrefectures[0]);
  const population2 = createPopulation(testPrefectures[1]);

  beforeEach(() => {
    // /serverディレクトリ配下のBFFがバグでテストで動作しないため、Repository層でモック
    // https://github.com/nuxt/framework/issues/3252
    vi.spyOn($resasRepository, 'population').mockReturnValue(
      new Promise((resolve) => {
        resolve(population1);
      })
    );
  });

  describe('add関数で正しくpopulationListが更新されること', () => {
    test.each([
      {
        name: 'populationListが空の場合、追加できる',
        input: {
          populationList: [],
          value: population1
        },
        expected: [population1]
      },
      {
        name: 'populationListに追加する値と一致するものがない場合、追加できる',
        input: {
          populationList: [population2]
        },
        expected: [population2, population1]
      },
      {
        name: 'populationListに追加する値と一致するものがある場合、追加されない',
        input: {
          populationList: [population1]
        },
        expected: [population1]
      }
    ])(`%o`, async ({ input, expected }) => {
      const { population, add } = usePopulation();
      population.value = input.populationList;
      await add(testPrefectures[0]);
      expect(population.value).toEqual(expected);
    });
  });

  describe('remove関数で正しくpopulationListが更新されること', () => {
    test.each([
      {
        name: 'populationListに削除する値と一致するものがある場合、削除される',
        input: {
          populationList: [population1, population2],
          value: population2
        },
        expected: [population1]
      },
      {
        name: 'populationListに削除する値と一致するものがない場合、削除されない',
        input: {
          populationList: [population1],
          value: population2
        },
        expected: [population1]
      },
      {
        name: 'populationListが空の場合、空のまま',
        input: {
          populationList: [],
          value: population1
        },
        expected: []
      }
    ])(`%o`, ({ input, expected }) => {
      const { population, remove } = usePopulation();
      population.value = input.populationList;
      remove(input.value);
      expect(population.value).toEqual(expected);
    });
  });
});
