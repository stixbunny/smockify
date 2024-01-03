<script lang="ts" setup>
import 'overlayscrollbars/overlayscrollbars.css';
import '../../assets/scrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';
import { OverlayScrollbars, type PartialOptions } from 'overlayscrollbars';

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

const emit = defineEmits(['scroll']);

function scrolling(el: OverlayScrollbars) {
  emit('scroll', el.elements().viewport.scrollTop);
}
</script>

<template>
  <OverlayScrollbarsComponent :options="options" @os-scroll="(el) => scrolling(el)" defer>
    <slot></slot>
  </OverlayScrollbarsComponent>
</template>
