<script lang="ts" setup>
import { ref } from 'vue';
import IconNowPlaying from '../icons/IconNowPlaying.vue';

const props = defineProps<{
  active: boolean;
}>();

const active = ref(props.active);

function switchActive() {
  active.value = !active.value;
}
</script>
<template>
  <button :class="{ active: active }" @click="switchActive">
    <IconNowPlaying />
  </button>
</template>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /*for icon ::after*/
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  color: var(--text-subdued);
}
button.active {
  color: var(--text-bright-accent);
}
button:hover {
  color: var(--text-base);
  transform: scale(1.1);
}
button.active:hover {
  color: var(--text-bright-accent);
  transform: scale(1.1);
}
button:active {
  transform: scale(1);
}
button.active::after {
  display: block;
  position: absolute;
  bottom: 0px;
  left: 14px;
  border-radius: 50%;
  height: 4px;
  width: 4px;
  content: '';
  background-color: var(--text-bright-accent);
}
</style>
