import { Ref } from 'vue';
import { Prefecture } from '../../types/models/resas-model';

export const usePrefectures = (): {
  prefectures: Ref<Prefecture[]>;
  selectedPrefectures: Ref<Prefecture[]>;
} => {
  const { data } = useFetch<Prefecture[]>(
    '/api/resas/prefectures'
  );
  const selectedPrefectures = ref<Prefecture[]>([]);
  return { prefectures: data, selectedPrefectures };
};
