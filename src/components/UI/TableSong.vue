<script setup lang="ts">
import LinkedArtists from './LinkedArtists.vue';
import IconExplicit from '../icons/IconExplicit.vue';
import type { simpleArtist } from '@/types';

interface Props {
  name: string;
  explicit: boolean;
  artists: simpleArtist[];
}

const props = defineProps<Props>();
</script>

<template>
  <div class="table-song">
    <p class="table-song_name">{{ props.name }}</p>
    <p class="table-song_artists">
      <IconExplicit v-if="props.explicit" />
      <LinkedArtists :artists="props.artists" />
    </p>
  </div>
</template>

<style scoped>
.table-song {
  display: flex;
  flex-direction: column;
}
.table-song_name,
.table-song_artists {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: var(--fs-small);
}
.table-song_name {
  font-size: var(--fs-medium);
}
</style>
