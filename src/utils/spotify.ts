import { supabase } from "./supabase";
import type { SpotifyConnectionResponse } from '../spotify.types';

const clientId = import.meta.env.VITE_SPOTIFY_ID;
const { data: clientSecret } = await supabase.rpc('read_secret', { secret_name: 'SPOTIFY_CLIENT_SECRET' });
const url = 'https://accounts.spotify.com/api/token';
const authOptions = {
  method: "POST",
  headers: {
    'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`),
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams({
    'grant_type': 'client_credentials'
  }),
};

const getSpotifyConnect = async (url = ""): Promise<SpotifyConnectionResponse> => {
  const response = await fetch(url, authOptions);
  console.log("Connecting to Spotify...");
  return response.json();
}

export const response = await getSpotifyConnect(url);