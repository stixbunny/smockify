<script lang="ts" setup>
import { useMediaQuery } from '@vueuse/core';
import { mobileMaxWidth } from '@/utils/styles';
import IconHome from '../icons/IconHome.vue';
import IconSearch from '../icons/IconSearch.vue';
import IconLibrary from '../icons/IconLibrary.vue';
import MyLibrary from '../nav/MyLibrary.vue';
import { useLibraryStore } from '@/stores/library';
import { RouterLink } from 'vue-router';

const library = useLibraryStore();

const isMobile = useMediaQuery(`(max-width: ${mobileMaxWidth})`);

function switchLibrary() {
  library.isExpanded = !library.isExpanded;
}
</script>

<template>
  <nav v-if="isMobile" class="mobile-nav">
    <div class="item">
      <a href="#">
        <IconHome />
        <span>Inicio</span>
      </a>
    </div>
    <div class="item">
      <a href="#">
        <IconSearch />
        <span>Buscar</span>
      </a>
    </div>
    <div class="item">
      <a href="#">
        <IconLibrary />
        <span>Tu biblioteca</span>
      </a>
    </div>
  </nav>
  <nav v-else :aria-expanded="library.isExpanded">
    <div class="top container">
      <div class="item">
        <RouterLink :to="{ name: 'home' }">
          <IconHome />
          <span v-if="library.isExpanded">Inicio</span>
        </RouterLink>
      </div>
      <div class="item">
        <RouterLink :to="{ name: 'search' }">
          <IconSearch />
          <span v-if="library.isExpanded">Buscar</span>
        </RouterLink>
      </div>
    </div>
    <div class="bottom container" :data-expanded="library.isExpanded">
      <div class="item">
        <a href="#" @click="switchLibrary">
          <IconLibrary :active="library.isExpanded" />
          <span v-if="library.isExpanded">Tu biblioteca</span>
        </a>
      </div>
      <MyLibrary :expand="library.isExpanded" />
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 8px;
  font-size: var(--fs-medium);
  color: var(--text-subdued);
}
nav > .container {
  background: var(--background-base);
  padding: 8px 12px;
  border-radius: 8px;
}
.bottom.container {
  min-height: 0;
  height: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
}
.bottom.container[data-expanded='false'] {
  padding: 8px 0px;
  align-items: center;
}
.item {
  padding: 4px 12px;
}
.bottom > .item {
  padding: 0px 16px;
}
a {
  display: flex;
  align-items: center;
  gap: 20px;
  height: 40px;
  color: inherit;
}
a:hover {
  color: var(--text-base);
  & svg {
    fill: var(--text-base);
  }
}
a:visited {
  color: inherit;
}
.bottom > .item > a {
  gap: 12px;
}
svg {
  fill: var(--text-subdued);
}
span {
  color: inherit;
  font-weight: bold;
}
.mobile-nav {
  display: flex;
  flex-direction: row;
  font-size: var(--fs-medium);
  /* justify-content: space-around; */
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
  }
  & a {
    flex-direction: column;
    gap: 10px;
    height: 60px;
    width: 100%;
  }
  & span {
    font-size: var(--fs-medium);
    font-weight: normal;
  }
}
</style>
