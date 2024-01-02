<script setup lang="ts">
import { ref, provide, computed } from 'vue';
import MaxFontSpan from '@/components/UI/MaxFontSpan.vue';
import { useContentStore } from '@/stores/content';
import IconVerified from '../icons/IconVerified.vue';

const content = useContentStore();
const container = ref<HTMLDivElement | null>(null);
provide('container', container);

interface Props {
  image?: string;
  name: string;
  followers: number;
  verified?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  verified: true,
});

const backgroundUrl = computed(() => `url("${props.image}")`);

const img = new Image(360, 360);
img.src = props.image ? props.image : '';
img.crossOrigin = 'anonymous';
img.onload = function () {
  content.setColorFromElement(img);
};
</script>

<template>
  <section class="artistpresentation">
    <span v-if="verified" class="artistpresentation_verified">
      <IconVerified />
      <span>Artista verificado</span>
    </span>
    <p class="artistpresentation_name" ref="container">
      <MaxFontSpan :text="props.name" />
    </p>
    <p class="artistpresentation_followers">{{ props.followers.toLocaleString() }} seguidores</p>
  </section>
</template>

<style scoped>
.artistpresentation {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: end;
  overflow-x: hidden;
  padding-top: 5rem;
  padding-left: 1rem;
  --content-width: v-bind('content.widthAsPx');
  background-image: v-bind('backgroundUrl');
  background-size: cover;
  background-position: center;
  text-shadow: 1px 1px 4px black;
}
.artistpresentation_verified {
  display: inline-grid;
  gap: 8px;
  align-items: center;
  grid-template-columns: auto 1fr;
  font-size: var(--fs-small);
}
.artistpresentation_name {
  line-height: 1.3;
}
.artistpresentation_followers {
  font-size: var(--fs-medium);
}
</style>
