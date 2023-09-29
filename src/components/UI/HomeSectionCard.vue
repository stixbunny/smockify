<script lang="ts" setup>
import type { cardItem } from '@/types';

const props = defineProps<{
  item: cardItem;
}>();
</script>

<template>
  <div class="card">
    <img :src="item.img" :alt="item.title + ' img'" loading="lazy">
    <div class="title">{{ item.title }}</div>
    <div class="subtitle">{{ item.subtitle }}</div>
  </div>
</template>

<style scoped>
div.card {
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: var(--background-highlight);
  transition: background-color .3s ease;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
div.card:hover {
  background-color: var(--background-elevated-base);
}
img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 16px;
}
div.title {
  display: block;
  font-size: var(--fs-medium);
  font-weight: bold;
  margin-bottom: 0.1em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
div.subtitle {
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