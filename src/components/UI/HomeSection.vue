<script lang="ts" setup>
import type { cardItem } from '@/types';
import { useContentStore } from '@/stores/content';
import HomeSectionCard from './HomeSectionCard.vue';

const content = useContentStore();

const props = defineProps<{
  title: String;
  items: cardItem[];
}>();
</script>

<template>
  <section class="home-section">
    <div class="top">
      <div class="title">{{ title }}</div>
      <a class="more" href="">Mostrar todos</a>
    </div>
    <ul class="list">
      <li class="item" v-for="item in items.slice(0, content.sectionColumns)" :key="item.title">
        <HomeSectionCard :item="item" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
div.top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
div.top > .title {
  font-size: var(--fs-large);
  font-weight: bold;
}
a.more {
  font-size: var(--fs-small);
  font-weight: bold;
  color: var(--text-subdued);
}
a.more:hover {
  text-decoration-line: underline;
}

ul.list {
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
ul.list > li {
  width: 100%;
}
</style>
