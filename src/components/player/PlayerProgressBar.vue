<script lang="ts" setup>
import { usePlayerStore } from '@/stores/player';
import { ref } from 'vue';

const player = usePlayerStore();
const bar = ref<HTMLDivElement>();

function moveTrack(e: MouseEvent) {
  const barSize = bar.value?.getBoundingClientRect().width;
  if (barSize) {
    const newTiming = e.offsetX / barSize;
    console;
    player.setTiming(newTiming);
  }
}
</script>

<template>
  <div id="player-progress-bar" @click="moveTrack">
    <div class="container" ref="bar">
      <div class="bar"></div>
    </div>
    <div class="dot"></div>
  </div>
</template>

<style scoped>
#player-progress-bar {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 10px;
}
div.container {
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: var(--background-highlight);
  border-radius: 2px;
}
div.bar {
  height: 4px;
  width: v-bind('player.elapsedPercentage');
  background-color: var(--text-base);
  border-radius: 2px;
}
#player-progress-bar:hover {
  & div.bar {
    background-color: var(--text-bright-accent);
  }
  & div.dot {
    display: block;
  }
}
div.dot {
  display: none;
  position: absolute;
  left: v-bind('player.elapsedPercentage'); /* progress */
  z-index: 100;
  height: 12px;
  width: 12px;
  margin-left: -6px; /* half-size */
  background-color: var(--text-base);
  border: 0;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
}
</style>
