import { ref } from 'vue';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import PrefecturesSelect from './PrefecturesSelect.vue';
import * as usePrefectures from '~/composables/usePrefectures/usePrefectures';

describe('PrefecturesSelect', () => {
  const testPrefecturesResponse = [
    { prefCode: 1, prefName: '北海道' },
    { prefCode: 2, prefName: '青森県' },
    { prefCode: 3, prefName: '岩手県' },
    { prefCode: 4, prefName: '宮城県' },
    { prefCode: 5, prefName: '秋田県' },
    { prefCode: 6, prefName: '山形県' }
  ];

  beforeEach(() => {
    vi.spyOn(usePrefectures, 'usePrefectures').mockReturnValue({
      prefectures: ref(testPrefecturesResponse),
      selectedPrefectures: ref([])
    });
  });

  test('Snapshot', () => {
    const wrapper = mount(PrefecturesSelect);
    expect(wrapper.element).toMatchSnapshot();
  });
});
