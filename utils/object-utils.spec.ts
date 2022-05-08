import { ref } from 'vue';
import { describe, expect, test } from 'vitest';
import { isEqualObjectByKey } from './object-utils';

interface TestInterface {
  id: string;
  value: string;
}

describe('object-utils', () => {
  describe('isEqualObjectByKey', () => {
    test.each([
      {
        name: 'idKey指定なしのとき、すべてのプロパティの値が一致する場合true',
        input: {
          obj1: { id: '1', value: 'a' },
          obj2: { id: '1', value: 'a' },
          idKey: undefined
        },
        expected: true
      },
      {
        name: 'idKey指定なしのとき、一致しないプロパティがある場合false',
        input: {
          obj1: { id: '1', value: 'a' },
          obj2: { id: '1', value: 'b' },
          idKey: undefined
        },
        expected: false
      },
      {
        name: 'idKeyで指定したプロパティが一致している場合、他のプロパティは無視してtrue',
        input: {
          obj1: { id: '1', value: 'a' },
          obj2: { id: '1', value: 'b' },
          idKey: 'id'
        },
        expected: true
      },
      {
        name: 'idKeyで指定したプロパティが一致しない場合、false',
        input: {
          obj1: { id: '1', value: 'a' },
          obj2: { id: '2', value: 'a' },
          idKey: 'id'
        },
        expected: false
      }
    ])(`%o`, ({ input, expected }): void => {
      expect(isEqualObjectByKey(input.obj1, input.obj2, input.idKey)).toBe(
        expected
      );
    });
  });
});
