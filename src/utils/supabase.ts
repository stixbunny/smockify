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
  return artists;
}

export async function getArtist(artistId: string) {
  const { data: artist, error } = await supabase
    .from('artist')
    .select('*')
    .eq('id', artistId);
  return artist ? artist[0] : null;
}

export async function getAlbums(artistId: string) {
  const { data: albumsIds, error } = await supabase
    .from('artist_discography')
    .select('album_id')
    .eq('artist_id', artistId);

  const albums : Tables<'album'>[] = [];

  for (const albumId in albumsIds) {
    const album = await getAlbum(albumId);
    if (album) {
      albums.push(album);
    }
  }
}

export async function getAlbum(id: string) {
  const { data: album, error } = await supabase
    .from('album')
    .select('*')
    .eq('id', id);

  return album ? album[0] : null;
}