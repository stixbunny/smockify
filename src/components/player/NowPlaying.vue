<script lang="ts" setup>
import { usePlayerStore } from '@/stores/player';
import HeartButton from '../buttons/HeartButton.vue';

const player = usePlayerStore();
</script>

<template>
  <div id="now-playing" class="player-sub-container">
    <img :src="player.song.imgUrl">
    <div class="current-song-info">
      <div class="song-name">{{ player.song.songName }}</div>
      <div class="song-artists">{{ player.song.artistName }}</div>
    </div>
    <HeartButton :id="player.song.songId" type="song" :liked="player.song.isLiked" />
  </div>
</template>

<style scoped>
#now-playing {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  margin-left: 8px;
  gap: 16px;
  height: 56px;
}
img {
  height: 100%;
  border-radius: 4px;
}
.song-name {
  font-size: var(--fs-small);
}
.song-artists {
  font-size: var(--fs-smaller);
  color: var(--text-subdued);
}
</style>
