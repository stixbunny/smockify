<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { getRoute } from '@/utils/routes';
import type { simpleArtist } from '@/types';
const props = defineProps<{
  artists: simpleArtist[];
}>();
</script>
<template>
  <span v-for="(artist, index) in props.artists" :key="index + '-linked-artist'">
    <RouterLink :to="getRoute(artist.id, 'artist')">
      {{ artist.name }}
    </RouterLink>
    <span v-if="index < artists.length - 1">, </span>
  </span>
</template>
<style scoped>
a {
  color: inherit;
}
a:hover {
  text-decoration: underline;
}
span {
  font-weight: bold;
}
</style>
