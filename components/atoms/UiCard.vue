<template>
  <div class="ui-card">
    <slot />
  </div>
</template>
<script setup lang="ts">
interface Props {
  width?: string;
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%'
});
</script>
<style lang="scss" scoped>
.ui-card {
  padding: 1.5rem;
  width: v-bind(width);
  border-radius: 4px;
  background-color: colors.$color-white;
  box-shadow: colors.$shadow-1;
}
</style>
