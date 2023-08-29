import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Tables } from '@/database.types';

export const useLibraryStore = defineStore('library', () => {
  const isExpanded = ref(true);
  const content = ref<(Tables<'album'> | Tables<'artist'> | Tables<'playlist'> | Tables<'podcast'>)[]>();

  return { isExpanded, content };
});