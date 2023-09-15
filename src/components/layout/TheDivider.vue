<script lang="ts" setup>
import {
  minimizedDividerX,
} from '@/utils/styles';
import { useNavStore } from '@/stores/nav';
import { useLibraryStore } from '@/stores/library';
import { ref } from 'vue';

const library = useLibraryStore();
const nav = useNavStore();
const isDividerDragging = ref(false);
const appContainer = document.getElementById("app-container");

function clickingDivider() {
  if(library.isExpanded) isDividerDragging.value = true;
  else library.isExpanded = true;
}

document.addEventListener('mouseup', (e: MouseEvent) => {
  if (isDividerDragging.value) {
    console.log("mouseup!")
    if (library.isExpanded) {
      isDividerDragging.value = false;
      nav.lastSavedExpandedWidth = nav.width;
    }
  }
});

document.addEventListener('mousemove', (e: MouseEvent) => {
  if(!isDividerDragging.value) {
    return;
  }
  if(library.isExpanded) {
    if(e.clientX < nav.minExpandedWidth) {
      console.log("contracting nav");
      isDividerDragging.value = false;
      library.isExpanded = false;
      return;
    } else if (e.clientX > nav.maxWidth) {
      isDividerDragging.value = false;
    }
    console.log("mouse moving!");
    console.log(`appContainer.offsetLeft = ${appContainer?.offsetLeft}`);
    const containerOffsetLeft = appContainer?.offsetLeft as number;
    const pointerRelativeXpos = e.clientX - containerOffsetLeft;
    nav.width = Math.min(Math.max(pointerRelativeXpos - 3, nav.minExpandedWidth), nav.maxWidth);
  }
  
});

</script>

<template>
  <div id="divider" @mousedown="clickingDivider" ref="divider"></div>
</template>

<style scoped>
#divider {
  grid-area: divider;
  width: 100%;
  cursor: ew-resize;
}
#divider::before {
  content: '';
  display: block;
  width: 6px;
  height: 100%;
  margin: 0 auto;
}
#divider:hover::before {
  background: var(--text-base);
}
</style>
