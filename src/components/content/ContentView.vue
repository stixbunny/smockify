<script lang="ts" setup>
import { useContentStore } from '@/stores/content';

const content = useContentStore();
</script>

<template>
  <div class="content-view">
    <slot></slot>
  </div>
</template>

<style scoped>
div.content-view {
  height: 100%;
  padding-top: 56px;
  padding-inline: v-bind('content.xPadding');
}
</style>
