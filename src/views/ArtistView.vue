<script lang="ts" setup>
import NotYetImplemented from '@/components/NotYetImplemented.vue';
import { loadArtist } from '@/utils/spotifyLoader';

const props = defineProps({
  id: { type: String, required: true },
});

const { topTracks, artist } = await loadArtist(props.id);
</script>

<template>
  <h1>{{ artist?.name }}</h1>
  <ul>
    <li v-for="track in topTracks" :key="track.songId">{{ track.songName }}</li>
  </ul>
</template>
