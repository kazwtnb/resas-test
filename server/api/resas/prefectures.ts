import { ResasResponse } from '~/types/entity/resas-entity';
import { Prefecture } from '~/types/models/resas-model';

export default defineEventHandler(async (): Promise<Prefecture[]> => {
  const $config = useRuntimeConfig();
  const res: ResasResponse<Prefecture[]> = await $fetch('api/v1/prefectures', {
    baseURL: $config.public.RESAS_ENDPOINT_BASE_URL,
    headers: {
      'X-API-KEY': $config.RESAS_API_KEY
    }
  });
  
  return res?.result;
});
