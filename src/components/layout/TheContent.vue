<script lang="ts" setup>
import ContentNav from '../content/ContentNav.vue';
import { RouterView } from 'vue-router';
import ScrollableComponent from '../UI/ScrollableComponent.vue';
</script>

<template>
  <div>
    <ContentNav />
    <RouterView v-slot="slotProps">
      <ScrollableComponent>
        <Component :is="slotProps.Component" />
      </ScrollableComponent>
    </RouterView>
  </div>
</template>

<style scoped>
div {
  min-height: 0;
  height: 100%;
  position: relative;
}
</style>
