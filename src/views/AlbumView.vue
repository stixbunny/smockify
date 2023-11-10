<script lang="ts" setup>
import { loadAlbum } from '@/utils/spotifyLoader';
import msToTime from '@/utils/msToTime';
import localeDateString from '@/utils/localeDateString';

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
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Título</th>
        <th>clock-icon</th>
      </tr>
    </thead>
  </table>
  <div v-for="disc in album?.discs" :key="'disc - ' + disc.number">
    <div v-if="album?.numberOfDiscs ? album.numberOfDiscs > 1 : false">{{ `Disco ${disc.number}`}}</div>
    <table>
      <tbody>
        <tr v-for="song in disc.songs" :key="'song - ' + song.id">
          <th>{{ song.number }}</th>
          <th>{{ song.name }}<span v-if="song.explicit"> (E)</span></th>
          <th>{{ msToTime(song.durationMs) }}</th>
        </tr>
      </tbody>
    </table>
  </div>
  <section>
    <p>{{ releaseString }}</p>
    <p v-for="copyright in album?.copyrights" :key="copyright">{{ copyright }}</p>
  </section>
</template>
