<script lang="ts" setup>
import { loadPlaylist } from '@/utils/spotifyLoader';
import msToTime from '@/utils/msToTime';
import localeDateString from '@/utils/localeDateString';
import TextDot from '@/components/text/TextDot.vue';
import { useContentStore } from '@/stores/content';

const content = useContentStore();

const props = defineProps({
  id: { type: String, required: true },
});

const { playlist } = await loadPlaylist(props.id);
const songs = playlist?.songs;
</script>

<template>
  <section class="contenttitle">
    <div class="contenttitle_image">
      <img :src="playlist?.image" alt="">
    </div>
    <div class="contenttitle_info">
      <p class="contenttitle_info_type">Lista</p>
      <h1 class="contenttitle_info_name">{{ playlist?.name }}</h1>
      <p class="contenttitle_info_sub">
        <span class="contenttitle_info_sub_owner">{{ playlist?.ownerName }}</span><TextDot />
        <span v-if="playlist?.likes ? playlist.likes > 0 : false">
          <span class="contenttitle_info_sub_likes">{{ playlist?.likes }} me gusta</span><TextDot />
        </span>
        <span v-if="playlist?.numberOfSongs ? playlist.numberOfSongs > 1 : false" class="contenttitle_info_sub_songs">
          {{ playlist?.numberOfSongs }} canciones,
        </span>
        <span v-else class="contenttitle_info_sub_songs">{{ playlist?.numberOfSongs }} canción, </span>
        <span class="contenttitle_info_sub_duration">{{ msToTime(playlist?.totalDuration ? playlist.totalDuration : 0) }}</span>
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
}
.contenttitle_image {
  width: 192px;
  height: 192px;
}
.contenttitle_image > img {
  width: 100%;
  aspect-ratio: 1 / 1;
}
.contenttitle_info {
  display: flex;
  flex-direction: column;
  justify-content: end;
}
.contenttitle_info_name {
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 6rem;
  line-height: 1.2;
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
