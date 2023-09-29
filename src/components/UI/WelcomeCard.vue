<script lang="ts" setup>
const props = defineProps({
  img: { type: String, required: true },
  title: { type: String, required: true },
})
</script>

<template>
  <div class="welcome-card">
    <div class="img">
      <img :src="props.img" :alt="props.title + ' img'">
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