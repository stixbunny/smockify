<script lang="ts" setup>
import { loadAlbum } from '@/utils/spotifyLoader';
import msToTime from '@/utils/msToTime';
import localeDateString from '@/utils/localeDateString';
import AlbumTable from '@/components/UI/AlbumTable.vue';
import ContentPresentation from '@/components/UI/ContentPresentation.vue';

const props = defineProps({
  id: { type: String, required: true },
});

const { album } = await loadAlbum(props.id);
const releaseString = album?.releaseDate ? localeDateString(album.releaseDate) : album?.releaseYear;
</script>

<template>
  <ContentPresentation
    v-if="album"
    :type="album.albumType"
    :image="album.imgUrl"
    :name="album.name"
    :number-of-songs="album.numberOfSongs"
    :total-duration="album.totalDuration"
    :artists="album.artists"
    :year="album.releaseYear"
  ></ContentPresentation>
  <AlbumTable :discs="album ? album.discs : []" />
  <section class="credits">
    <p class="credits_release">{{ releaseString }}</p>
    <p v-for="copyright in album?.copyrights" :key="copyright" class="credits_copyright">
      {{ copyright }}
    </p>
  </section>
</template>

<style scoped>
.credits {
  color: var(--text-subdued);
}
.credits_release {
  font-size: var(--fs-small);
}
.credits_copyright {
  font-size: var(--fs-smaller);
}
</style>
