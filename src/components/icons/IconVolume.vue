<script lang="ts" setup>
import type { VolumePower } from '../../types';
const props = withDefaults(
  defineProps<{
    mode?: VolumePower;
  }>(),
  {
    mode: 'medium',
  }
);
</script>

<template>
  <template v-if="props.mode == 'low'">
    <svg
      role="presentation"
      height="16"
      width="16"
      aria-hidden="true"
      aria-label="Volumen bajo"
      id="volume-icon"
      viewBox="0 0 16 16"
    >
      <path
        d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"
      ></path>
    </svg>
  </template>
  <template v-else-if="props.mode == 'medium'">
    <svg
      role="presentation"
      height="16"
      width="16"
      aria-hidden="true"
      aria-label="Volumen medio"
      id="volume-icon"
      viewBox="0 0 16 16"
    >
      <path
        d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z"
      ></path>
    </svg>
  </template>
  <template v-else-if="props.mode == 'high'">
    <svg
      role="presentation"
      height="16"
      width="16"
      aria-hidden="true"
      aria-label="Volumen alto"
      id="volume-icon"
      viewBox="0 0 16 16"
    >
      <path
        d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"
      ></path>
      <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path>
    </svg>
  </template>
</template>
