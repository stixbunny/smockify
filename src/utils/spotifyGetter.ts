import type { ArtistResponse, AlbumsResponse, PlaylistResponse, Tracks, Album } from '../spotify.types';
import type { Tables } from "@/database.types";
import { response as spotifyResponse } from '../utils/spotify';
import type { Owner, SimpleAlbum, SimpleAlbumArtist, SimpleArtist, SimpleImage, SimplePlaylist, SimplePlaylistValue, SimpleSong, SimpleSongArtist } from '@/types';

const { access_token } = spotifyResponse;
console.log('access token: ' + access_token);

function stringToDate(dateString: string, precision: 'year' | 'month' | 'day') {
  switch (precision) {
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

// export async function getSpotifyArtist(id: string) {
//   const url = "https://api.spotify.com/v1/artists/";
//   const authOptions = {
//     method: "GET",
//     headers: {
//       'Authorization': 'Bearer ' + access_token,
//     }
//   }
//   const response = await fetch(url + id, authOptions);
//   if (response.ok) {
//     const json: ArtistResponse = await response.json();
//     console.log(`artist ${json.id}:`);
//     console.log(json.images);
//     return {
//       id: json.id,
//       img_url: json.images.length > 0? json.images[2].url : '',
//       name: json.name,
//       followers: json.followers.total,
//       is_following: false,
//     };
//   } else {
//     return null;
//   }
// }
// export async function getSpotifyAlbums(artistId: string) {
//   const url = `https://api.spotify.com/v1/artists/${artistId}/albums`;
//   const authOptions = {
//     method: "GET",
//     headers: {
//       'Authorization': 'Bearer ' + access_token,
//     }
//   }
//   const response = await fetch(url, authOptions);
//   if (response.ok) {
//     const json: AlbumsResponse = await response.json();
//     const albums : Tables<'album'>[] = [];
//     const artists = [];
//     for(const album of json.items) {
//       albums.push({
//         id: album.id,
//         img_url: album.images[2].url,
//         name: album.name,
//         year: stringToDate(album.release_date, album.release_date_precision) ,
//         is_liked: false,
//         album_type: album.album_type,
//       })
//       const temp = [];
//       for(const artist of album.artists) {
//         temp.push(artist.id);
//       }
//       artists.push(temp);
//     }
//     return { albums, artists };
//   } else {
//     return null;
//   }
// }
// export async function getSpotifyTracks(albumId: string) {
//   const url = `https://api.spotify.com/v1/albums/${albumId}/tracks`;
//   const authOptions = {
//     method: "GET",
//     headers: {
//       'Authorization': 'Bearer ' + access_token,
//     }
//   }
//   const response = await fetch(url, authOptions);
//   if (response.ok) {
//     const json: Tracks = await response.json();
//     const tracks : Tables<'song'>[] = [];
//     const artists : string[][] = [];
//     for(const track of json.items) {
//       tracks.push({
//         album_id: albumId,
//         duration: track.duration_ms,
//         id: track.id,
//         is_explicit: track.explicit,
//         is_liked: false,
//         name: track.name,
//         track_number: track.track_number,
//       })
//       const temp : string[] = [];
//       for(const artist of track.artists) {
//         temp.push(artist.id);
//       }
//       artists.push(temp);
//     }
//     return {tracks, artists};
//   } else {
//     return null;
//   }
// }



export async function getSpotifyPlaylist(playlistId: string) {
  const url = `
  https://api.spotify.com/v1/playlists/${playlistId}`;
  const authOptions = {
    method: "GET",
    headers: {
      'Authorization': 'Bearer ' + access_token,
    }
  }
  const response = await fetch(url, authOptions);
  if (response.ok) {
    const json: PlaylistResponse = await response.json();
    const owner: Owner = {
      id: json.owner.id,
      display_name: json.owner.display_name ? json.owner.display_name : "",
    };
    const playlist: SimplePlaylist = new Map([
      [json.id, {
        id: json.id,
        name: json.name,
        description: json.description,
        followers: json.followers.total,
        owner_id: json.owner.id,
      }]
    ]);
    const songs: SimpleSong = new Map();
    const artists: SimpleArtist = new Map();
    const albums: SimpleAlbum = new Map();
    const songArtists: Set<SimpleSongArtist> = new Set();
    const albumArtists: Set<SimpleAlbumArtist> = new Set();
    const images: SimpleImage = new Map();
    images.set(
      json.id+'big',
      {
        image_of: json.id,
        url: json.images[0].url,
        type: 'big',
      }
    )
    for (const song of json.tracks.items) {
      songs.set(
        song.track.id,
        {
          id: song.track.id,
          album_id: song.track.album.id,
          disc_number: song.track.disc_number,
          duration_ms: song.track.duration_ms,
          explicit: song.track.explicit,
          name: song.track.name,
          track_number: song.track.track_number,
          type: song.track.type,
        }
      );
      const album: Album = song.track.album;
      albums.set(
        album.id,
        {
          id: album.id,
          album_type: album.album_type,
          total_tracks: album.total_tracks,
          name: album.name,
          release_date: stringToDate(album.release_date, album.release_date_precision),
        }
      );
      images.set(
        album.id+'big',
        {
          image_of: album.id,
          url: album.images[0].url,
          type: 'big',
        }
      );
      images.set(
        album.id+'small',
        {
          image_of: album.id,
          url: album.images[album.images.length - 1].url,
          type: 'small',
        }
      );
      for (const artist of song.track.artists) {
        artists.set(
          artist.id,
          {
            id: artist.id,
            followers: artist.followers ? artist.followers.total : 0,
            genres: artist.genres,
            name: artist.name,
            popularity: artist.popularity,
          }
        );
        songArtists.add({
          artist_id: artist.id,
          song_id: song.track.id,
        });
        images.set(
          artist.id+'big',
          {
            image_of: artist.id,
            url: artist.images? artist.images[0].url : '',
            type: 'big',
          }
        );
        images.set(
          artist.id+'small',
          {
            image_of: artist.id,
            url: artist.images? artist.images[artist.images.length - 1].url : '',
            type: 'small',
          }
        );
      }
      for (const albumartist of album.artists) {
        albumArtists.add({
          artist_id: albumartist.id,
          album_id: album.id,
        });
      }
    }
    return { playlist, owner, songs, artists, albums, images, albumArtists, songArtists };
  }
}