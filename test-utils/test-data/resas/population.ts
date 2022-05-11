import { testPrefectures } from '~~/test-utils/test-data/resas/prefectures';
import {
  PopulationDataSet,
  PopulationResult,
  ResasResponse,
  YearlyPopulationItem
} from '~~/types/entity/resas-entity';
import { Population } from '~~/types/models/resas-model';

const testYearlyPopulationItems: YearlyPopulationItem[] = [
  { year: 1960, value: 4206313 },
  { year: 1965, value: 4798653 },
  { year: 1970, value: 5386163 },
  { year: 1975, value: 5923569 },
  { year: 1980, value: 6221638 },
  { year: 1985, value: 6455172 },
  { year: 1990, value: 6690603 }
];

export const testPopulationDataSet: PopulationDataSet[] = [
  { label: '総人口', data: testYearlyPopulationItems },
  { label: '年少人口', data: testYearlyPopulationItems }
];

export const testPopulationResponse: ResasResponse<PopulationResult> = {
  message: null,
  result: {
    boundaryYear: 2015,
    data: testPopulationDataSet
  }
};

export const testPopulation: Population[] = testPrefectures.map((p, index) => ({
  ...p,
  data: [...Array(10)].map((_, i) => i + index)
}));

export const createPopulation = (customize?: Partial<Population>) => {
  return {
    prefCode: 1,
    prefName: '北海道',
    data: [1, 2, 3],
    ...customize
  };
};
