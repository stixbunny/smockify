import { useMainStore } from '@/stores/main';
import type { ArtistTopTracksResponse } from '@/spotify.types';
import type { artistTopTrack } from '@/types';

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

export async function loadArtist(id: string) {
  const topTracks = await getArtistTopTracks(id);
  return { topTracks };
}
