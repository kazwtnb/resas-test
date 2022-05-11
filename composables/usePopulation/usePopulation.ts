import { ref } from 'vue';
import { Population, Prefecture } from '~/types/models/resas-model';
import $resasRepository from '~~/repository/resas-repository';

export const usePopulation = () => {
  const populationList = ref<Population[]>([]);

  const add = async (pref: Prefecture) => {

    if (!pref?.prefCode) {
      return;
    }

    const population = await $resasRepository.population(pref);

    population &&
      !populationList.value.find(
        (v: Population) => v.prefCode === population.prefCode
      ) &&
      populationList.value.push(population);
  };

  const remove = (pref: Prefecture) => {
    if (!pref?.prefCode) {
      return;
    }

    populationList.value = populationList.value.filter(
      (v: Population) => v.prefCode !== pref.prefCode
    );
  };

  return { population: populationList, add, remove };
};
