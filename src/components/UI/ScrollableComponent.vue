<script lang="ts" setup>
import 'overlayscrollbars/overlayscrollbars.css';
import '../../assets/scrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';
import type { PartialOptions } from 'overlayscrollbars';

const options: PartialOptions = {
  overflow: {
    // y: 'visible-scroll',
    // x: 'hidden'
  },
  scrollbars: {
    theme: 'os-theme-smockify',
    visibility: 'visible',
    clickScroll: true,
    autoHide: 'leave',
    autoHideDelay: 700,
  },
};
</script>

<template>
  <OverlayScrollbarsComponent :options="options" defer>
    <slot></slot>
  </OverlayScrollbarsComponent>
</template>
