import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLibraryStore = defineStore('library', () => {
  const isExpanded = ref(true);

  return { isExpanded };
});
