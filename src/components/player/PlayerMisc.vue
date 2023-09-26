<script lang="ts" setup>
import NowPlayingButton from '../buttons/NowPlayingButton.vue';
import LyricsButton from '../buttons/LyricsButton.vue';
import QueueButton from '../buttons/QueueButton.vue';
</script>

<template>
  <div id="player-misc" class="player-sub-container">
    <NowPlayingButton :active="false"/>
    <LyricsButton :active="false" />
    <QueueButton :active="false" />
  </div>
</template>

<style style>
#player-misc {
  display: flex;
  align-items: center;
}
</style>
