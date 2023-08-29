<script lang="ts" setup>
import IconPlay from '../icons/IconPlay.vue';
import PlayerControlButton from './PlayerControlButton.vue';
import { usePlayerStore } from '@/stores/player';

const player = usePlayerStore();

function play() {
  if (player.isPlaying) {
    player.pause();
  } else {
    player.play();
  }
}
</script>
<template>
  <PlayerControlButton @click="play">
    <IconPlay :is-playing="player.isPlaying" />
  </PlayerControlButton>
</template>

<style scoped>
button {
  color: var(--background-press);
  background: var(--text-base);
  border-radius: 50%;
}
button:hover {
  color: var(--background-press);
  transform: scale(1.1);
}
button:active {
  transform: scale(1);
}
</style>
