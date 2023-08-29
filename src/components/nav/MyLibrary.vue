<script lang="ts" setup>
import { useLibraryStore } from '@/stores/library';
import { pImg } from '../../utils/placeholder';
import ScrollableComponent from '../UI/ScrollableComponent.vue';

const library = useLibraryStore();
</script>

<template>
  <ScrollableComponent>
    <ul :aria-expanded="library.isExpanded">
      <li>
        <a href="">
          <div class="mylibrary-img-container">
            <img :src="pImg" alt="" />
          </div>
          <div class="mylibrary-info-container">
            <span class="title">Liked Songs</span>
            <span class="subtitle">Lista <span class="dot">•</span> stixbunny</span>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="mylibrary-img-container">
            <img :src="pImg" alt="" />
          </div>
          <div class="mylibrary-info-container">
            <span class="title">Mi Playlist Favorita</span>
            <span class="subtitle">Lista <span class="dot">•</span> stixbunny</span>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="mylibrary-img-container">
            <img :src="pImg" alt="" />
          </div>
          <div class="mylibrary-info-container">
            <span class="title">Canciones de Gorillaz</span>
            <span class="subtitle">Lista <span class="dot">•</span> stixbunny</span>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="mylibrary-img-container">
            <img :src="pImg" alt="" />
          </div>
          <div class="mylibrary-info-container">
            <span class="title">Canciones de Gorillaz</span>
            <span class="subtitle">Lista <span class="dot">•</span> stixbunny</span>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="mylibrary-img-container">
            <img :src="pImg" alt="" />
          </div>
          <div class="mylibrary-info-container">
            <span class="title">Canciones de Gorillaz</span>
            <span class="subtitle">Lista <span class="dot">•</span> stixbunny</span>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="mylibrary-img-container">
            <img :src="pImg" alt="" />
          </div>
          <div class="mylibrary-info-container">
            <span class="title">Canciones de Gorillaz</span>
            <span class="subtitle">Lista <span class="dot">•</span> stixbunny</span>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="mylibrary-img-container">
            <img :src="pImg" alt="" />
          </div>
          <div class="mylibrary-info-container">
            <span class="title">Canciones de Gorillaz</span>
            <span class="subtitle">Lista <span class="dot">•</span> stixbunny</span>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="mylibrary-img-container">
            <img :src="pImg" alt="" />
          </div>
          <div class="mylibrary-info-container">
            <span class="title">Liked Songs</span>
            <span class="subtitle">Lista <span class="dot">•</span> stixbunny</span>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="mylibrary-img-container">
            <img :src="pImg" alt="" />
          </div>
          <div class="mylibrary-info-container">
            <span class="title">Mi Playlist Favorita</span>
            <span class="subtitle">Lista <span class="dot">•</span> stixbunny</span>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="mylibrary-img-container">
            <img :src="pImg" alt="" />
          </div>
          <div class="mylibrary-info-container">
            <span class="title">Canciones de Gorillaz</span>
            <span class="subtitle">Lista <span class="dot">•</span> stixbunny</span>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="mylibrary-img-container">
            <img :src="pImg" alt="" />
          </div>
          <div class="mylibrary-info-container">
            <span class="title">Canciones de Gorillaz</span>
            <span class="subtitle">Lista <span class="dot">•</span> stixbunny</span>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="mylibrary-img-container">
            <img :src="pImg" alt="" />
          </div>
          <div class="mylibrary-info-container">
            <span class="title">Canciones de Gorillaz</span>
            <span class="subtitle">Lista <span class="dot">•</span> stixbunny</span>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="mylibrary-img-container">
            <img :src="pImg" alt="" />
          </div>
          <div class="mylibrary-info-container">
            <span class="title">Canciones de Gorillaz</span>
            <span class="subtitle">Lista <span class="dot">•</span> stixbunny</span>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="mylibrary-img-container">
            <img :src="pImg" alt="" />
          </div>
          <div class="mylibrary-info-container">
            <span class="title">Canciones de Gorillaz</span>
            <span class="subtitle">Lista <span class="dot">•</span> stixbunny</span>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="mylibrary-img-container">
            <img :src="pImg" alt="" />
          </div>
          <div class="mylibrary-info-container">
            <span class="title">Liked Songs</span>
            <span class="subtitle">Lista <span class="dot">•</span> stixbunny</span>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="mylibrary-img-container">
            <img :src="pImg" alt="" />
          </div>
          <div class="mylibrary-info-container">
            <span class="title">Mi Playlist Favorita</span>
            <span class="subtitle">Lista <span class="dot">•</span> stixbunny</span>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="mylibrary-img-container">
            <img :src="pImg" alt="" />
          </div>
          <div class="mylibrary-info-container">
            <span class="title">Canciones de Gorillaz</span>
            <span class="subtitle">Lista <span class="dot">•</span> stixbunny</span>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="mylibrary-img-container">
            <img :src="pImg" alt="" />
          </div>
          <div class="mylibrary-info-container">
            <span class="title">Canciones de Gorillaz</span>
            <span class="subtitle">Lista <span class="dot">•</span> stixbunny</span>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="mylibrary-img-container">
            <img :src="pImg" alt="" />
          </div>
          <div class="mylibrary-info-container">
            <span class="title">Canciones de Gorillaz</span>
            <span class="subtitle">Lista <span class="dot">•</span> stixbunny</span>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="mylibrary-img-container">
            <img :src="pImg" alt="" />
          </div>
          <div class="mylibrary-info-container">
            <span class="title">Canciones de Gorillaz</span>
            <span class="subtitle">Lista <span class="dot">•</span> stixbunny</span>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="mylibrary-img-container">
            <img :src="pImg" alt="" />
          </div>
          <div class="mylibrary-info-container">
            <span class="title">Canciones de Gorillaz</span>
            <span class="subtitle">Lista <span class="dot">•</span> stixbunny</span>
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
