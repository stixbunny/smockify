<script lang="ts" setup>
import { useHomeStore } from '@/stores/home';
import { useContentStore } from '@/stores/content';
import { computed, ref } from 'vue';
import WelcomeCard from '@/components/UI/WelcomeCard.vue';
import { homeSections } from '@/utils/data';
import HomeSection from '@/components/UI/HomeSection.vue';

const home = useHomeStore();
const content = useContentStore();

const itemHeight = computed(() => {
  if (content.size == 'small' || content.size == 'medium') {
    return '64px';
  } else return '80px';
});
const itemGap = computed(() => {
  if (content.size == 'small' || content.size == 'medium') return '8px';
  if (content.size == 'large') return '12px';
  if (content.size == 'x-large') return '14px';
  return '16px';
});
const titleMargin = computed(() => {
  if (content.size == 'small' || content.size == 'medium') return '10px';
  if (content.size == 'large') return '14px';
  if (content.size == 'x-large') return '18px';
  return '22px';
});

const date = new Date();
let helloString = '';
if (date.getHours() >= 5 && date.getHours() < 12) {
  helloString = '¡Buenos dias!';
} else if (date.getHours() >= 12 && date.getHours() < 19) {
  helloString = '¡Buenas tardes!';
} else helloString = '¡Buenas noches!';
</script>

<template>
  <div class="home-view">
    <section id="welcome">
      <h1>{{ helloString }}</h1>
      <ul>
        <li v-for="item of home.welcomeItems" :key="item.title">
          <WelcomeCard :img="item.img" :title="item.title"/>
        </li>
      </ul>
    </section>
    <HomeSection
      v-for="section in homeSections"
      :title="section.title"
      :key="section.title"
      :items="section.items"
    />
  </div>
</template>

<style scoped>
div.home-view {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
h1 {
  margin-bottom: v-bind('titleMargin');
}
section#welcome > ul {
  --item-height: v-bind('itemHeight');
  --min-col-width: 270px;
  display: grid;
  grid-template: auto/repeat(auto-fill, minmax(max(var(--min-col-width), 25%), 1fr));
  gap: v-bind('itemGap');
  /* grid-template-columns: repeat(v-bind('columns'), auto); */
  list-style: none;
  padding-left: 0;
}
section#welcome > ul > li {
  width: 100%;
  height: var(--item-height);
  overflow: hidden;
  transition: background-color 0.3s ease;
  border-radius: 4px;
  background-color: var(--background-tinted-highlight);
}
section#welcome > ul > li:hover {
  background-color: hsl(0, 0%, 100%, 0.2);
}
</style>
