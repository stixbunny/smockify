<script lang="ts" setup>
import { loadPlaylist } from '@/utils/spotifyLoader';
import msToTime from '@/utils/msToTime';
import localeDateString from '@/utils/localeDateString';
import ContentPresentation from '@/components/UI/ContentPresentation.vue';

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
  <section>
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
  </section>
</template>

<style>
</style>
