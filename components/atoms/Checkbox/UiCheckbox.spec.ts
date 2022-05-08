import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import UiCheckbox from './UiCheckbox.vue';

describe('UiCheckbox', () => {
  describe('click Event', () => {
    test.each([
      {
        name: 'チェックを入れる',
        input: {
          modelValue: false
        },
        expected: true
      },
      {
        name: 'チェックを外す',
        input: {
          modelValue: true
        },
        expected: false
      }
    ])(`%o`, ({ input, expected }) => {
      const wrapper = mount(UiCheckbox, {
        props: {
          modelValue: input.modelValue,
          label: 'value'
        }
      });

      wrapper.find('.ui-checkbox').trigger('click');

      expect(wrapper.emitted('update:modelValue')).toEqual([[expected]]);
      expect(wrapper.emitted('click')).toBeTruthy();
    });
  });

  describe('snapshot', () => {
    test.each([
      {
        name: '未選択',
        modelValue: false
      },
      {
        name: '選択済み',
        modelValue: true
      }
    ])(`%o`, (input) => {
      const wrapper = mount(UiCheckbox, {
        props: {
          modelValue: input.modelValue,
          label: 'value'
        }
      });
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
