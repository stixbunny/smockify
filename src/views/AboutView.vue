<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useMainStore } from '@/stores/main';
import { supabase as sup } from '../utils/supabase';
import type { Tables } from '../database.types';

const supabase = sup;
const store = useMainStore();
const names = ref<Tables<'names'>[] | null>([]);
async function getNames() {
  const { data } = await supabase.from('names').select();
  names.value = data;
}
onMounted(() => {
  getNames();
});
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="name in names" :key="name.id">{{ name.name }}</li>
    </ul>
    <ul>
      <li>{{ store.access_token }}</li>
      <li>{{ store.token_type }}</li>
      <li>{{ store.expires_in }}</li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
