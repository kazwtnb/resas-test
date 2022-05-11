<template>
  <ul class="ui-checkboxes">
    <li v-for="item of props.items" :key="idKey ? item[idKey] : item">
      <UiCheckbox
        :model-value="selected(item)"
        :label="labelKey ? item[labelKey] : item"
        @click="onClick($event, item)"
      />
    </li>
  </ul>
</template>
<script setup lang="ts">
// Nuxt3のAutoImportがテストで効かないため明示的にimportを記載
import { toRefs } from 'vue';
import { useMultiSelect } from '~/composables/useMultiselect';
import UiCheckbox from '~/components/atoms/Checkbox/UiCheckbox.vue';

interface Props<T> {
  modelValue?: T[];
  items: T[];
  idKey?: string;
  labelKey?: string;
  minItemWidth?: string;
}

interface Emits<T> {
  (e: 'update:modelValue', value: T[]): void;
  (e: 'change'): void;
  (e: 'add', value: T): void;
  (e: 'remove', value: T): void;
}

// VueでGenericsのprops、emitsの定義が不可なためanyを使用して回避
/* eslint-disable @typescript-eslint/no-explicit-any */

const props = withDefaults(defineProps<Props<any>>(), {
  modelValue: () => [],
  idKey: '',
  labelKey: '',
  minItemWidth: '90px'
});
const { modelValue } = toRefs(props);
const { selected, toggle } = useMultiSelect(modelValue, props.idKey);
const emit = defineEmits<Emits<any>>();

const onClick = (event: MouseEvent, item: any): void => {
  event.preventDefault();
  const result = toggle(item);

  emit('update:modelValue', result.value);
  emit('change');

  switch (result.type) {
    case 'add':
      emit('add', item);
      break;
    case 'remove':
      emit('remove', item);
      break;
  }
};
</script>
<style lang="scss" scoped>
ul.ui-checkboxes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(v-bind(minItemWidth), 1fr));
  grid-gap: 1rem;
}
</style>
