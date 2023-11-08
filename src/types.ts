export type VolumePower = 'muted' | 'low' | 'medium' | 'high';

export interface homeSection {
  title: string;
  items: cardItem[];
}

export interface cardItem {
  img: string;
  title: string;
  subtitle: string;
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
}

export interface artistItem {
  name: string;
  id: string;
  image: string;
  type: 'album' | 'single' | 'appears_on' | 'compilation';
}
