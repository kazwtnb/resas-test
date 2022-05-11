import { ref } from 'vue';
import { Prefecture } from '../../types/models/resas-model';
import $resasRepository from '~~/repository/resas-repository';

export const usePrefectures = () => {
  const prefectures = $resasRepository.prefectures();
  const selectedPrefectures = ref<Prefecture[]>([]);
  return { prefectures, selectedPrefectures };
};
