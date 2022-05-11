import { ref, nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import { describe, expect, test, beforeEach, vi, beforeAll } from 'vitest';
import UiCheckbox from '../atoms/Checkbox/UiCheckbox.vue';
import PopulationViewer from './PopulationViewer.vue';
import { useCreateChartContainer } from '~~/test-utils/composables/useCreateChartContainer';
import { testPrefectures } from '~~/test-utils/test-data/resas/prefectures';
import $resasRepository from '~~/repository/resas-repository';
import { createPopulation } from '~~/test-utils/test-data/resas/population';
import { useTestConfig } from '~~/utils/chart-utils';

describe('PopulationViewer', () => {
  const testPrefecture = testPrefectures[0];
  const testPopulation = createPopulation(testPrefecture);

  beforeAll(() => {
    useTestConfig();
  });

  beforeEach(() => {
    // /serverディレクトリ配下のBFFがバグでテストで動作しないため、Repository層でモック
    // https://github.com/nuxt/framework/issues/3252
    vi.spyOn($resasRepository, 'prefectures').mockReturnValue(
      ref(testPrefectures)
    );

    vi.spyOn($resasRepository, 'population').mockReturnValue(
      new Promise((resolve) => {
        resolve(testPopulation);
      })
    );
  });

  test('チェックのつけはずしに応じてグラフが描画される', async () => {
    const { container, chartTarget } = useCreateChartContainer();

    const wrapper = mount(PopulationViewer, {
      attachTo: container,
      props: {
        chartRenderTo: chartTarget
      }
    });
    // チェックを入れる
    wrapper.findAllComponents(UiCheckbox)[0].trigger('click');
    await nextTick();

    // グラフが出る
    expect(container).toMatchSnapshot();

    // チェックを外す
    wrapper.findAllComponents(UiCheckbox)[0].trigger('click');
    await nextTick();

    // グラフが消える
    expect(container).toMatchSnapshot();
  });
});
