<script lang="ts" setup>
import ShuffleButton from './ShuffleButton.vue';
import PrevButton from './PrevButton.vue';
import NextButton from './NextButton.vue';
import RepeatButton from './RepeatButton.vue';
import PlayButton from './PlayButton.vue';
import PlayerProgressBar from './PlayerProgressBar.vue';
import { usePlayerStore } from '@/stores/player';

const player = usePlayerStore();
</script>

<template>
  <div id="player-controls">
    <div class="top">
      <div class="left">
        <ShuffleButton />
        <PrevButton />
      </div>
      <div class="play">
        <PlayButton />
      </div>
      <div class="right">
        <NextButton />
        <RepeatButton />
      </div>
    </div>
    <div class="bottom">
      <div class="elapsed">{{player.elapsedTime}}</div>
      <PlayerProgressBar />
      <div class="total">{{player.totalTime}}</div>
    </div>
  </div>
</template>

<style scoped>
#player-controls {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  color: var(--text-subdued);
}
#player-controls > .top {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
}
#player-controls .top > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}
#player-controls .top > .left {
  justify-content: flex-end;
}
#player-controls .top > .right {
  justify-content: flex-start;
}
#player-controls > .bottom {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: var(--fs-smaller);
}
</style>
