<script setup lang="ts">
import IconClock from '../icons/IconClock.vue';
import ContentTable from './ContentTable.vue';
import TableSong from './TableSong.vue';
import msToTime from '@/utils/msToTime';
import type { albumDisc } from '@/types';

const props = defineProps<{
  discs: albumDisc[];
}>();

console.log(props.discs);
</script>

<template>
  <ContentTable>
    <template #header>
      <td>#</td>
      <td>Título</td>
      <td><IconClock /></td>
    </template>
    <template #body>
      <template v-for="(disc, i) in props.discs" :key="i + '-album-table-disc'">
        <tr v-if="props.discs.length > 1" class="album-table_disc">
          <td>{{ disc.number }}</td>
          <td>{{ 'Disco ' + disc.number }}</td>
        </tr>
        <tr
          v-for="(song, j) in disc.songs"
          :key="j + '-' + i + '-album-table-song'"
          class="album-table_song"
        >
          <td>{{ song.number }}</td>
          <td><TableSong :name="song.name" :explicit="song.explicit" :artists="song.artists" /></td>
          <td>{{ msToTime(song.durationMs) }}</td>
        </tr>
      </template>
    </template>
  </ContentTable>
</template>

<style scoped>
td:first-child {
  text-align: right;
}
td:nth-child(2) {
  text-align: left;
}
td:nth-child(3) {
  text-align: center;
}
.album-table_disc {
  color: var(--text-subdued);
}
.album-table_song > td:first-child,
.album-table_song > td:nth-child(3) {
  color: var(--text-subdued);
  font-size: var(--fs-medium);
}
</style>
