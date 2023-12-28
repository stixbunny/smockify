<script setup lang="ts">
import IconClock from '../icons/IconClock.vue';
import ContentTable from './ContentTable.vue';
import TableSong from './TableSong.vue';
import msToTime from '@/utils/msToUnpaddedTime';
import addedOnTime from '@/utils/addedOnTime';
import type { playlistItem } from '@/types';

const props = defineProps<{
  songs: playlistItem[];
}>();
</script>

<template>
  <ContentTable>
    <template #header>
      <th>#</th>
      <th>Título</th>
      <th>Álbum</th>
      <th>Fecha en la que se añadió</th>
      <th><IconClock /></th>
    </template>
    <template #body>
      <tr
        v-for="(song, j) in props.songs"
        :key="j + '-playlist-table-song'"
        class="playlist-table_song"
      >
        <td class="playlist-table_song_number">{{ j + 1 }}</td>
        <td class="playlist-table_song_name">
          <TableSong
            :name="song.name"
            :explicit="song.explicit"
            :artists="song.artists"
            :id="song.id"
            :img="song.image"
          />
        </td>
        <td class="playlist-table_song_album">{{ song.albumName }}</td>
        <td class="playlist-table_song_added">{{ addedOnTime(song.addedOn) }}</td>
        <td class="playlist-table_song_time">{{ msToTime(song.duration) }}</td>
      </tr>
    </template>
  </ContentTable>
</template>

<style scoped>
th:first-child,
th:nth-child(5) {
  width: 50px;
}
th:nth-child(2) {
  width: 50%;
}

th:nth-child(2),
th:nth-child(3),
th:nth-child(4) {
  text-align: left;
}
td:first-child,
td:nth-child(5) {
  text-align: center;
}
td:nth-child(2),
td:nth-child(3),
td:nth-child(4) {
  text-align: left;
}
.playlist-table_song_number,
.playlist-table_song_time {
  color: var(--text-subdued);
}
.playlist-table_song_number {
  font-size: var(--fs-medium);
}
.playlist-table_song_time,
.playlist-table_song_album,
.playlist-table_song_added {
  font-size: var(--fs-small);
}
.playlist-table_song {
  color: var(--text-subdued);
}
.playlist-table_song:hover {
  background-color: var(--background-tinted-highlight);
  border-radius: 5px;
  color: var(--text-base);
  .playlist-table_song_number {
    color: inherit;
    border-radius: 5px 0 0 5px;
  }
  .playlist-table_song_time {
    border-radius: 0 5px 5px 0;
  }
  .playlist-table_song_name {
    color: inherit;
  }
}
</style>
