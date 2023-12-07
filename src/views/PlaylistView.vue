<script lang="ts" setup>
import { loadPlaylist } from '@/utils/spotifyLoader';
import { ref, provide } from 'vue';
import msToTime from '@/utils/msToTime';
import localeDateString from '@/utils/localeDateString';
import TextDot from '@/components/text/TextDot.vue';
import { useContentStore } from '@/stores/content';
import msToVerboseTime from '@/utils/msToVerboseTime';
import MaxFontSpan from '@/components/UI/MaxFontSpan.vue';

const content = useContentStore();

const props = defineProps({
  id: { type: String, required: true },
});

const { playlist } = await loadPlaylist(props.id);
const songs = playlist?.songs;

const container = ref<HTMLDivElement | null>(null);
provide('container', container);
</script>

<template>
  <section class="contenttitle">
    <div class="contenttitle_image">
      <img
        crossorigin="anonymous"
        :src="playlist?.image"
        alt=""
        @load="(el) => content.setColorFromElement(el.target)"
      />
    </div>
    <div class="contenttitle_info">
      <p class="contenttitle_info_type">Lista</p>
      <p class="contenttitle_info_name" ref="container">
        <MaxFontSpan :text="playlist ? playlist.name : ''" />
      </p>
      <p class="contenttitle_info_description">{{ playlist?.description }}</p>
      <p class="contenttitle_info_sub">
        <span class="contenttitle_info_sub_owner">{{ playlist?.ownerName }}</span
        ><TextDot />
        <span v-if="playlist?.likes ? playlist.likes > 0 : false">
          <span class="contenttitle_info_sub_likes"
            >{{ playlist?.likes.toLocaleString() }} me gusta</span
          ><TextDot />
        </span>
        <span
          v-if="playlist?.numberOfSongs ? playlist.numberOfSongs > 1 : false"
          class="contenttitle_info_sub_songs"
        >
          {{ playlist?.numberOfSongs }} canciones,
        </span>
        <span v-else class="contenttitle_info_sub_songs"
          >{{ playlist?.numberOfSongs }} canción,
        </span>
        <span class="contenttitle_info_sub_duration">{{
          msToVerboseTime(playlist?.totalDuration ? playlist.totalDuration : 0)
        }}</span>
      </p>
    </div>
  </section>
  <section>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Título</th>
          <th>Álbum</th>
          <th>Fecha en la que se añadió</th>
          <th>clock-icon</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(song, index) in songs" :key="'song - ' + song.id">
          <th>{{ index + 1 }}</th>
          <th>{{ song.name }}<span v-if="song.explicit"> (E)</span></th>
          <th>{{ song.albumName }}</th>
          <th>{{ localeDateString(song.addedOn) }}</th>
          <th>{{ msToTime(song.duration) }}</th>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style>
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
.contenttitle_image > img {
  width: 100%;
  aspect-ratio: 1 / 1;
}
.contenttitle_info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: end;
  overflow-x: hidden;
}
.contenttitle_info_description {
  font-size: var(--fs-small);
  color: var(--text-subdued);
}
.contenttitle_info_sub {
  font-size: var(--fs-small);
}
.contenttitle_info_sub_owner {
  font-weight: bold;
}
.contenttitle_info_sub_duration {
  color: var(--text-subdued);
}
</style>
