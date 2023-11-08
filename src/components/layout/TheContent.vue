<script lang="ts" setup>
import ContentNav from '../content/ContentNav.vue';
import { RouterView } from 'vue-router';
import ScrollableComponent from '../UI/ScrollableComponent.vue';
import ContentView from '../content/ContentView.vue';
import { useContentStore } from '@/stores/content';
import { ref } from 'vue';

const content = useContentStore();

const el = ref<HTMLElement | null>(null);
const notTransparent = ref(false);

function scrolling(height: number) {
  console.log(height);
  if (height > 350) {
    notTransparent.value = true;
  } else notTransparent.value = false;
}
</script>

<template>
  <div ref="el">
    <ContentNav :not-transparent="notTransparent" />
    <RouterView v-slot="slotProps">
      <Suspense>
        <ScrollableComponent @scroll="(el) => scrolling(el)">
          <ContentView>
            <Component :is="slotProps.Component" />
          </ContentView>
        </ScrollableComponent>
      </Suspense>
    </RouterView>
  </div>
</template>

<style scoped>
div {
  min-height: 0;
  height: 100%;
  position: relative;
  /* padding-inline: 16px; */
  isolation: isolate;

  --accent-color: v-bind('content.selectedColor');
  --nav-opacity: 0;
}
</style>
