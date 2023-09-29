<script lang="ts" setup>
import NowPlayingButton from '../buttons/NowPlayingButton.vue';
import LyricsButton from '../buttons/LyricsButton.vue';
import QueueButton from '../buttons/QueueButton.vue';
import VolumeController from './VolumeController.vue';
import FullScreenButton from '../buttons/FullScreenButton.vue';
import PIPButton from '../buttons/PIPButton.vue';
import ConnectDeviceButton from '../buttons/ConnectDeviceButton.vue';
</script>

<template>
  <div id="player-misc" class="player-sub-container">
    <NowPlayingButton :active="false" />
    <LyricsButton :active="false" />
    <QueueButton :active="false" />
    <ConnectDeviceButton />
    <VolumeController />
    <PIPButton />
    <FullScreenButton />
  </div>
</template>

<style style>
#player-misc {
  width: 100%;
  display: flex;
  align-items: center;
}
</style>
