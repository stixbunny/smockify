<script lang="ts" setup>
import PlayerControlButton from './PlayerControlButton.vue';
import IconShuffle from '../icons/IconShuffle.vue';
import { ref } from 'vue';

const isShuffling = ref(false);

function shuffle() {
  isShuffling.value = !isShuffling.value;
}
</script>
<template>
  <PlayerControlButton @click="shuffle" :class="{ active: isShuffling }">
    <IconShuffle :active="isShuffling" />
  </PlayerControlButton>
</template>

<style scoped>
button.active::after {
  display: block;
  position: absolute;
  bottom: 0px;
  left: 14px;
  border-radius: 50%;
  height: 4px;
  width: 4px;
  content: '';
  background-color: var(--text-subdued);
}
button.active:hover,
button.active:focus {
  color: var(--text-bright-accent);
}
button.active:hover::after,
button.active:focus::after {
  background-color: var(--text-bright-accent);
}
</style>
