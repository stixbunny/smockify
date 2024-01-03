<script lang="ts" setup>
import { ref } from 'vue';
import type { artistDiscography } from '@/types';
import { useContentStore } from '@/stores/content';
import ContentCard from './ContentCard.vue';
import TabButton from '../buttons/TabButton.vue';

const content = useContentStore();

const props = defineProps<{
  discography: artistDiscography;
}>();

const discographyTab = ref<'albums' | 'singles' | 'compilations'>('albums');
const selectedDiscography = ref(props.discography.albums);

function switchDiscographyTab(newDiscographyTab: 'albums' | 'singles' | 'compilations') {
  selectedDiscography.value = props.discography[newDiscographyTab];
  discographyTab.value = newDiscographyTab;
}
</script>

<template>
  <section class="discography-section">
    <div class="discography-section_top">
      <div class="discography-section_top_title">Discografía</div>
      <a class="discography-section_top_more" href="">Mostrar todos</a>
    </div>
    <div class="discography-section_tabs">
      <TabButton
        v-for="(item, name) in discography"
        :key="name"
        @click="switchDiscographyTab(name)"
        :data-info="name"
        :active="discographyTab === name"
      >
        {{ item.name }}
      </TabButton>
    </div>
    <ul class="discography-section_list">
      <li class="item" v-for="item in selectedDiscography.content?.slice(0, content.sectionColumns)" :key="item.id + item.type">
        <ContentCard :item="{ img: item.image, title: item.name, id: item.id, type: 'album' }" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
div.discography-section_top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.discography-section_top_title {
  font-size: var(--fs-large);
  font-weight: bold;
}
a.discography-section_top_more {
  font-size: var(--fs-small);
  font-weight: bold;
  color: var(--text-subdued);
}
a.discography-section_top_more:hover {
  text-decoration-line: underline;
}
.discography-section_tabs {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 2rem;
}
ul.discography-section_list {
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
ul.discography-section_list > li {
  width: 100%;
}
</style>
