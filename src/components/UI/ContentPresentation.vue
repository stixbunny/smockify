<script setup lang="ts">
import { ref, provide } from 'vue';
import MaxFontSpan from '@/components/UI/MaxFontSpan.vue';
import TextDot from '@/components/text/TextDot.vue';
import { useContentStore } from '@/stores/content';
import msToVerboseTime from '@/utils/msToVerboseTime';

const content = useContentStore();
const container = ref<HTMLDivElement | null>(null);
provide('container', container);

interface Props {
  for: 'album' | 'song' | 'playlist';
  image?: string;
  name: string;
  description?: string;
  author: string;
  likes?: number;
  numberOfSongs?: number;
  year?: number;
  totalDuration: number;
}
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <section class="contentpresentation">
    <div class="contentpresentation_image">
      <img
        crossorigin="anonymous"
        :src="props.image"
        alt=""
        @load="(el) => content.setColorFromElement(el.target)"
      />
    </div>
    <div class="contentpresentation_info">
      <p class="contentpresentation_info_type">Lista</p>
      <p class="contentpresentation_info_name" ref="container">
        <MaxFontSpan :text="props.name" />
      </p>
      <p v-if="props.description" class="contentpresentation_info_description">
        {{ props.description }}
      </p>
      <p class="contentpresentation_info_sub">
        <span class="contentpresentation_info_sub_owner">{{ props.author }}</span
        ><TextDot />
        <span v-if="props.likes">
          <span class="contenttitle_info_sub_likes"
            >{{ props.likes.toLocaleString() }} me gusta</span
          ><TextDot />
        </span>
        <span
          v-if="props.numberOfSongs ? props.numberOfSongs > 1 : false"
          class="contentpresentation_info_sub_songs"
        >
          {{ props.numberOfSongs }} canciones,
        </span>
        <span v-else class="contentpresentation_info_sub_songs"
          >{{ props.numberOfSongs }} canción,
        </span>
        <span class="contentpresentation_info_sub_duration">{{
          msToVerboseTime(props.totalDuration ? props.totalDuration : 0)
        }}</span>
      </p>
    </div>
  </section>
</template>

<style scoped>
.contenttitle {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-top: 5rem;
  --content-width: v-bind('content.widthAsPx');
}
.contenttitle_image {
  width: 192px;
  height: 192px;
  min-width: 192px;
}
.contentpresentation_image > img {
  width: 100%;
  aspect-ratio: 1 / 1;
}
.contentpresentation_info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: end;
  overflow-x: hidden;
}
.contentpresentation_info_description {
  font-size: var(--fs-small);
  color: var(--text-subdued);
}
.contentpresentation_info_sub {
  font-size: var(--fs-small);
}
.contentpresentation_info_sub_owner {
  font-weight: bold;
}
.contentpresentation_info_sub_duration {
  color: var(--text-subdued);
}
</style>
