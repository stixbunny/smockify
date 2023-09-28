<script lang="ts" setup>
import { useLibraryStore } from '@/stores/library';
import ScrollableComponent from '../UI/ScrollableComponent.vue';
import { useLocalStore } from '@/stores/local';
// import type { SimpleAlbumValue, SimpleArtistValue, SimplePlaylistValue } from '@/types';
import { RouterLink } from 'vue-router';

const library = useLibraryStore();
const local = useLocalStore();

// function isAlbum(item: SimpleAlbumValue | SimpleArtistValue | SimplePlaylistValue): item is SimpleAlbumValue {
//   return 'album_type' in item;
// }

// function isPlaylist(item: SimpleAlbumValue | SimpleArtistValue | SimplePlaylistValue): item is SimplePlaylistValue {
//   return 'owner_id' in item;
// }

// function isArtist(item: SimpleAlbumValue | SimpleArtistValue | SimplePlaylistValue): item is SimpleArtistValue {
//   return 'name' in item;
// }

// function typeOfItem(item: SimpleAlbumValue | SimpleArtistValue | SimplePlaylistValue) {
//   if(isAlbum(item)) return 'album-item';
//   if(isPlaylist(item)) return 'playlist-item';
//   if(isArtist(item)) return 'artist-item';
//   return false;
// }

function getRoute(id: string, type: 'playlist' | 'album' | 'artist' | 'song') {
  switch (type) {
    case 'playlist':
      return {
        name: 'playlist',
        params: {
          id: id,
        },
      };
    case 'album':
      return {
        name: 'album',
        params: {
          id: id,
        },
      };
    case 'artist':
      return {
        name: 'artist',
        params: {
          id: id,
        },
      };
    case 'song':
      return {
        name: 'song',
        params: {
          id: id,
        },
      };
  }
}
</script>

<template>
  <ScrollableComponent>
    <ul :aria-expanded="library.isExpanded">
      <li v-for="item in local.myLibrary" :key="item.id" :class="item.type + '-item'">
        <RouterLink :to="getRoute(item.id, item.type)">
          <div class="mylibrary-img-container">
            <img :src="item.img" alt="" />
          </div>
          <div class="mylibrary-info-container">
            <span class="title">{{ item.title }}</span>
            <span v-if="item.type == 'album'" class="subtitle"
              >Álbum <span class="dot">•</span> {{ item.author }}</span
            >
            <span v-else-if="item.type == 'playlist'" class="subtitle"
              >Lista <span class="dot">•</span> {{ item.author }}</span
            >
            <span v-else-if="item.type == 'artist'" class="subtitle">Artista</span>
          </div>
        </RouterLink>
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
  /* color: inherit !important; */
}
.artist-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.playlist-item img,
.album-item img {
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
