<template>
  <div class="ui-checkbox" @click="onClick($event)">
    <label>
      <input type="checkbox" :checked="modelValue" />
      <div
        class="ui-checkbox-box"
        :class="{ 'ui-checkbox-box--checked': modelValue }"
      >
        <i class="fa-solid fa-check" />
      </div>
      <span>{{ label }}</span>
    </label>
  </div>
</template>
<script setup lang="ts">
interface Props {
  modelValue?: boolean;
  label: string;
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'click', value: MouseEvent): void;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false
});
const emit = defineEmits<Emits>();

const onClick = (event: MouseEvent): void => {
  event.preventDefault();
  emit('update:modelValue', !props.modelValue);
  emit('click', event);
};
</script>
<style lang="scss" scoped>
.ui-checkbox {
  display: inline-block;

  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }

  input {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    pointer-events: none;
  }

  .ui-checkbox-box {
    display: inline-flex;
    width: 1rem;
    height: 1rem;
    align-items: center;
    justify-content: center;
    border: 1px solid colors.$color-border;
    border-radius: 2px;
    color: colors.$color-border;
    font-size: 0.75rem;
    transition: color 200ms ease-in, background-color 200ms ease-in;

    &:not(.ui-checkbox-box--checked) {
      > i {
        opacity: 0.3;
      }
    }

    &.ui-checkbox-box--checked {
      color: colors.$color-white;
      background-color: colors.$color-primary;
      border-color: colors.$color-primary;
    }

    + * {
      margin-left: 0.5rem;
    }
  }

  &:hover .ui-checkbox-box,
  input:focus-visible + .ui-checkbox-box {
    &:not(.ui-checkbox-box--checked) {
      background-color: colors.$color-hover;
    }

    &.ui-checkbox-box--checked {
      background-color: colors.$color-primary-hover;
      border-color: colors.$color-primary-hover;
    }
  }
}
</style>
