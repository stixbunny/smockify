<script setup lang="ts">
import LinkedArtists from './LinkedArtists.vue';
import IconExplicit from '../icons/IconExplicit.vue';
import { getRoute } from '@/utils/routes';
import type { simpleArtist } from '@/types';

interface Props {
  name: string;
  id: string;
  explicit: boolean;
  artists?: simpleArtist[];
  img?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="table-song">
    <div v-if="props.img" class="table-song_img">
      <img :src="props.img" alt="" />
    </div>
    <div class="table-song_content">
      <p class="table-song_content_name">
        <RouterLink :to="getRoute(props.id, 'song')">
          {{ props.name }}
        </RouterLink>
      </p>
      <p class="table-song_content_artists">
        <IconExplicit v-if="props.explicit" :style="{ 'margin-right': '0.5rem'}"/>
        <LinkedArtists v-if="props.artists" :artists="props.artists" />
      </p>
    </div>
  </div>
</template>

<style scoped>
.table-song {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.7rem;
}
.table-song_img {
  display: flex;
  align-items: center;
  width: 45px;
  max-width: 45px;
  aspect-ratio: 1 / 1;
  flex-grow: 1;
}
img {
  width: 45px;
  aspect-ratio: 1 / 1;
  border-radius: 5px;
}
.table-song_content {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.table-song_content_name,
.table-song_content_artists {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: var(--fs-small);
  /* display: inline-flex;
  align-items: center;
  gap: 0.4rem; */
}
.table-song_content_name {
  font-size: var(--fs-medium);
  color: var(--text-base);
}
a {
  color: inherit;
}
a:hover {
  text-decoration: underline;
}
</style>
