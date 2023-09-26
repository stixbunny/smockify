import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getSpotifyPlaylist } from '@/utils/spotifygetter';
import type { SimplePlaylist, SimpleAlbum, SimpleArtist, SimpleSong, Owner, SimpleAlbumArtist, SimpleSongArtist, SimpleImage, SimpleSongValue, SimpleAlbumValue, SimpleArtistValue, SimplePlaylistValue } from '@/types';

export const useLocalStore = defineStore('local', () => {
  const playlists = ref<SimplePlaylist>(new Map());
  const albums = ref<SimpleAlbum>(new Map());
  const artists = ref<SimpleArtist>(new Map());
  const songs = ref<SimpleSong>(new Map());
  const owners = ref<Set<Owner>>(new Set());
  const albumArtists = ref<Set<SimpleAlbumArtist>>(new Set());
  const songArtists = ref<Set<SimpleSongArtist>>(new Set());
  const images = ref<SimpleImage>(new Map());

  const myLibraryIds = {
    playlists: ["37i9dQZF1DX186v583rmzp", "3D6B2JCDW5k9yqJKKYh99J", "4hdwGGaXjpXLQSyMPSfD8H", "37i9dQZF1DZ06evO1tnejS", "37i9dQZF1DZ06evO1Uv28p", "37i9dQZF1DZ06evO25rXbO"],
    artists: ["2pAWfrd7WFF3XhVt9GooDL", "3YcBF2ttyueytpXtEzn1Za", "40Yq4vzPs9VNUrIBG5Jr2i", "3kVUvbeRdcrqQ3oHk5hPdx", "7oPftvlwr6VrsViSDV7fJY", "3jOstUTkEu2JkjvRdBA5Gu", "4tZwfgrHOc3mvqYlEYSvVi", "3AA28KZvwAUcZuOKwyblJQ", "3inCNiUr4R6XQ3W43s9Aqi", "34EP7KEpOjXcM2TCat1ISk", "6ilYV5oF8whllOnm4VZlYR"],
    albums: ["2VBcztE58pBKjIDS5oEgFh", "6pjuzPdAkJPdNBiKzcloXL", "65sHj9PvsbyD0uugGHjueN", "4ZVYZI1wY4TmLOQ3as1UNI", "5qt11cWjSs5Gbqj2Wyfu38"],
    podcasts: ["308BQUUnIkoH2UAXJCAt0g"],
  };

  const myLibrary = ref<(SimplePlaylistValue | SimpleAlbumValue | SimpleArtistValue)[]>([]);

  (async function fillLocal() {
    console.log("Setting up local data 😄...");
    const result = await getSpotifyPlaylist("3D6B2JCDW5k9yqJKKYh99J")
    if (result) {
      const { playlist: pl,
        owner: ow,
        songs: so,
        artists: ar,
        albumArtists: aa,
        songArtists: sa,
        albums: al,
        images: im } = result;
      playlists.value = new Map([...playlists.value, ...pl]);
      owners.value.add(ow);
      songs.value = new Map([...songs.value, ...so]);
      artists.value = new Map([...artists.value, ...ar]);
      albums.value = new Map([...albums.value, ...al]);
      images.value = new Map([...images.value, ...im]);
      albumArtists.value = new Set<SimpleAlbumArtist>([...albumArtists.value, ...aa]);
      songArtists.value = new Set<SimpleSongArtist>([...songArtists.value, ...sa]);
      console.log("Local data all setup 😁!");
      console.log("playlists");
      console.log(playlists.value);
      console.log("albums");
      console.log(albums.value);
      console.log("artists");
      console.log(artists.value);
      console.log("songs");
      console.log(songs.value);
      console.log("owners");
      console.log(owners.value);
      console.log("albumArtists");
      console.log(albumArtists.value);
      console.log("songArtists");
      console.log(songArtists.value);
      console.log("images")
      console.log(images.value);
      myLibrary.value.push(...playlists.value.values(), ...albums.value.values(), ...artists.value.values());
    };
  })();

  function findOwner(id: string) {
    for (const item of owners.value) if (item.id === id) return item;
  }

  function findAlbumArtistName(id: string) {
    for (const item of albumArtists.value) {
      if (item.album_id === id){
        return findArtistName(item.artist_id);
      }
    }
  }

  function findArtistName(id: string) {
    return artists.value.get(id)?.name;
  }

  // function findArtist(id: string) {
  //   return findInSet(id, artists.value);
  // }

  // function findAlbum(id: string) {
  //   return findInSet(id, albums.value);
  // }

  // function findPlaylist(id: string) {
  //   return findInSet(id, playlists.value);
  // }

  function findSmallImage(id: string) {
    return images.value.get(id + 'small')?.url || findBigImage(id);
  }

  function findBigImage(id: string) {
    return images.value.get(id + 'big')?.url || 'noimage';
  }

  function switchLike(id: string, type: 'album' | 'playlist' | 'song' | 'artist') {
    switch (type) {
      case 'album': {
        const album = albums.value.get(id);
        if(album) album.liked = !album.liked;
        break;
      }
      case 'playlist': {
        const playlist = playlists.value.get(id);
        if(playlist) playlist.liked = !playlist.liked;
        break;
      }
      case 'song': {
        const song = songs.value.get(id);
        if(song) song.liked = !song.liked;
        break;
      }
      case 'artist': {
        const artist = artists.value.get(id);
        if(artist) artist.liked = !artist.liked;
        break;
      }
      default:
        break;
    }
  }

  return { playlists, albums, artists, songs, owners, albumArtists, songArtists, myLibrary, findOwner, findAlbumArtistName, findSmallImage, findBigImage, switchLike };
});