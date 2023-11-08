<script lang="ts" setup>
import NotYetImplemented from '@/components/NotYetImplemented.vue';
import { loadArtist } from '@/utils/spotifyLoader';
import { ref } from 'vue';

const props = defineProps({
  id: { type: String, required: true },
});

const { topTracks, artist, discography, appearsOn } = await loadArtist(props.id);
const discographyTab = ref<'albums' | 'singles' | 'compilations'>('albums');
const selectedDiscography = ref(discography.albums);

function switchDiscographyTab(newDiscographyTab: 'albums' | 'singles' | 'compilations') {
  selectedDiscography.value = discography[newDiscographyTab];
  discographyTab.value = newDiscographyTab;
}
</script>

<template>
  <h1>{{ artist?.name }}</h1>
  <h2>Populares</h2>
  <ul>
    <li v-for="item in topTracks" :key="item.songId + 'top'">{{ item.songName }}</li>
  </ul>
  <h2>Discografía</h2>
  <button
    v-for="(item, name) in discography"
    :key="name"
    @click="switchDiscographyTab(name)"
    :data-info="name"
  >
    {{ item.name }}
  </button>
  <ul>
    <li v-for="item in selectedDiscography.content" :key="item.id + item.type">{{ item.name }}</li>
  </ul>
  <h2>AppearsOn</h2>
  <ul>
    <li v-for="item in appearsOn" :key="item.id + item.type">{{ item.name }}</li>
  </ul>
</template>
