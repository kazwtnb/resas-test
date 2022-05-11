import { PopulationResult, ResasResponse } from '~/types/entity/resas-entity';

export default defineEventHandler(async (event): Promise<number[]> => {
  const prefCode = useQuery(event).prefCode;
  if (!prefCode) {
    return [];
  }

  const $config = useRuntimeConfig();
  const res: ResasResponse<PopulationResult> = await $fetch(
    'api/v1/population/composition/perYear',
    {
      params: {
        prefCode: useQuery(event).prefCode,
        cityCode: '-'
      },
      baseURL: $config.public.RESAS_ENDPOINT_BASE_URL,
      headers: {
        'X-API-KEY': $config.RESAS_API_KEY
      }
    }
  );

  return (
    res?.result?.data
      ?.find((d) => d.label === '総人口')
      ?.data?.map((i) => i.value) || []
  );
});
