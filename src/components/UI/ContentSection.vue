<script lang="ts" setup>
import type { cardItem } from '@/types';
import { useContentStore } from '@/stores/content';
import ContentCard from './ContentCard.vue';

const content = useContentStore();

defineProps<{
  title: String;
  items: cardItem[];
}>();
</script>

<template>
  <section class="content-section">
    <div class="content-section_top">
      <div class="content-section_top_title">{{ title }}</div>
      <a class="content-section_top_more" href="">Mostrar todos</a>
    </div>
    <ul class="content-section_list">
      <li class="item" v-for="item in items.slice(0, content.sectionColumns)" :key="item.title">
        <ContentCard :item="item" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
div.content-section_top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
div.content-section_top > .content-section_top_title {
  font-size: var(--fs-large);
  font-weight: bold;
}
a.content-section_top_more {
  font-size: var(--fs-small);
  font-weight: bold;
  color: var(--text-subdued);
}
a.content-section_top_more:hover {
  text-decoration-line: underline;
}

ul.content-section_list {
  --column-count: v-bind('content.sectionColumns');
  --col-width: v-bind('content.colWidth');
  --section-gap: v-bind('content.sectionGapAsPx');
  --min-container-width: 372px;
  column-gap: var(--section-gap);
  display: grid;
  grid-template-columns: repeat(var(--column-count), minmax(0, 1fr));
  grid-template-rows: 1fr;
  min-width: var(--min-container-width);
  list-style: none;
  padding-left: 0px;
}
ul.content-section_list > li {
  width: 100%;
}
</style>
