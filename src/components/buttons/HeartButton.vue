<script lang="ts" setup>
import { ref } from 'vue';
import IconHeart from '../icons/IconHeart.vue';
import { useLocalStore } from '@/stores/local';

const local = useLocalStore();

const props = defineProps<{
  id: string;
  type: 'album' | 'playlist' | 'song' | 'artist';
  liked: boolean;
}>();

const isLiked = ref(props.liked);

function switchLike() {
  isLiked.value = !isLiked.value;
  local.switchLike(props.id, props.type);
}
</script>
<template>
  <button :class="{ liked: isLiked }" @click="switchLike">
    <IconHeart :liked="isLiked" />
  </button>
</template>

<style scoped>
button {
  color: var(--text-subdued);
  border: none;
  background: transparent;
}
button.liked {
  color: var(--text-bright-accent);
}
button:hover {
  color: var(--text-base);
  transform: scale(1.1);
}
button.liked:hover {
  color: var(--text-bright-accent);
  transform: scale(1.1);
}

button:active {
  transform: scale(1);
}
</style>
