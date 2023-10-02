<script setup lang="ts">
import TheMainNav from './components/layout/TheMainNav.vue';
import ThePlayer from './components/layout/ThePlayer.vue';
import TheContent from './components/layout/TheContent.vue';
import TheDivider from './components/layout/TheDivider.vue';
import { mobileMaxWidth } from '@/utils/styles';
import { useMediaQuery } from '@vueuse/core';
import { watch } from 'vue';
import { useLibraryStore } from '@/stores/library';
import { useNavStore } from './stores/nav';
import NotYedImplemented from './components/NotYedImplemented.vue';

const library = useLibraryStore();
const nav = useNavStore();

const isMobile = useMediaQuery(`(max-width: ${mobileMaxWidth})`);

watch(
  () => library.isExpanded,
  () => {
    if (!library.isExpanded) {
      nav.width = nav.minimizedWidth;
    } else {
      nav.width = nav.lastSavedExpandedWidth;
    }
  }
);
</script>

<template>
  <div id="app-container" ref="appContainer" v-if="isMobile">
    <!-- <main>
      <TheContent />
      <ThePlayer />
    </main>
    <footer>
      <TheMainNav />
    </footer> -->
    <NotYedImplemented />
  </div>
  <div id="app-container" ref="appContainer" v-else>
    <header>
      <TheMainNav />
    </header>
    <TheDivider />
    <main>
      <TheContent />
    </main>
    <footer>
      <ThePlayer />
    </footer>
  </div>
</template>

<style scoped>
#app-container {
  width: 100%;
  height: 100dvh;
  display: grid;
  grid-template-columns: v-bind('nav.widthAsPx') 8px auto;
  grid-template-rows: auto 80px;
  grid-template-areas:
    'nav divider content'
    'player player player';
  height: 100%;
  position: relative;
}
header {
  grid-area: nav;
  /* grid-item has min-width/height to auto as default and cannot shrink below it's contents*/
  min-height: 0;
  height: 100%;
}
main {
  grid-area: content;
  min-height: 0;
  height: 100%;
  border-radius: 8px;
  background-color: var(--background-base);
}
footer {
  grid-area: player;
  width: 100%;
  margin-top: 8px;
}
/* tablet or small screen */
@media (min-width: 561px) and (max-width: 768px) {
  #app-container {
    grid-template-rows: auto 160px;
  }
}
/* mobile */
@media (max-width: 560px) {
  footer {
    position: fixed;
    bottom: 0px;
    height: 80px;
  }
  #app-container {
    position: relative;
    display: block;
    height: 100%;
  }
}
</style>
