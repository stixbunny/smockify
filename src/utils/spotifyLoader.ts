import { useMainStore } from '@/stores/main';
import type { ArtistTopTracksResponse, ArtistResponse } from '@/spotify.types';
import type { artistTopTrack, artist } from '@/types';

const { access_token } = useMainStore();

async function getArtistTopTracks(id: string, maxArtists = 5): Promise<artistTopTrack[] | null> {
  const url = `https://api.spotify.com/v1/artists/${id}/top-tracks?market=ES`;
  const authOptions = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + access_token,
    },
  };
  const response = await fetch(url, authOptions);
  if (response.ok) {
    const json: ArtistTopTracksResponse = await response.json();
    const topTracks: artistTopTrack[] = [];
    json.tracks.slice(0, maxArtists).forEach((entry) => {
      topTracks.push({
        songId: entry.id,
        songName: entry.name,
        duration_ms: entry.duration_ms,
        explicit: entry.explicit,
        imgUrl: entry.album.images[0].url,
      });
    });
    return topTracks;
  } else {
    return null;
  }
}

async function getArtist(id: string): Promise<artist | null> {
  const url = `https://api.spotify.com/v1/artists/${id}`;
  const authOptions = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + access_token,
    },
  };
  const response = await fetch(url, authOptions);
  if (response.ok) {
    const json: ArtistResponse = await response.json();
    const artist: artist = {
      id: json.id,
      name: json.name,
      image: json.images ? json.images[0].url : '',
      genres: json.genres,
    };
    return artist;
  } else {
    return null;
  }
}

export async function loadArtist(id: string) {
  const topTracks = await getArtistTopTracks(id);
  const artist = await getArtist(id);
  return { topTracks, artist };
}
