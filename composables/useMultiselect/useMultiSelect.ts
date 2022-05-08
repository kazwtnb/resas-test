import { Ref, ComputedRef, computed } from 'vue';
import { isEqualObjectByKey } from '../../utils/object-utils';

export type ToggleResultType = 'add' | 'remove';
export type ToggleResult<T> = { value: T[]; type: ToggleResultType };

export const useMultiSelect = <T>(
  selectedItems: Ref<T[]>,
  itemIdKey?: string
): {
  selected: ComputedRef<(val: T) => boolean>;
  add: (val: T) => T[];
  remove: (val: T) => T[];
  toggle: (val: T) => ToggleResult<T>;
} => {
  const selected = computed(
    () => (val: T) =>
      !!selectedItems.value?.find((m: T) =>
        isEqualObjectByKey(m, val, itemIdKey)
      )
  );

  const add = (val: T): T[] => {
    if (!selectedItems.value?.length) {
      return [val];
    }

    return selectedItems.value.every(
      (m: T) => !isEqualObjectByKey(m, val, itemIdKey)
    )
      ? [...selectedItems.value, val]
      : selectedItems.value;
  };

  const remove = (val: T): T[] => {
    return (
      selectedItems.value?.filter(
        (m: unknown) => !isEqualObjectByKey(m, val, itemIdKey)
      ) || []
    );
  };

  const toggle = (val: T): ToggleResult<T> => {
    if (selected.value(val)) {
      return {
        value: remove(val),
        type: 'remove'
      };
    }
    return {
      value: add(val),
      type: 'add'
    };
  };

  return { selected, add, remove, toggle };
};
