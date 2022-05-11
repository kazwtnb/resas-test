import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import UiCheckboxes from './UiCheckboxes.vue';
import UiCheckbox from './UiCheckbox.vue';

describe('UiCheckboxes', () => {
  const object1 = { id: '1', value: 'a' };
  const object2 = { id: '2', value: 'b' };

  describe('チェックボックスクリック時に正しいイベントがemitされること', () => {
    test.each([
      {
        name: 'チェックを入れる',
        input: {
          modelValue: [],
          items: [object1],
          clickIndex: 0
        },
        expected: [
          { event: 'update:modelValue', value: [object1] },
          { event: 'change' },
          { event: 'add', value: object1 }
        ]
      },
      {
        name: 'チェックをはずす',
        input: {
          modelValue: [object1],
          items: [object1],
          clickIndex: 0
        },
        expected: [
          { event: 'update:modelValue', value: [] },
          { event: 'change' },
          { event: 'remove', value: object1 }
        ]
      }
    ])(`%o`, ({ input, expected }) => {
      const wrapper = mount(UiCheckboxes, {
        props: {
          modelValue: input.modelValue,
          items: input.items,
          idKey: 'id',
          labelKey: 'value'
        }
      });

      wrapper.findAllComponents(UiCheckbox)[input.clickIndex].trigger('click');

      expected.forEach((e) => {
        if (e.value) {
          expect(wrapper.emitted(e.event)).toEqual([[e.value]]);
          return;
        }

        expect(wrapper.emitted(e.event)).toBeTruthy();
      });
    });
  });

  describe('snapshot', () => {
    test.each([
      {
        name: '未選択',
        modelValue: [],
        items: [object1, object2]
      },
      {
        name: '1つ目を選択済み',
        modelValue: [object1],
        items: [object1, object2]
      },
      {
        name: 'すべて選択済み',
        modelValue: [object1, object2],
        items: [object1, object2]
      }
    ])(`%o`, (input) => {
      const wrapper = mount(UiCheckboxes, {
        props: {
          modelValue: input.modelValue,
          items: input.items,
          idKey: 'id',
          labelKey: 'value'
        }
      });
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
