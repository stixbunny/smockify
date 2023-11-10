import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import type { VolumePower, currentSong } from '@/types';
import msToTime from '@/utils/msToTime';

export const usePlayerStore = defineStore('player', () => {
  const song = ref<currentSong>({
    songId: '2a1iMaoWQ5MnvLFBDv4qkf',
    artistId: '4Z8W4fKeB5YxbusRsdQVPb',
    albumId: '35UJLpClj5EDrhpNIi4DFg',
    songName: 'High and Dry',
    artistName: 'Radiohead',
    duration_ms: 257480,
    explicit: false,
    isLiked: false,
    imgUrl: 'https://i.scdn.co/image/ab67616d000048519293c743fa542094336c5e12',
  });
  const isPlaying = ref(false);
  const elapsedTimeMs = ref(10000); //0:10
  const volume = ref(100);
  const lastSavedVolume = ref(volume.value);

  const volumePower = computed<VolumePower>(() => {
    if (volume.value >= 66) return 'high';
    else if (volume.value >= 33) return 'medium';
    else if (volume.value > 0) return 'low';
    return 'muted';
  });
  const volumePercentage = computed(() => `${volume.value}%`);
  const totalTimeMs = computed(() => song.value.duration_ms); //4:17
  const totalTime = computed(() => msToTime(totalTimeMs.value));
  const elapsedTime = computed(() => msToTime(elapsedTimeMs.value));
  const elapsedPercentage = computed(() => {
    return `${(elapsedTimeMs.value / totalTimeMs.value) * 100}%`;
  });

  watch(volume, (newVolume, oldVolume) => {
    if (oldVolume != 0 && newVolume == 0) lastSavedVolume.value = oldVolume;
  });

  function pause() {
    isPlaying.value = false;
  }

  function play() {
    isPlaying.value = true;
  }

  function setTiming(newElapsed: number) {
    elapsedTimeMs.value = totalTimeMs.value * newElapsed;
  }

  return {
    song,
    volume,
    lastSavedVolume,
    volumePower,
    volumePercentage,
    totalTime,
    elapsedTime,
    isPlaying,
    elapsedPercentage,
    pause,
    play,
    setTiming,
  };
});
