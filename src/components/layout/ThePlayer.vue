<script lang="ts" setup>
import { pImg, pArtist, pSongTitle, pSongDuration } from '../../utils/placeholder';
import NowPlaying from '../player/NowPlaying.vue';
import PlayerControls from '../player/PlayerControls.vue';
import PlayerMisc from '../player/PlayerMisc.vue';
</script>

<template>
  <div id="player-container">
    <NowPlaying :style="{ 'grid-area': 'now-playing' }" />
    <PlayerControls :style="{ 'grid-area': 'player-controls' }" />
    <PlayerMisc :style="{ 'grid-area': 'player-misc' }" />
  </div>
</template>

<style scoped>
#player-container {
  display: grid;
  grid-template-columns: 0.8fr 1fr 0.8fr;
  grid-template-rows: auto;
  grid-template-areas: 'now-playing player-controls player-misc';
  gap: 8px;
  align-items: center;
  height: 100%;
}

/* tablet and small screens */
@media (min-width: 561px) and (max-width: 768px) {
  #player-container {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      'now-playing player-misc'
      'player-controls player-controls';
    gap: 8px;
    justify-items: center;
    align-items: center;
    height: 100%;
  }
}
</style>
