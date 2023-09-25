<script lang="ts" setup>
import { usePlayerStore } from '@/stores/player';

const player = usePlayerStore();
</script>

<template>
  <div id="now-playing" class="player-sub-container">
    <img :src="player.song.imgUrl">
    <div class="current-song-info">
      <div class="song-name">{{ player.song.songName }}</div>
      <div class="song-artists">{{ player.song.artistName }}</div>
    </div>
  </div>
</template>

<style scoped>
#now-playing {
  display: flex;
  flex-direction: row;
}
</style>
