<script lang="ts" setup>
import IconPrev from '../icons/IconPrev.vue';
import PlayerControlButton from './PlayerControlButton.vue';
</script>

<template>
  <PlayerControlButton>
    <IconPrev />
  </PlayerControlButton>
</template>

<style scoped>
button:active {
  color: var(--text-subdued);
  transform: scale(1);
}
</style>