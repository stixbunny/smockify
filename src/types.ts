export type VolumePower = 'muted' | 'low' | 'medium' | 'high';

export class myLibraryItem {
  id: string;
  title: string;
  author: string;
  img: string;
  type: 'song' | 'album' | 'artist' | 'playlist';
  constructor(id: string, title: string, author: string, img: string, type: 'song' | 'album' | 'artist' | 'playlist') {
    this.id = id;
    this.title = title;
    this.author = author;
    this.img = img;
    this.type = type;
  }
}

export interface currentSong {
  songId: string,
  artistId: string,
  albumId: string,
  songName: string,
  artistName: string,
  duration_ms: number,
  explicit: boolean,
  isLiked: boolean,
  imgUrl: string,
}

export interface SimpleSongValue {
  id: string,
  album_id: string;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  name: string;
  track_number: number;
  type: string;
  liked: boolean;
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
  liked: boolean;
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
  liked: boolean;
}

export type SimpleArtist = Map<string, SimpleArtistValue>;

export interface SimplePlaylistValue {
  id: string;
  description: string;
  followers: number;
  owner_id: string;
  name: string;
  liked: boolean;
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
