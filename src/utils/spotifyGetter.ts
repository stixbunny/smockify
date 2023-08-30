import type { ArtistResponse, AlbumsResponse, Tracks } from '../spotify.types';
import type { Tables } from "@/database.types";
import { response as spotifyResponse } from '../utils/spotify';

const { access_token } = spotifyResponse;
console.log('access token: ' + access_token);

function stringToDate(dateString: string, precision: 'year' | 'month' | 'day') {
  switch(precision) {
    case 'day':
      return dateString;
    case 'month':
      return dateString + '-01';
    case 'year':
      if (dateString.length == 7) return dateString + '-01';
      else return dateString + '-01-01';
    default:
      return dateString;
  }
}

export async function getSpotifyArtist(id: string) {
  const url = "https://api.spotify.com/v1/artists/";
  const authOptions = {
    method: "GET",
    headers: {
      'Authorization': 'Bearer ' + access_token,
    }
  }
  const response = await fetch(url + id, authOptions);
  if (response.ok) {
    const json: ArtistResponse = await response.json();
    return {
      id: json.id,
      img_url: json.images[2].url,
      name: json.name,
      followers: json.followers.total,
      is_following: false,
    };
  } else {
    return null;
  }
}
export async function getSpotifyAlbums(artistId: string) {
  const url = `https://api.spotify.com/v1/artists/${artistId}/albums`;
  const authOptions = {
    method: "GET",
    headers: {
      'Authorization': 'Bearer ' + access_token,
    }
  }
  const response = await fetch(url, authOptions);
  if (response.ok) {
    const json: AlbumsResponse = await response.json();
    const albums : Tables<'album'>[] = [];
    const artists = [];
    for(const album of json.items) {
      albums.push({
        id: album.id,
        img_url: album.images[2].url,
        name: album.name,
        year: stringToDate(album.release_date, album.release_date_precision) ,
        is_liked: false,
        album_type: album.album_type,
      })
      const temp = [];
      for(const artist of album.artists) {
        temp.push(artist.id);
      }
      artists.push(temp);
    }
    return { albums, artists };
  } else {
    return null;
  }
}
export async function getSpotifyTracks(albumId: string) {
  const url = `https://api.spotify.com/v1/albums/${albumId}/tracks`;
  const authOptions = {
    method: "GET",
    headers: {
      'Authorization': 'Bearer ' + access_token,
    }
  }
  const response = await fetch(url, authOptions);
  if (response.ok) {
    const json: Tracks = await response.json();
    const tracks : Tables<'song'>[] = [];
    const artists = [];
    for(const track of json.items) {
      tracks.push({
        album_id: albumId,
        duration: track.duration_ms,
        id: track.id,
        is_explicit: track.explicit,
        is_liked: false,
        name: track.name,
        track_number: track.track_number,
      })
      const temp = [];
      for(const artist of track.artists) {
        temp.push(artist.id);
      }
      artists.push(temp);
    }
    return {tracks, artists};
  } else {
    return null;
  }
}