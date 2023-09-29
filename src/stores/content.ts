import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useWindowSize } from '@vueuse/core';
import { useNavStore } from './nav';

export const useContentStore = defineStore('content', () => {
  const nav = useNavStore();
  const {width: windowWidth} = useWindowSize();
  const width = computed(() => {
    return windowWidth.value - nav.width - 3 * 8;
  })

  const xPaddingAsNumber = computed(() => {
    const base = 16;
    const grow = width.value > 520 ? (width.value - 520)/50 : 0;
    return base + grow;
  })

  const xPadding = computed(() => {
    return `${xPaddingAsNumber.value}px`;
  })

  const size = computed(() => {
    if(width.value > 1200) return 'xxx-large';
    if(width.value > 1000) return 'xx-large';
    if(width.value > 877) return 'x-large';
    if(width.value > 700) return 'large';
    if(width.value > 520) return 'medium';
    return 'small'; //<520
  })

  const maxSecHeight = 420;
  const minSecHeight = 260;
  const sectionCardRatio = 0.63;

  const sectionGap = computed(() => {
    switch(size.value) {
      case 'small':
        return 12;
      case 'medium':
        return 18;
      case 'large':
        return 18;
      case 'x-large':
        return 24;
      case 'xx-large':
        return 24;
      case 'xxx-large':
        return 24;
    }
    return 0;
  });

  const sectionGapAsPx = computed(() => {
    return `${sectionGap.value}px`;
  })

  const sectionColumns = computed(() => {
    const workingSpace = 0.89 * width.value;
    console.log(`working with ${workingSpace}`)
    const a = workingSpace / (sectionCardRatio * minSecHeight);
    const b = workingSpace / (sectionCardRatio * maxSecHeight);
    const aResult = Math.floor(a);
    const bResult = Math.ceil(b);
    // if(aResult === bResult) return aResult;
    return bResult;
  });

  const colWidth = computed(() => {
    const spacing = sectionGap.value * (sectionColumns.value - 1) + 2 * xPaddingAsNumber.value;
    const workingSpace = width.value - spacing;
    const result = workingSpace / sectionColumns.value;

    return Math.floor(result);
  })

  return { width, xPadding, size, colWidth, sectionColumns, sectionGap, sectionGapAsPx };
});