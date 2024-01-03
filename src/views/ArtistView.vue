<script lang="ts" setup>
import { loadArtist } from '@/utils/spotifyLoader';
import { ref } from 'vue';
import ArtistPresentation from '@/components/UI/ArtistPresentation.vue';
import ContentSection from '@/components/UI/ContentSection.vue';
import DiscographySection from '@/components/UI/DiscographySection.vue';
import ArtistTable from '@/components/UI/ArtistTable.vue';
import type { cardItem } from '@/types';

const props = defineProps({
  id: { type: String, required: true },
});

const { topTracks, artist, discography, appearsOn, relatedArtists } = await loadArtist(props.id);

const appearsOnAsCardItem: cardItem[] = [];
appearsOn?.forEach((item) => {
  appearsOnAsCardItem.push({
    img: item.image,
    title: item.name,
    id: item.id,
    type: 'album',
  });
});
</script>

<template>
  <ArtistPresentation
    v-if="artist"
    :name="artist?.name"
    :followers="artist?.followers"
    :image="artist.image"
  />
  <section>
    <h1>Populares</h1>
    <ArtistTable v-if="topTracks" :songs="topTracks" />
  </section>
  <DiscographySection :discography="discography" />
  
  <ContentSection v-if="relatedArtists" title="Sus fans también escuchan" :items="relatedArtists" />
  <ContentSection v-if="appearsOn" title="Aparece en" :items="appearsOnAsCardItem" />
</template>

<style scoped>
h1 {
  font-size: var(--fs-large);
}
section + section {
  margin-top: 2rem;
}
</style>
