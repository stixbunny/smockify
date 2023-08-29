<script lang="ts" setup>
import PlayerControlButton from './PlayerControlButton.vue';
import IconRepeat from '../icons/IconRepeat.vue';
import { ref } from 'vue';

type repeatState = false | true | 'once';

const isRepeating = ref<repeatState>(true);

function repeat() {
  switch(isRepeating.value) {
    case true:
      isRepeating.value = 'once';
      break;
    case false:
      isRepeating.value = true;
      break;
    case 'once':
      isRepeating.value = false;
      break;
  }
}
</script>
<template>
  <PlayerControlButton @click="repeat" :class="{'active': isRepeating}">
    <IconRepeat :repeat="isRepeating" />
  </PlayerControlButton>
</template>

<style scoped>
button.active::after {
  display: block;
  position: absolute;
  bottom: 0px;
  left: 14px;
  border-radius: 50%;
  height: 4px;
  width: 4px;
  content: '';
  background-color: var(--text-subdued);
}
button.active:hover,
button.active:focus {
  color: var(--text-bright-accent);
}
button.active:hover::after,
button.active:focus::after {
  background-color: var(--text-bright-accent);
}
</style>