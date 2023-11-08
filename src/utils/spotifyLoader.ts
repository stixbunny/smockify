import { useMainStore } from '@/stores/main';
import type { ArtistTopTracksResponse, ArtistResponse, AlbumsResponse } from '@/spotify.types';
import type { artistTopTrack, artist, artistItem } from '@/types';

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

async function getArtistAlbums(
  id: string
): Promise<{
  albums: artistItem[];
  singles: artistItem[];
  appearsOn: artistItem[];
  compilations: artistItem[];
} | null> {
  const url = `https://api.spotify.com/v1/artists/${id}/albums`;
  const authOptions = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + access_token,
    },
  };
  const response = await fetch(url, authOptions);
  if (response.ok) {
    const json: AlbumsResponse = await response.json();
    const albums: artistItem[] = [];
    const singles: artistItem[] = [];
    const appearsOn: artistItem[] = [];
    const compilations: artistItem[] = [];
    json.items.forEach((entry) => {
      const itemType = entry.album_group;
      const item: artistItem = {
        name: entry.name,
        id: entry.id,
        image: Object.hasOwn(entry, 'images') ? entry.images.slice(-1)[0].url : '',
        type: itemType,
      };
      switch (itemType) {
        case 'album':
          albums.push(item);
          break;
        case 'single':
          singles.push(item);
          break;
        case 'appears_on':
          appearsOn.push(item);
          break;
        case 'compilation':
          compilations.push(item);
          break;
      }
    });
    return { albums, singles, appearsOn, compilations };
  } else {
    return null;
  }
}

export async function loadArtist(id: string) {
  const topTracks = await getArtistTopTracks(id);
  const artist = await getArtist(id);
  const artistItems = await getArtistAlbums(id);
  return { topTracks, artist, artistItems };
}
