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
  if(library.isExpanded) {
    console.log("clicked divider while expanded nav")
    console.log("divider dragging");
    isDividerDragging.value = true;
  } 
  else {
    console.log("clicked divider while contracted nav");
    console.log("expanding nav");
    library.isExpanded = true;
  }
}

document.addEventListener('mouseup', (e: MouseEvent) => {
  if (isDividerDragging.value) {
    console.log("mouse up while dragging");
    if (library.isExpanded) {
      isDividerDragging.value = false;
      console.log("no longer dragging");
      nav.lastSavedExpandedWidth = nav.width;
      console.log(`lastSavedExpandedWidth = ${nav.lastSavedExpandedWidth}`);
    }
    isDividerDragging.value = false;
  }
});

document.addEventListener('mousemove', (e: MouseEvent) => {
  if(!isDividerDragging.value) {
    console.log("mouse moving but not dragging, nothing happens");
    return;
  }
  if(library.isExpanded) {
    if(e.clientX < nav.minExpandedWidth - 8) {
      console.log(`${e.clientX}px is too small`);
      isDividerDragging.value = false;
      library.isExpanded = false;
      console.log("no longer dragging, contracting nav");
      return;
    } else if (e.clientX > nav.maxWidth + 8) {
      console.log(`${e.clientX}px is too big`);
      nav.width = nav.maxWidth;
      isDividerDragging.value = false;
      return;
    }
    console.log("mouse moving!");
    console.log("nav width is " + e.clientX + "px")
    nav.width = e.clientX;
    // console.log(`appContainer.offsetLeft = ${appContainer?.offsetLeft}`);
    // const containerOffsetLeft = appContainer?.offsetLeft as number;
    // const pointerRelativeXpos = e.clientX - containerOffsetLeft;
    // nav.width = Math.min(Math.max(pointerRelativeXpos - 3, nav.minExpandedWidth), nav.maxWidth);
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
