import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import {
  minHeaderWidth,
  minContentWidth,
  minimizedDividerX,
  navMinimizedWidth
} from '@/utils/styles';
import { useWindowSize } from '@vueuse/core';
useWindowSize

export const useNavStore = defineStore('nav', () => {
  // const isExpanded = ref(true);
  const minExpandedWidth: number = Number(minHeaderWidth.replace(/\D/g, ''));
  const minimizedWidth: number = Number(navMinimizedWidth.replace(/\D/g, ''));
  const contentSpace: number = Number(minContentWidth.replace(/\D/g, ''));

  const width = ref(minExpandedWidth);
  const lastSavedExpandedWidth = width;
  const widthAsPx = computed(() => {
    return width.value + 'px';
  });

  const { width: windowWidth } = useWindowSize();
  const maxWidth = windowWidth.value - contentSpace;

  return { minExpandedWidth, minimizedWidth, contentSpace, width, widthAsPx, lastSavedExpandedWidth, maxWidth };
});