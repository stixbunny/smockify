<script lang="ts" setup>
import type { cardItem } from '@/types';
import { getRoute } from '../../utils/routes';
import { RouterLink } from 'vue-router';

defineProps<{
  item: cardItem;
}>();
</script>

<template>
  <RouterLink :to="getRoute(item.id, item.type)">
    <div class="content-card" :class="{ 'artist-card': item.type === 'artist' }">
      <img :src="item.img" :alt="item.title + ' img'" loading="lazy" />
      <div class="content-card_title">{{ item.title }}</div>
      <div class="content-card_subtitle">{{ item.subtitle }}</div>
    </div>
  </RouterLink>
</template>

<style scoped>
div.content-card {
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: var(--background-highlight);
  transition: background-color 0.3s ease;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
div.content-card:hover {
  background-color: var(--background-elevated-base);
}
.artist-card {
  img {
    border-radius: 100%;
  }
}
img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 16px;
}
div.content-card_title {
  display: block;
  font-size: var(--fs-medium);
  font-weight: bold;
  margin-bottom: 0.1em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
div.content-card_subtitle {
  display: -webkit-box;
  font-size: var(--fs-small);
  color: var(--text-subdued);
  text-overflow: ellipsis;
  overflow: hidden;
  /* white-space: nowrap; */
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
