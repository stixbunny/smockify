<script lang="ts" setup>
import { useNavStore } from '@/stores/nav';
import { useLibraryStore } from '@/stores/library';
import { ref } from 'vue';

const library = useLibraryStore();
const nav = useNavStore();
const isDividerDragging = ref(false);

function clickingDivider() {
  if(library.isExpanded) {
    isDividerDragging.value = true;
  } 
  else {
    library.isExpanded = true;
  }
}

document.addEventListener('mouseup', (e: MouseEvent) => {
  if (isDividerDragging.value) {
    if (library.isExpanded) {
      isDividerDragging.value = false;
      nav.lastSavedExpandedWidth = nav.width;
    }
    isDividerDragging.value = false;
  }
});

document.addEventListener('mousemove', (e: MouseEvent) => {
  if(!isDividerDragging.value) {
    return;
  }
  if(library.isExpanded) {
    if(e.clientX < nav.minExpandedWidth - 8) {
      isDividerDragging.value = false;
      library.isExpanded = false;
      return;
    } else if (e.clientX > nav.maxWidth + 8) {
      nav.width = nav.maxWidth;
      isDividerDragging.value = false;
      return;
    }
    nav.width = e.clientX;
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
