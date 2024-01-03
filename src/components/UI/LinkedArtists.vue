<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { getRoute } from '@/utils/routes';
import type { simpleArtist } from '@/types';
import TextDot from '../text/TextDot.vue';
interface Props {
  artists: simpleArtist[];
  separator?: string;
}
const props = withDefaults(defineProps<Props>(), {
  separator: ', ',
});
</script>
<template>
  <span v-for="(artist, index) in props.artists" :key="index + '-linked-artist'">
    <RouterLink :to="getRoute(artist.id, 'artist')">
      {{ artist.name }}
    </RouterLink>
    <template v-if="index < artists.length - 1">
      <span v-if="props.separator === 'dot'"><TextDot /></span>
      <span v-else v-html="props.separator"></span>
    </template>
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
