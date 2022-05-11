import { ResasResponse } from '~~/types/entity/resas-entity';
import { Prefecture } from '~~/types/models/resas-model';

export const testPrefectures = [
  { prefCode: 1, prefName: '北海道' },
  { prefCode: 2, prefName: '青森県' },
  { prefCode: 3, prefName: '岩手県' },
  { prefCode: 4, prefName: '宮城県' },
  { prefCode: 5, prefName: '秋田県' },
  { prefCode: 6, prefName: '山形県' }
];

export const testPrefecturesResponse: ResasResponse<Prefecture[]> = {
  message: null,
  result: testPrefectures
};
