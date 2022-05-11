import { beforeEach, describe, expect, test, vi } from 'vitest';
import { ref } from 'vue';
import { mount } from '@vue/test-utils';
import PrefecturesSelect from './PrefecturesSelect.vue';
import { testPrefectures } from '~~/test-utils/test-data/resas/prefectures';
import $resasRepository from '~~/repository/resas-repository';

describe('PrefecturesSelect', () => {
  beforeEach(() => {
    // /serverディレクトリ配下のBFFがバグでテストで動作しないため、Repository層でモック
    // https://github.com/nuxt/framework/issues/3252
    vi.spyOn($resasRepository, 'prefectures').mockReturnValue(
      ref(testPrefectures)
    );
  });

  test('Snapshot', () => {
    const wrapper = mount(PrefecturesSelect);
    expect(wrapper.element).toMatchSnapshot();
  });
});
