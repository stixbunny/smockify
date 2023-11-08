<script lang="ts" setup>
import NotYetImplemented from '@/components/NotYetImplemented.vue';
import { loadArtist } from '@/utils/spotifyLoader';

const props = defineProps({
  id: { type: String, required: true },
});

const { topTracks, artist, artistItems } = await loadArtist(props.id);
console.log(artistItems)
</script>

<template>
  <h1>{{ artist?.name }}</h1>
  <ul>
    <li v-for="track in topTracks" :key="track.songId">{{ track.songName }}</li>
  </ul>
  <ul v-for="(items, name) in artistItems" :key="name">
    <li v-for="item in items" :key="item.id">{{ item.name }}</li>
  </ul>
</template>
