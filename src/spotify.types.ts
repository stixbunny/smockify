import { type } from 'os';

export interface SpotifyConnectionResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface TrackResponse {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: LinkedFrom;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}

export interface AlbumResponse {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: Restrictions;
  type: string;
  uri: string;
  copyrights: Copyright[];
  external_ids: ExternalIDS;
  genres: string[];
  label: string;
  popularity: number;
  artists: Artist[];
  tracks: Tracks;
}

export interface AlbumsResponse {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: AlbumAlbums[];
}

export interface ArtistResponse {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[]; //can be zero
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface ArtistTopTracksResponse {
  tracks: TrackResponse[];
}

export interface PlaylistResponse {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  public: boolean;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}

export interface Owner {
  external_urls: ExternalUrls;
  followers?: Followers;
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name?: string;
  name?: string;
}

export interface AlbumAlbums {
  album_type: 'album' | 'compilation' | 'single';
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: 'year' | 'month' | 'day';
  restrictions: Restrictions;
  type: string;
  uri: string;
  artists: Artist[];
  album_group: 'album' | 'single' | 'appears_on' | 'compilation';
}

export interface Artist {
  external_urls: ExternalUrls;
  followers?: Followers;
  genres?: string[];
  href: string;
  id: string;
  images?: Image[];
  name: string;
  popularity?: number;
  type: string;
  uri: string;
}

export interface Album {
  album_type: 'album' | 'compilation' | 'single';
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: 'year' | 'month' | 'day';
  restrictions: Restrictions;
  type: string;
  uri: string;
  copyrights: Copyright[];
  external_ids: ExternalIDS;
  genres: string[];
  label: string;
  popularity: number;
  album_group: string;
  artists: AlbumArtist[];
}

export interface AlbumArtist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Tracks {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: TracksItem[];
}

export interface TracksItem {
  added_at: string;
  added_by: Owner;
  is_local: boolean;
  track: TrackItemsTrack;
}

export interface TrackItemsTrack {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: LinkedFrom;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}

export interface Item {
  artists: LinkedFrom[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: LinkedFrom;
  restrictions: Restrictions;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Copyright {
  text: string;
  type: string;
}

export interface ExternalIDS {
  isrc: string;
  ean: string;
  upc: string;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}

export interface Restrictions {
  reason: string;
}

export interface Followers {
  href: string;
  total: number;
}

export interface LinkedFrom {
  external_urls?: ExternalUrls;
  href?: string;
  id: string;
  name?: string;
  type?: string;
  uri?: string;
}
