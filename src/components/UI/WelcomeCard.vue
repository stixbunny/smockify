<script lang="ts" setup>
import ColorThief from 'colorthief';
import { ref } from 'vue';
import { useContentStore } from '@/stores/content';

const { setColor } = useContentStore();
const colorThief = new ColorThief();
const color = ref([0, 0, 0]);

const props = defineProps({
  img: { type: String, required: true },
  title: { type: String, required: true },
});

function getColor(el: any) {
  color.value = colorThief.getColor(el);
}
</script>

<template>
  <div class="welcome-card" @mouseover="setColor(color[0], color[1], color[2])">
    <div class="img">
      <img
        :src="props.img"
        :alt="props.title + ' img'"
        @load="(el) => getColor(el.target)"
        crossorigin="anonymous"
      />
    </div>
    <div class="title">
      {{ props.title }}
    </div>
  </div>
</template>

<style scoped>
div.welcome-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
}
div.img {
  min-height: var(--item-height);
  min-width: var(--item-height);
  max-height: 100%;
  max-width: 100%;
  height: 100%;
}
img {
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
}
div.title {
  font-size: var(--fs-medium);
  font-weight: bold;
}
</style>
