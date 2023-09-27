<script lang="ts" setup>
import ContentNav from '../content/ContentNav.vue';
import { RouterView } from 'vue-router';
import ScrollableComponent from '../UI/ScrollableComponent.vue';
import ContentView from '../content/ContentView.vue';
</script>

<template>
  <div>
    <ContentNav />
    <RouterView v-slot="slotProps">
      <ScrollableComponent>
        <ContentView>
          <Component :is="slotProps.Component" />
        </ContentView>
      </ScrollableComponent>
    </RouterView>
  </div>
</template>

<style scoped>
div {
  min-height: 0;
  height: 100%;
  position: relative;
  /* padding-inline: 16px; */
}
</style>
