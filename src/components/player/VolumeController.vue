<script lang="ts" setup>
import { ref } from 'vue';
import VolumeButton from '../buttons/VolumeButton.vue';
import { usePlayerStore } from '@/stores/player';

const player = usePlayerStore();
const bar = ref<HTMLDivElement>();

function moveVolume(e: MouseEvent) {
  const barSize = bar.value?.getBoundingClientRect().width;
  if (barSize) {
    const newVolume = e.offsetX / barSize * 100;
    player.volume = newVolume;
  }
}
</script>

<template>
  <div id="volume-controller">
    <VolumeButton />
    <div id="volume-bar" @click="moveVolume">
      <div class="container" ref="bar">
        <div class="bar"></div>
      </div>
      <div class="dot"></div>
    </div>
  </div>
</template>

<style scoped>
#volume-controller {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
#volume-bar {
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
  width: v-bind('player.volumePercentage');
  background-color: var(--text-base);
  border-radius: 2px;
}
#volume-bar:hover {
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
  left: v-bind('player.volumePercentage'); /* progress */
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
