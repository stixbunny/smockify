import { createClient } from '@supabase/supabase-js';
import type { Database, Tables } from '../database.types';

export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE,
  import.meta.env.VITE_ANON_SUPABASE
);

export async function getArtists() {
  const { data: artists, error } = await supabase
    .from('artist')
    .select('*');

  if(error) {
    console.log(error);
  }
  return artists;
}

export async function getArtist(artistId: string) {
  const { data: artist, error } = await supabase
    .from('artist')
    .select('*')
    .eq('id', artistId);

  if(error) {
    console.log(error);
  }
  return artist ? artist[0] : null;
}

export async function setArtist(artist: Tables<'artist'>) {
  const { error } = await supabase
    .from('artist')
    .insert(artist);

  if (error) {
    console.log(error.code);
    return false;
  } else return true;
}

export async function setArtists(artists: Tables<'artist'>[]) {
  const { error } = await supabase
    .from('artist')
    .insert(artists);

  if (error) {
    console.log(error.code);
    return false;
  } else return true;
}

export async function getAlbums(artistId: string) {
  const { data: albumsIds, error } = await supabase
    .from('artist_discography')
    .select('album_id')
    .eq('artist_id', artistId);

  if(error) {
    console.log(error);
  }
  const albums: Tables<'album'>[] = [];

  for (const albumId in albumsIds) {
    const album = await getAlbum(albumId);
    if (album) {
      albums.push(album);
    }
  }
  return albums;
}

export async function getAlbum(id: string) {
  const { data: album, error } = await supabase
    .from('album')
    .select('*')
    .eq('id', id);
  
    if(error) {
    console.log(error);
  }
  return album ? album[0] : null;
}

export async function setAlbum(album: Tables<'album'>) {
  const { error } = await supabase
    .from('album')
    .insert(album);

  if (error) {
    console.log(error.code);
    return false;
  } else return true;
}

export async function setAlbums(albums: Tables<'album'>[]) {
  console.log('Running setAlbums...');
  const { error } = await supabase
    .from('album')
    .insert(albums);

  if (error) {
    console.log(error);
    return false;
  } else return true;
}

export async function setSong(song: Tables<'song'>) {
  const { error } = await supabase
    .from('song')
    .insert(song);
  if (error) {
    console.log(error.code);
    return false;
  } else return true;
}

export async function setSongs(songs: Tables<'song'>[]) {
  const { error } = await supabase
    .from('song')
    .insert(songs);
  if (error) {
    console.log(error.code);
    return false;
  } else return true;
}

export async function setSongsArtists(songs: Tables<'song'>[], artistsIds: string[][]) {
  for (let i = 0; i < songs.length; i++) {
    for (const artistId of artistsIds[i]) {
      const { error } = await supabase
        .from('song_artist')
        .insert([{
          artist_id: artistId,
          song_id: songs[i].id,
        }]);
      if (error) {
        console.log(error);
      }
    }
  }
  return true;
}

export async function setAlbumArtists(albums: Tables<'album'>[], artistsIds: string[][]) {
  console.log('Running setAlbumArtists...');
  console.log('Got:');
  console.log(albums);
  console.log(artistsIds);
  for (let i = 0; i < albums.length; i++) {
    for (const artistId of artistsIds[i]) {
      const { error } = await supabase
        .from('artist_discography')
        .insert([{
          artist_id: artistId,
          album_id: albums[i].id,
        }]);
      if (error) {
        console.log(error);
      }
    }
  }
  return true;
}