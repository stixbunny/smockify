<script lang="ts" setup>
import { loadPlaylist } from '@/utils/spotifyLoader';
import ContentPresentation from '@/components/UI/ContentPresentation.vue';
import PlaylistTable from '@/components/UI/PlaylistTable.vue';

const props = defineProps({
  id: { type: String, required: true },
});

const { playlist } = await loadPlaylist(props.id);
const songs = playlist?.songs;
</script>

<template>
  <ContentPresentation
    v-if="playlist"
    type="playlist"
    :image="playlist.image"
    :name="playlist.name"
    :description="playlist.description"
    :author="playlist.ownerName"
    :likes="playlist.likes"
    :number-of-songs="playlist.numberOfSongs"
    :total-duration="playlist.totalDuration"
  ></ContentPresentation>
  <PlaylistTable v-if="songs" :songs="songs"></PlaylistTable>
</template>

<style scoped>
* + * {
  margin-top: 2rem;
}
</style>
