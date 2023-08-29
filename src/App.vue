<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router';
// import HelloWorld from './components/HelloWorld.vue';
import TheMainNav from './components/layout/TheMainNav.vue';
import ThePlayer from './components/layout/ThePlayer.vue';
import TheContent from './components/layout/TheContent.vue';
import {
  mobileMaxWidth,
  startingHeaderWidth,
  minHeaderWidth,
  minContentWidth,
} from '@/utils/styles';
import { useMediaQuery } from '@vueuse/core';
import { computed, ref, watch } from 'vue';
import { useWindowSize } from '@vueuse/core';
import { useLibraryStore } from '@/stores/library';

const library = useLibraryStore();

const isMobile = useMediaQuery(`(max-width: ${mobileMaxWidth})`);
const isDividerDragging = ref(false);
const appContainer = ref<HTMLDivElement>();
const divider = ref<HTMLDivElement>();

const { width } = useWindowSize();
const minNavWidth = Number(minHeaderWidth.replace(/\D/g, ''));
const maxNavWidth = width.value - Number(minContentWidth.replace(/\D/g, ''));
const navWidthNumber = ref(minNavWidth);
const navWidth = computed(() => {
  return navWidthNumber.value + 'px';
});
let lastSavedExpandedNavSize = minNavWidth;

function clickingDivider() {
  isDividerDragging.value = true;
}
function movingDivider(e: MouseEvent) {
  if (!isDividerDragging.value) {
    return false;
  }
  const containerOffsetLeft = appContainer.value?.offsetLeft as number;
  const pointerRelativeXpos = e.clientX - containerOffsetLeft;
  navWidthNumber.value = Math.min(Math.max(pointerRelativeXpos - 3, minNavWidth), maxNavWidth);
}
document.addEventListener('mouseup', (e: MouseEvent) => {
  if (isDividerDragging.value) {
    if (library.isExpanded) {
      isDividerDragging.value = false;
      lastSavedExpandedNavSize = navWidthNumber.value;
    } else {
      library.isExpanded = true;
    }
  }
});

watch(
  () => library.isExpanded,
  () => {
    if (!library.isExpanded) {
      navWidthNumber.value = 24 * 3;
    } else {
      navWidthNumber.value = lastSavedExpandedNavSize;
    }
  }
);
</script>

<template>
  <div class="app-container" ref="appContainer" v-if="isMobile">
    <main>
      <TheContent />
      <ThePlayer />
    </main>
    <footer>
      <TheMainNav />
    </footer>
  </div>
  <div class="app-container" ref="appContainer" v-else>
    <header>
      <TheMainNav />
    </header>
    <div id="divider" @mousedown="clickingDivider" @mousemove="movingDivider" ref="divider"></div>
    <main>
      <TheContent />
    </main>
    <footer>
      <ThePlayer />
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  width: 100%;
  height: 100dvh;
  display: grid;
  grid-template-columns: v-bind(navWidth) 8px auto;
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
  border-radius: 8px;
  background-color: var(--background-base);
}
footer {
  grid-area: player;
  width: 100%;
}
#divider {
  grid-area: divider;
  width: 100%;
  cursor: ew-resize;
}
#divider::before {
  content: '';
  display: block;
  width: 1px;
  height: 100%;
  margin: 0 auto;
}
#divider:hover::before {
  background: var(--text-base);
}
/* tablet or small screen */
@media (min-width: 561px) and (max-width: 768px) {
  .app-container {
    grid-template-rows: auto 160px;
  }
}
/* mobile */
@media (max-width: 560px) {
  #divider {
    display: none;
  }
  footer {
    position: fixed;
    bottom: 0px;
    height: 80px;
  }
  .app-container {
    position: relative;
    display: block;
    height: 100%;
  }
}
</style>
