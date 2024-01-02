<script lang="ts" setup>
import { loadArtist } from '@/utils/spotifyLoader';
import { ref } from 'vue';
import ArtistPresentation from '@/components/UI/ArtistPresentation.vue';

const props = defineProps({
  id: { type: String, required: true },
});

const { topTracks, artist, discography, appearsOn, relatedArtists } = await loadArtist(props.id);
const discographyTab = ref<'albums' | 'singles' | 'compilations'>('albums');
const selectedDiscography = ref(discography.albums);

function switchDiscographyTab(newDiscographyTab: 'albums' | 'singles' | 'compilations') {
  selectedDiscography.value = discography[newDiscographyTab];
  discographyTab.value = newDiscographyTab;
}
</script>

<template>
  <ArtistPresentation v-if="artist" :name="artist?.name" :followers="artist?.followers" :image="artist.image" />
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
  <h2>Sus fans también escuchan</h2>
  <ul>
    <li v-for="item in relatedArtists" :key="item.id">{{ item.name }}</li>
  </ul>
  <h2>Aparece en</h2>
  <ul>
    <li v-for="item in appearsOn" :key="item.id + item.type">{{ item.name }}</li>
  </ul>
</template>
