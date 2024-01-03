<script setup lang="ts">
import ContentTable from './ContentTable.vue';
import TableSong from './TableSong.vue';
import msToTime from '@/utils/msToUnpaddedTime';
import type { artistTopTrack } from '@/types';

const props = defineProps<{
  songs: artistTopTrack[];
}>();
</script>

<template>
  <ContentTable>
    <template #header>
        <th></th>
        <th></th>
        <th></th>
    </template>
    <template #body>
      <tr
        v-for="(song, j) in props.songs"
        :key="j + '-artist-table-song'"
        class="artist-table_song"
      >
        <td class="artist-table_song_number">{{ j + 1 }}</td>
        <td class="artist-table_song_name">
          <TableSong
            :name="song.songName"
            :explicit="song.explicit"
            :id="song.songId"
            :img="song.imgUrl"
          />
        </td>
        <td class="artist-table_song_time">{{ msToTime(song.duration_ms) }}</td>
      </tr>
    </template>
  </ContentTable>
</template>

<style scoped>
th:first-child,
th:nth-child(3) {
  width: 50px;
}

th:nth-child(2) {
  text-align: left;
}
td:first-child,
td:nth-child(3) {
  text-align: center;
}
td:nth-child(2) {
  text-align: left;
}
.artist-table_song_number,
.artist-table_song_time {
  color: var(--text-subdued);
}
.artist-table_song_number {
  font-size: var(--fs-medium);
}
.artist-table_song_time {
  font-size: var(--fs-small);
}
.artist-table_song {
  color: var(--text-subdued);
}
.artist-table_song:hover {
  background-color: var(--background-tinted-highlight);
  border-radius: 5px;
  color: var(--text-base);
  .artist-table_song_number {
    color: inherit;
    border-radius: 5px 0 0 5px;
  }
  .artist-table_song_time {
    border-radius: 0 5px 5px 0;
  }
  .artist-table_song_name {
    color: inherit;
  }
}
</style>
