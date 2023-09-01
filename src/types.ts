export type VolumePower = 'low' | 'medium' | 'high';

export interface SimpleSongValue {
  id: string,
  album_id: string;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  name: string;
  track_number: number;
  type: string;
}

export type SimpleSong= Map<string, SimpleSongValue>;

export interface SimpleSongArtist {
  artist_id: string,
  song_id: string,
}

export interface SimpleAlbumValue {
  id: string;
  album_type: 'album' | 'compilation' | 'single';
  total_tracks: number;
  name: string;
  release_date: string;
}

export type SimpleAlbum= Map<string, SimpleAlbumValue>;

export interface SimpleAlbumArtist {
  artist_id: string;
  album_id: string;
}

export interface SimpleArtistValue {
  id: string;
  followers?: number;
  genres?: string[];
  name: string;
  popularity?: number;
}

export type SimpleArtist = Map<string, SimpleArtistValue>;

export interface SimplePlaylistValue {
  id: string;
  description: string;
  followers: number;
  owner_id: string;
  name: string;
}

export type SimplePlaylist = Map<string, SimplePlaylistValue>;

export interface Owner {
  id: string;
  display_name: string;
}

export interface SimplePlaylistSong {
  playlist_id: string;
  song_id: string;
}

export interface Copyright {
  album_id: string; //can be multiple per albu
  text: string;
  type: string;
}

export interface SimpleImageValue {
  image_of: string;
  url: string;
  type: 'big' | 'small';
}

export type SimpleImage = Map<string, SimpleImageValue>;
