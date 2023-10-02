<script lang="ts" setup>
import IconArrowLeft from '../icons/IconArrowLeft.vue';
import IconArrowRight from '../icons/IconArrowRight.vue';
import IconDownload from '../icons/IconDownload.vue';
import ImgProfile from '../../assets/img/profile.webp';

defineProps<{
  notTransparent: boolean
}>();
</script>

<template>
  <nav :data-visible="notTransparent">
    <div class="content-navigation">
      <a class="pill-container circular-container">
        <IconArrowLeft />
      </a>
      <a class="pill-container circular-container">
        <IconArrowRight />
      </a>
    </div>
    <div class="profile">
      <a class="pill-container download">
        <IconDownload />
        <span>Instalar app</span>
      </a>
      <button class="pill-container circular-container">
        <img :src="ImgProfile" alt="" />
      </button>
    </div>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  --item-height: 32px;
  z-index: 10;

  transition: background-color .25s;
}
nav[data-visible="true"] {
  background-color: var(--accent-color);
}
.pill-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
  height: var(--item-height);
  padding: 4px;
  border: 0px;
  background-color: rgba(0, 0, 0, 0.54);
  border-radius: 500px;
}
.circular-container {
  width: var(--item-height);
}
.download {
  padding-inline: 14px;
  & svg {
    fill: var(--text-base) !important;
  }
}
div {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--fs-small);
  font-weight: normal;
  color: var(--text-base);
}
img {
  height: 100%;
  /* max-width: 24px; */
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
}
svg {
  height: auto;
  width: auto;
  fill: var(--text-subdued);
}
</style>
