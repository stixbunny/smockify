<script lang="ts" setup>
import { loadPlaylist } from '@/utils/spotifyLoader';
import msToTime from '@/utils/msToTime';
import localeDateString from '@/utils/localeDateString';

const props = defineProps({
  id: { type: String, required: true },
});

const { playlist } = await loadPlaylist(props.id);
const songs = playlist?.songs;
</script>

<template>
  <p>Lista</p>
  <h1>{{ playlist?.name }}</h1>
  <p>
    <span>{{ playlist?.ownerName }}</span>
    <span>{{ playlist?.likes }} me gusta</span>
    <span v-if="playlist?.numberOfSongs ? playlist.numberOfSongs > 1 : false">
      {{ playlist?.numberOfSongs }} canciones,
    </span>
    <span v-else>{{ playlist?.numberOfSongs }} canción, </span>
    <span>{{ msToTime(playlist?.totalDuration ? playlist.totalDuration : 0) }}</span>
  </p>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Título</th>
        <th>Álbum</th>
        <th>Fecha en la que se añadió</th>
        <th>clock-icon</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(song, index) in songs" :key="'song - ' + song.id">
        <th>{{ index + 1 }}</th>
        <th>{{ song.name }}<span v-if="song.explicit"> (E)</span></th>
        <th>{{ song.albumName }}</th>
        <th>{{ localeDateString(song.addedOn) }}</th>
        <th>{{ msToTime(song.duration) }}</th>
      </tr>
    </tbody>
  </table>
</template>
