<script setup lang="ts">
import { ref, computed, watch, inject } from "vue";
import type { Ref } from "vue";
import { useElementSize } from "@vueuse/core";

// Parent must provide container element

export interface Props {
  text: string;
  // minSize?: number;
  // maxSize?: number;
}

const props = withDefaults(defineProps<Props>(), {
  // minSize: 1.5,
  // maxSize: 6,
});

const fontSizes = [1.5, 2, 3, 4, 5, 6];
const fontSize = ref(fontSizes[0]);
const fontSizeText = computed(() => {
  return fontSize.value + "rem";
});

const container = inject<Ref<HTMLElement>>("container");
const dynamicText = ref<HTMLSpanElement | null>(null);
const { width: containerWidth } = useElementSize(container);
const { width: textWidth } = useElementSize(dynamicText);

const averageLetterSizeAtOneRem = computed(() => {
  return (textWidth.value / props.text.length) / fontSize.value;
});

watch(
  [containerWidth, textWidth],
  ([newContainerWidth, newTextWidth], [prevCW, prevTW]) => {
    if (newContainerWidth != prevCW || newTextWidth != prevTW) {
      adjustFont();
    }
  }
);

function adjustFont() {
  const length = props.text.length;
  const maxWidth = containerWidth.value;
  const results = [];
  for (const size of fontSizes) {
    results.push(averageLetterSizeAtOneRem.value * size * length);
  }

  let resultIndex = 0;
  results.forEach((x, i) => {
    if (x < maxWidth) {
      resultIndex = i;
    }
  });

  fontSize.value = fontSizes[resultIndex];
}
</script>

<template>
  <span ref="dynamicText">{{ props.text }}</span>
</template>

<style scoped>
span {
  display: inline-block;
  font-weight: bold;
  font-size: v-bind("fontSizeText");
  overflow: hidden;
}
</style>
