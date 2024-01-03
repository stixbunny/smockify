<script setup lang="ts">
const props = defineProps({
  active: Boolean,
});
</script>

<template>
  <button :class="{ active: props.active }">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  color: var(--text-base);
  font-size: var(--fs-small);
  border: none;
  text-decoration: none;
  cursor: pointer;
  border-radius: 1000px;
  padding-block: 0.5rem;
  padding-inline: 0.8rem;
  background-color: var(--background-elevated-highlight);
}
button.active {
  color: var(--background-base);
  background-color: var(--text-base);
}
</style>
