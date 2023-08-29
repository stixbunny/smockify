<script lang="ts" setup>
import IconNext from '../icons/IconNext.vue';
import PlayerControlButton from './PlayerControlButton.vue';
</script>

<template>
  <PlayerControlButton>
    <IconNext />
  </PlayerControlButton>
</template>

<style scoped>
button:active {
  color: var(--text-subdued);
  transform: scale(1);
}
</style>
