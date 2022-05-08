import { ref } from 'vue';
import { describe, expect, test } from 'vitest';
import { useMultiSelect } from './index';

interface TestInterface {
  id: string;
  value: string;
}

describe('useMultiSelect', () => {
  const object1: TestInterface = { id: '1', value: 'a' };
  const object2: TestInterface = { id: '2', value: 'b' };

  describe('selectedの値が正しく取得できること', () => {
    test.each([
      {
        name: 'selectedItemsに一致する値がある場合true',
        input: {
          selectedItems: [object1],
          val: object1
        },
        expected: true
      },
      {
        name: 'selectedItemsが空の場合false',
        input: {
          selectedItems: [],
          val: object1
        },
        expected: false
      },
      {
        name: 'selectedItemsに一致する値がない場合false',
        input: {
          selectedItems: [object2],
          val: object1
        },
        expected: false
      }
    ])(`%o`, ({ input, expected }): void => {
      const { selected } = useMultiSelect(
        ref<TestInterface[]>(input.selectedItems),
        'value'
      );
      expect(selected.value(input.val)).toBe(expected);
    });
  });

  describe('add関数で正しい結果が返ること', () => {
    test.each([
      {
        name: 'selectedItemsが空の場合、追加できる',
        input: {
          selectedItems: [],
          value: object1
        },
        expected: [object1]
      },
      {
        name: 'selectedItemsに追加する値と一致するものがない場合、追加できる',
        input: {
          selectedItems: [object1],
          value: object2
        },
        expected: [object1, object2]
      },
      {
        name: 'selectedItemsに追加する値と一致するものがある場合、追加されない',
        input: {
          selectedItems: [object1],
          value: object1
        },
        expected: [object1]
      }
    ])(`%o`, ({ input, expected }): void => {
      const { add } = useMultiSelect(
        ref<TestInterface[]>(input.selectedItems),
        'value'
      );
      expect(add(input.value)).toEqual(expected);
    });
  });

  describe('remove関数で正しい結果が返ること', () => {
    test.each([
      {
        name: 'selectedItemsに削除する値と一致するものがある場合、削除される',
        input: {
          selectedItems: [object1, object2],
          value: object2
        },
        expected: [object1]
      },
      {
        name: 'selectedItemsに削除する値と一致するものがない場合、削除されない',
        input: {
          selectedItems: [object1],
          value: object2
        },
        expected: [object1]
      },
      {
        name: 'selectedItemsが空の場合、空のまま',
        input: {
          selectedItems: [],
          value: object1
        },
        expected: []
      }
    ])(`%o`, ({ input, expected }): void => {
      const { remove } = useMultiSelect(
        ref<TestInterface[]>(input.selectedItems),
        'value'
      );
      expect(remove(input.value)).toEqual(expected);
    });
  });

  describe('toggle関数で正しい結果が返ること', () => {
    test.each([
      {
        name: 'selectedItemsに一致する値がある場合、removeされる',
        input: {
          selectedItems: [object1],
          val: object1
        },
        expected: {
          value: [],
          type: 'remove'
        }
      },
      {
        name: 'selectedItemsに一致する値がある場合、addされる',
        input: {
          selectedItems: [object1],
          val: object2
        },
        expected: {
          value: [object1, object2],
          type: 'add'
        }
      }
    ])(`%o`, ({ input, expected }): void => {
      const { toggle } = useMultiSelect(
        ref<TestInterface[]>(input.selectedItems),
        'value'
      );
      expect(toggle(input.val)).toEqual(expected);
    });
  });
});
