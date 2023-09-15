<script lang="ts" setup>
import { useLibraryStore } from '@/stores/library';
import ScrollableComponent from '../UI/ScrollableComponent.vue';
import { useLocalStore } from '@/stores/local';
import type { SimpleAlbumValue, SimpleArtistValue, SimplePlaylistValue } from '@/types';

const library = useLibraryStore();
const local = useLocalStore();

function isAlbum(item: SimpleAlbumValue | SimpleArtistValue | SimplePlaylistValue): item is SimpleAlbumValue {
  return 'album_type' in item;
}

function isPlaylist(item: SimpleAlbumValue | SimpleArtistValue | SimplePlaylistValue): item is SimplePlaylistValue {
  return 'owner_id' in item;
}
</script>

<template>
  <ScrollableComponent>
    <ul :aria-expanded="library.isExpanded">
      <li v-for="item in local.myLibrary" :key="item.id">
        <a href="">
          <div class="mylibrary-img-container">
            <img :src="local.findSmallImage(item.id)" alt="" />
          </div>
          <div class="mylibrary-info-container">
            <span class="title">{{ item.name }}</span>
            <span v-if="isAlbum(item)" class="subtitle">Álbum <span class="dot">•</span> {{local.findAlbumArtistName(item.id)}}</span>
            <span v-else-if="isPlaylist(item)" class="subtitle">Lista <span class="dot">•</span> {{ local.findOwner(item.owner_id)?.display_name }}</span>
            <span v-else class="subtitle">Artista</span>
          </div>
        </a>
      </li>
    </ul>
  </ScrollableComponent>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0px;
  font-size: var(--fs-normal);
  font-weight: 400;
  height: 100%;
}
a {
  display: flex;
  flex-direction: row;
  padding: 8px;
  gap: 12px;
  border-radius: 8px;
}
a:hover {
  background: var(--background-highlight);
}
a:visited {
  color: inherit;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}
.mylibrary-img-container {
  width: 48px;
  height: 48px;
  aspect-ratio: 1 / 1;
}
.mylibrary-info-container {
  width: 100%;
  overflow: hidden;
}
.mylibrary-info-container > * {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.mylibrary-info-container > .title {
  font-size: var(--fs-medium);
  font-weight: 400;
  color: var(--text-base);
}
.mylibrary-info-container > .subtitle {
  font-size: var(--fs-small);
  font-weight: 400;
}
span {
  display: block;
}
ul[aria-expanded='false'] {
  & a {
    /* padding: 0px; */
    gap: 0px;
  }
  & div.mylibrary-info-container {
    display: none;
  }
  & li {
    align-self: center;
  }
}
</style>
