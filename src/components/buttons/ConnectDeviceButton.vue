<script lang="ts" setup>
import IconConnectDevice from '../icons/IconConnectDevice.vue';
</script>
<template>
  <button>
    <IconConnectDevice />
  </button>
</template>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  color: var(--text-subdued);
}
button:hover {
  color: var(--text-base);
  transform: scale(1.1);
}
button:active {
  transform: scale(1);
}
</style>
