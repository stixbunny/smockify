<script lang="ts" setup>
const emit = defineEmits(['click']);
</script>

<template>
  <button @click="emit('click')">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /*for icon ::after*/
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  color: var(--text-subdued);
}
button:hover {
  color: var(--text-base);
}

</style>
