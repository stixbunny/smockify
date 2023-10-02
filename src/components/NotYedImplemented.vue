<script lang="ts" setup>
import { withDefaults } from 'vue';

interface Props {
  message?: string,
}

const props = withDefaults(defineProps<Props>(), {
  message: 'Lo siento, esto aún no ha sido implementado.',
});
</script>

<template>
  <div class="container">
    <div class="content">
      {{ message }}
    </div>
  </div>
</template>

<style scoped>
div.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-large);
}
div.content {
  text-wrap: balance;
}
</style>
