<script lang="ts" setup>
import IconVolume from '../icons/IconVolume.vue';
import { usePlayerStore } from '@/stores/player';

const player = usePlayerStore();

function switchVolume() {
  if(player.volumePower != 'muted') {
    player.lastSavedVolume = player.volume;
    player.volume = 0;
  }
  else {
    player.volume = player.lastSavedVolume;
  }
}

</script>
<template>
  <button @click="switchVolume">
    <IconVolume :mode="player.volumePower" />
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
  transform: scale(1.1);
}
button:active {
  transform: scale(1);
}
</style>