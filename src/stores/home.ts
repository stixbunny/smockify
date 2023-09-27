import { defineStore } from 'pinia';
import { useLocalStore } from '@/stores/local';

const local = useLocalStore();

export const useHomeStore = defineStore('home', () => {
  const welcomeArtists = ['3AA28KZvwAUcZuOKwyblJQ', '7oPftvlwr6VrsViSDV7fJY', '34EP7KEpOjXcM2TCat1ISk'];
  const welcomePlaylists = ['37i9dQZF1DX186v583rmzp', '37i9dQZF1DWWQRwui0ExPn', '37i9dQZF1DX9E1mLvTvD1f']
  const welcomeItems = []
  for(const id of welcomeArtists) {
    welcomeItems.push({
      img: local.findSmallImage(id),
      name: local.findItem(id, 'artist')?.name,
    })
  }
  for(const id of welcomePlaylists) {
    welcomeItems.push({
      img: local.findSmallImage(id),
      name: local.findItem(id, 'playlist')?.name,
    })
  }

  return { welcomeItems };
});
