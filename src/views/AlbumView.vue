<script lang="ts" setup>
import { loadAlbum } from '@/utils/spotifyLoader';
import msToTime from '@/utils/msToTime';
import localeDateString from '@/utils/localeDateString';
import AlbumTable from '@/components/UI/AlbumTable.vue';

const props = defineProps({
  id: { type: String, required: true },
});

const { album } = await loadAlbum(props.id);
const releaseString = album?.releaseDate ? localeDateString(album.releaseDate) : album?.releaseYear;
</script>

<template>
  <p>{{ album?.albumType }}</p>
  <h1>{{ album?.name }}</h1>
  <p>
    <span v-for="artist in album?.artists" :key="artist.id + '-author'">
      {{ artist.name + ' - ' }}
    </span>
    <span>{{ album?.releaseYear + ' - ' }}</span>
    <span v-if="album?.totalTracks ? album.totalTracks > 1 : false">
      {{ album?.totalTracks }} canciones,
    </span>
    <span v-else>{{ album?.totalTracks }} canción, </span>
    <span>{{ msToTime(album?.totalDuration ? album.totalDuration : 0) }}</span>
  </p>
  <AlbumTable :discs="album? album.discs : []" />
  <section>
    <p>{{ releaseString }}</p>
    <p v-for="copyright in album?.copyrights" :key="copyright">{{ copyright }}</p>
  </section>
</template>
