<template>
  <div class="ui-spacer" />
</template>
<script setup lang="ts">
interface Props {
  width?: string;
  height?: string;
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '100%'
});
</script>
<style lang="scss" scoped>
.ui-spacer {
  width: v-bind(width);
  height: v-bind(height);
}
</style>
