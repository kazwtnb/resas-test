import { Ref } from 'vue';
import { Population, Prefecture } from '~~/types/models/resas-model';

class ResasRepository {
  prefectures(): Ref<Prefecture[]> {
    const { data } = useFetch<Prefecture[]>('/api/resas/prefectures');
    return data;
  }

  async population(pref: Prefecture): Promise<Population | null> {
    const { data } = await useFetch<number[]>('/api/resas/population', {
      params: { prefCode: pref.prefCode }
    });

    return data.value
      ? {
        ...pref,
        data: data.value
      }
      : null;
  }
}

const $resasRepository = new ResasRepository();

export default $resasRepository;
