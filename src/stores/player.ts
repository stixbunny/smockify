import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { currentSong } from '@/types';

function msToTime(timeInMs: number): string {
  function pad(num: number) {
    return `${num}`.padStart(2, '0');
  }
  const asSeconds = timeInMs / 1000;
  let hours: number | undefined;
  let minutes = Math.floor(asSeconds / 60);
  const seconds = Math.floor(asSeconds % 60);
  if (minutes > 59) {
    hours = Math.floor(minutes / 60);
    minutes %= 60;
  }
  return hours
    ? `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
    : `${pad(minutes)}:${pad(seconds)}`;
}

export const usePlayerStore = defineStore('player', () => {
  const song = ref<currentSong>({
    songId: "2a1iMaoWQ5MnvLFBDv4qkf",
    artistId: "4Z8W4fKeB5YxbusRsdQVPb",
    albumId: "35UJLpClj5EDrhpNIi4DFg",
    songName: "High and Dry",
    artistName: "Radiohead",
    duration_ms: 257480,
    explicit: false,
    isLiked: false,
    imgUrl: "https://i.scdn.co/image/ab67616d000048519293c743fa542094336c5e12",
  });
  const isPlaying = ref(false);
  const elapsedTimeMs = ref(10000); //0:10
  
  const totalTimeMs = computed(() => song.value.duration_ms); //4:17
  const totalTime = computed(() => msToTime(totalTimeMs.value));
  const elapsedTime = computed(() => msToTime(elapsedTimeMs.value));
  const elapsedPercentage = computed(() => { return `${elapsedTimeMs.value / totalTimeMs.value * 100}%` });

  function pause() {
    isPlaying.value = false;
  }

  function play() {
    isPlaying.value = true;
  }

  function setTiming(newElapsed: number) {
    elapsedTimeMs.value = totalTimeMs.value * newElapsed;
  }

  return { song, totalTime, elapsedTime, isPlaying, elapsedPercentage, pause, play, setTiming };
});