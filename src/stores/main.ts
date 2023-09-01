import { defineStore } from 'pinia';
import { response as spotifyResponse } from '../utils/spotify';

export const useMainStore = defineStore('main', () => {
  const { access_token, token_type, expires_in } = spotifyResponse;

  return { access_token, token_type, expires_in };
});
