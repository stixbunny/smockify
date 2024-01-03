import { useMainStore } from '@/stores/main';
import type {
  ArtistTopTracksResponse,
  ArtistResponse,
  AlbumsResponse,
  RelatedArtistsResponse,
  AlbumResponse,
  PlaylistResponse,
} from '@/spotify.types';
import type {
  artistTopTrack,
  artist,
  artistItem,
  album,
  albumArtist,
  albumSongArtist,
  albumDisc,
  playlist,
  playlistItem,
  cardItem,
} from '@/types';

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
      image: Object.hasOwn(json, 'images') ? json.images[0].url : '',
      genres: json.genres,
      followers: json.followers.total,
    };
    return artist;
  } else {
    return null;
  }
}

async function getArtistItems(
  id: string,
  type: 'album' | 'single' | 'appears_on' | 'compilation',
  limit = 10
): Promise<artistItem[] | null> {
  const url = `https://api.spotify.com/v1/artists/${id}/albums?include_groups=${type}&limit=${limit}&offset=0&market=ES`;
  const authOptions = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + access_token,
    },
  };
  const response = await fetch(url, authOptions);
  if (response.ok) {
    const json: AlbumsResponse = await response.json();
    const items: artistItem[] = [];
    json.items.forEach((entry) => {
      const itemType = entry.album_group;
      const item: artistItem = {
        name: entry.name,
        id: entry.id,
        image: Object.hasOwn(entry, 'images') ? entry.images[1].url : '',
        type: itemType,
      };
      items.push(item);
    });
    return items;
  } else {
    return null;
  }
}

async function getArtistRelatedArtists(id: string, maxArtists = 10): Promise<cardItem[] | null> {
  const url = `https://api.spotify.com/v1/artists/${id}/related-artists`;
  const authOptions = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + access_token,
    },
  };
  const response = await fetch(url, authOptions);
  if (response.ok) {
    const json: RelatedArtistsResponse = await response.json();
    const artists: cardItem[] = [];
    json.artists.slice(0, maxArtists).forEach((entry) => {
      artists.push({
        id: entry.id,
        title: entry.name,
        img: Object.hasOwn(entry, 'images') ? entry.images[1].url : '',
        type: 'artist',
      });
    });
    return artists;
  } else {
    return null;
  }
}

async function getAlbum(id: string): Promise<album | null> {
  const url = `https://api.spotify.com/v1/albums/${id}?market=ES`;
  const authOptions = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + access_token,
    },
  };
  const response = await fetch(url, authOptions);
  if (response.ok) {
    const json: AlbumResponse = await response.json();
    const releaseDate = json.release_date;
    const releaseYear = new Date(releaseDate).getFullYear();
    const copyrights: string[] = [];
    json.copyrights.forEach((entry) => {
      copyrights.push(entry.text);
    });
    const artists: albumArtist[] = [];
    json.artists.forEach((entry) => {
      artists.push({
        name: entry.name,
        id: json.id,
      });
    });
    const discs: albumDisc[] = [];
    let totalDuration = 0;
    let numberOfSongs = 0;
    json.tracks.items.forEach((entry) => {
      numberOfSongs += 1;
      const artists: albumSongArtist[] = [];
      entry.artists.forEach((artist) => {
        artists.push({
          name: artist.name,
          id: artist.id,
        });
      });
      const tempSong = {
        name: entry.name,
        id: entry.id,
        durationMs: entry.duration_ms,
        explicit: entry.explicit,
        artists: artists,
        number: entry.track_number,
      };
      if (discs.filter((x) => x.number === entry.disc_number).length === 0) {
        discs.push({
          number: entry.disc_number,
          songs: [],
        });
      }
      discs.find((x) => x.number === entry.disc_number)?.songs.push(tempSong);
      totalDuration += entry.duration_ms;
    });
    const album: album = {
      albumType: json.album_type,
      totalTracks: json.total_tracks,
      totalDuration: totalDuration,
      id: json.id,
      name: json.name,
      imgUrl: json.images ? json.images[0].url : '',
      releaseDate: releaseDate,
      releaseYear: releaseYear,
      copyrights: copyrights,
      artists: artists,
      numberOfSongs: numberOfSongs,
      discs: discs,
    };
    return album;
  } else {
    return null;
  }
}

async function getPlaylist(id: string): Promise<playlist | null> {
  const url = `https://api.spotify.com/v1/playlists/${id}`;
  const authOptions = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + access_token,
    },
  };
  const response = await fetch(url, authOptions);
  if (response.ok) {
    const json: PlaylistResponse = await response.json();
    const songs: playlistItem[] = [];
    let totalDuration = 0;
    let numberOfSongs = 0;
    json.tracks.items.forEach((item) => {
      const artists: albumArtist[] = [];
      item.track.artists.forEach((artist) => {
        numberOfSongs += 1;
        totalDuration += item.track.duration_ms;
        artists.push({
          name: artist.name,
          id: artist.id,
        });
      });
      songs.push({
        id: item.track.id,
        name: item.track.name,
        artists: artists,
        albumId: item.track.album.id,
        albumName: item.track.album.name,
        image: Object.hasOwn(item.track.album, 'images')
          ? item.track.album.images.slice(-1)[0].url
          : '',
        addedOn: item.added_at,
        duration: item.track.duration_ms,
        explicit: item.track.explicit,
      });
    });
    const playlist: playlist = {
      id: json.id,
      name: json.name,
      description: json.description,
      image: Object.hasOwn(json, 'images') ? json.images.slice(0)[0].url : '',
      likes: json.followers.total,
      ownerId: json.owner.id,
      ownerName: json.owner.display_name ? json.owner.display_name : '',
      songs: songs,
      numberOfSongs: numberOfSongs,
      totalDuration: totalDuration,
    };
    return playlist;
  } else {
    return null;
  }
}

export async function loadArtist(id: string) {
  const topTracks = await getArtistTopTracks(id);
  const artist = await getArtist(id);
  const relatedArtists = await getArtistRelatedArtists(id);
  const albums = await getArtistItems(id, 'album');
  const singles = await getArtistItems(id, 'single');
  const compilations = await getArtistItems(id, 'compilation');
  const appearsOn = await getArtistItems(id, 'appears_on');

  const discography = {
    albums: {
      name: 'Álbumes',
      content: albums,
    },
    singles: {
      name: 'Sencillos y EP',
      content: singles,
    },
    compilations: {
      name: 'Recopilatorios',
      content: compilations,
    },
  };

  return { topTracks, artist, relatedArtists, discography, appearsOn };
}

export async function loadAlbum(id: string) {
  const album = await getAlbum(id);
  return { album };
}

export async function loadPlaylist(id: string) {
  const playlist = await getPlaylist(id);
  return { playlist };
}
