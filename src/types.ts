export type VolumePower = 'muted' | 'low' | 'medium' | 'high';

export interface homeSection {
  title: string;
  items: cardItem[];
}

export interface cardItem {
  img: string;
  title: string;
  subtitle?: string;
  id: string;
  type: 'album' | 'artist' | 'playlist';
}

export class myLibraryItem {
  id: string;
  title: string;
  author: string;
  img: string;
  type: 'song' | 'album' | 'artist' | 'playlist';
  constructor(
    id: string,
    title: string,
    author: string,
    img: string,
    type: 'song' | 'album' | 'artist' | 'playlist'
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.img = img;
    this.type = type;
  }
}

export interface currentSong {
  songId: string;
  artistId: string;
  albumId: string;
  songName: string;
  artistName: string;
  duration_ms: number;
  explicit: boolean;
  isLiked: boolean;
  imgUrl: string;
}

// No way of getting total number of streams
export interface artistTopTrack {
  songId: string;
  songName: string;
  duration_ms: number;
  explicit: boolean;
  imgUrl: string;
}

export interface artist {
  id: string;
  name: string;
  genres: string[];
  image: string; //can be zero
  followers: number;
}

export interface artistItem {
  name: string;
  id: string;
  image: string;
  type: 'album' | 'single' | 'appears_on' | 'compilation';
}

export interface album {
  albumType: 'album' | 'compilation' | 'single';
  totalTracks: number;
  totalDuration: number;
  id: string;
  name: string;
  imgUrl: string;
  releaseDate: string;
  releaseYear: number;
  copyrights: string[];
  artists: albumArtist[];
  numberOfSongs: number;
  discs: albumDisc[];
}

export interface albumSong {
  name: string;
  id: string;
  durationMs: number;
  number: number;
  explicit: boolean;
  artists: albumSongArtist[];
}

export interface albumArtist {
  name: string;
  id: string;
}

export interface albumSongArtist {
  name: string;
  id: string;
}

export interface albumDisc {
  number: number;
  songs: albumSong[];
}

export interface playlist {
  id: string;
  name: string;
  description: string;
  likes: number;
  image: string;
  ownerId: string;
  ownerName: string;
  songs: playlistItem[];
  totalDuration: number;
  numberOfSongs: number;
}

export interface playlistItem {
  id: string;
  name: string;
  artists: albumArtist[];
  albumId: string;
  albumName: string;
  image: string;
  addedOn: string;
  duration: number;
  explicit: boolean;
}

export interface simpleArtist {
  name: string;
  id: string;
}

export interface artistDiscography {
  albums: {
    name: string
    content: artistItem[] | null;
  };
  singles: {
    name: string;
    content: artistItem[] | null;
  };
  compilations: {
    name: string;
    content: artistItem[] | null;
  };
}
