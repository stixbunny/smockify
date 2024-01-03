<script setup lang="ts">
import IconClock from '../icons/IconClock.vue';
import IconDisc from '../icons/IconDisc.vue';
import ContentTable from './ContentTable.vue';
import TableSong from './TableSong.vue';
import msToTime from '@/utils/msToUnpaddedTime';
import type { albumDisc } from '@/types';

const props = defineProps<{
  discs: albumDisc[];
}>();
</script>

<template>
  <ContentTable>
    <template #header>
      <th>#</th>
      <th>Título</th>
      <th><IconClock /></th>
    </template>
    <template #body>
      <template v-for="(disc, i) in props.discs" :key="i + '-album-table-disc'">
        <tr v-if="props.discs.length > 1" class="album-table_disc">
          <td><IconDisc /></td>
          <td>{{ 'Disco ' + disc.number }}</td>
        </tr>
        <tr
          v-for="(song, j) in disc.songs"
          :key="j + '-' + i + '-album-table-song'"
          class="album-table_song"
        >
          <td class="album-table_song_number">{{ song.number }}</td>
          <td class="album-table_song_name">
            <TableSong
              :name="song.name"
              :explicit="song.explicit"
              :artists="song.artists"
              :id="song.id"
            />
          </td>
          <td class="album-table_song_time">{{ msToTime(song.durationMs) }}</td>
        </tr>
      </template>
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
.album-table_disc {
  color: var(--text-subdued);
}
.album-table_song_number,
.album-table_song_time {
  color: var(--text-subdued);
}
.album-table_song_number {
  font-size: var(--fs-medium);
}
.album-table_song_name {
  max-width: 100%;
}
.album-table_song {
  color: var(--text-subdued);
}
.album-table_song:hover {
  background-color: var(--background-tinted-highlight);
  border-radius: 5px;
  color: var(--text-base);
  .album-table_song_number {
    color: inherit;
    border-radius: 5px 0 0 5px;
  }
  .album-table_song_time {
    border-radius: 0 5px 5px 0;
  }
  .album-table_song_name {
    color: inherit;
  }
}
</style>
