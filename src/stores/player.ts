import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

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
  const isPlaying = ref(false);
  const totalTimeMs = 152000; //2:32
  const elapsedTimeMs = ref(10000); //0:10
  const totalTime = computed(() => msToTime(totalTimeMs));
  const elapsedTime = computed(() => msToTime(elapsedTimeMs.value));
  const elapsedPercentage = computed(() => { return `${elapsedTimeMs.value / totalTimeMs * 100}%` })

  function pause() {
    isPlaying.value = false;
  }

  function play() {
    isPlaying.value = true;
  }

  function setTiming(newElapsed: number) {
    elapsedTimeMs.value = totalTimeMs * newElapsed;
  }

  return { totalTime, elapsedTime, isPlaying, elapsedPercentage, pause, play, setTiming };
});