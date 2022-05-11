<template>
  <section>
    <slot />
  </section>
</template>
<script setup lang="ts">
interface Props {
  maxWidth?: string;
}

const props = withDefaults(defineProps<Props>(), {
  maxWidth: '1200px'
});
</script>
<style lang="scss" scoped>
section {
  margin-right: auto;
  margin-left: auto;
  padding: 2rem;
  max-width: v-bind(maxWidth);

  @media (max-width: breakpoints.$sp) {
    padding: 0.75rem;
  }
}
</style>
