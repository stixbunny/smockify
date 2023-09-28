import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getSpotifyPlaylist } from '@/utils/spotifyGetter';
import { type SimplePlaylist, type SimpleAlbum, type SimpleArtist, type SimpleSong, type Owner, type SimpleAlbumArtist, type SimpleSongArtist, type SimpleImage, type SimpleSongValue, type SimpleAlbumValue, type SimpleArtistValue, type SimplePlaylistValue } from '@/types';
import { myLibraryItem } from '@/types';

const myLibraryIds = {
  playlists: ["37i9dQZF1DX186v583rmzp", "3D6B2JCDW5k9yqJKKYh99J", "4hdwGGaXjpXLQSyMPSfD8H", "37i9dQZF1DZ06evO1tnejS", "37i9dQZF1DZ06evO1Uv28p", "37i9dQZF1DZ06evO25rXbO"],
  artists: ["2pAWfrd7WFF3XhVt9GooDL", "3YcBF2ttyueytpXtEzn1Za", "40Yq4vzPs9VNUrIBG5Jr2i", "3kVUvbeRdcrqQ3oHk5hPdx", "7oPftvlwr6VrsViSDV7fJY", "3jOstUTkEu2JkjvRdBA5Gu", "4tZwfgrHOc3mvqYlEYSvVi", "3AA28KZvwAUcZuOKwyblJQ", "3inCNiUr4R6XQ3W43s9Aqi", "34EP7KEpOjXcM2TCat1ISk", "6ilYV5oF8whllOnm4VZlYR"],
  albums: ["2VBcztE58pBKjIDS5oEgFh", "6pjuzPdAkJPdNBiKzcloXL", "65sHj9PvsbyD0uugGHjueN", "4ZVYZI1wY4TmLOQ3as1UNI", "5qt11cWjSs5Gbqj2Wyfu38"],
  podcasts: ["308BQUUnIkoH2UAXJCAt0g"],
};

export const useLocalStore = defineStore('local', () => {
  const playlists = ref<SimplePlaylist>(new Map());
  const albums = ref<SimpleAlbum>(new Map());
  const artists = ref<SimpleArtist>(new Map());
  const songs = ref<SimpleSong>(new Map());
  const owners = ref<Set<Owner>>(new Set());
  const albumArtists = ref<Set<SimpleAlbumArtist>>(new Set());
  const songArtists = ref<Set<SimpleSongArtist>>(new Set());
  const images = ref<SimpleImage>(new Map());

  const myLibrary = ref<myLibraryItem[]>([]);

  myLibrary.value.push(new myLibraryItem('37i9dQZF1DX186v583rmzp', "I Love My '90s Hip-Hop", 'Spotify', "https://i.scdn.co/image/ab67706f00000003696803fc4064f73c84a7dd76", 'playlist'));
  myLibrary.value.push(new myLibraryItem('3D6B2JCDW5k9yqJKKYh99J', "To home", 'Cami Salas Bravo', "https://i.scdn.co/image/ab67706c0000bebb181a26377bbe1224595fe33b", 'playlist'));
  myLibrary.value.push(new myLibraryItem('4hdwGGaXjpXLQSyMPSfD8H', "What I like", 'stixbunny', "https://mosaic.scdn.co/60/ab67616d0000b27309fd83d32aee93dceba78517ab67616d0000b273345536847e60f622ee0eae96ab67616d0000b273389fee741b183fc3df0fbf64ab67616d0000b2735901aaa980d3e714bf01171c", 'playlist'));
  myLibrary.value.push(new myLibraryItem('37i9dQZF1DZ06evO1tnejS', "This is Audioslave", 'Spotify', "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1tnejS-small.jpg", 'playlist'));
  myLibrary.value.push(new myLibraryItem('37i9dQZF1DZ06evO1Uv28p', "This is Pavement", 'Spotify', "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1Uv28p-small.jpg", 'playlist'));
  myLibrary.value.push(new myLibraryItem('37i9dQZF1DZ06evO25rXbO', "This is Gorillaz", 'Spotify', "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO25rXbO-small.jpg", 'playlist'));

  // (async function fillLocal() {
  //   console.log("Setting up local data 😄...");
  //   for (const artistId of myLibraryIds['artists']) {
  //     const result = await getSpotifyArtist(artistId);
  //     if (result) {
  //       const { playlist: pl,
  //         owner: ow,
  //         songs: so,
  //         artists: ar,
  //         albumArtists: aa,
  //         songArtists: sa,
  //         albums: al,
  //         images: im } = result;
  //       playlists.value = new Map([...playlists.value, ...pl]);
  //       owners.value.add(ow);
  //       songs.value = new Map([...songs.value, ...so]);
  //       artists.value = new Map([...artists.value, ...ar]);
  //       albums.value = new Map([...albums.value, ...al]);
  //       images.value = new Map([...images.value, ...im]);
  //       albumArtists.value = new Set<SimpleAlbumArtist>([...albumArtists.value, ...aa]);
  //       songArtists.value = new Set<SimpleSongArtist>([...songArtists.value, ...sa]);
  //       console.log("artists");
  //       console.log(artists.value);
  //       switchLike(artistId, 'playlist');
  //     }
  //   }
  //   for (const playlistId of myLibraryIds['playlists']) {
  //     const result = await getSpotifyPlaylist(playlistId);
  //     if (result) {
  //       const { playlist: pl,
  //         owner: ow,
  //         songs: so,
  //         artists: ar,
  //         albumArtists: aa,
  //         songArtists: sa,
  //         albums: al,
  //         images: im } = result;
  //       playlists.value = new Map([...playlists.value, ...pl]);
  //       owners.value.add(ow);
  //       songs.value = new Map([...songs.value, ...so]);
  //       artists.value = new Map([...artists.value, ...ar]);
  //       albums.value = new Map([...albums.value, ...al]);
  //       images.value = new Map([...images.value, ...im]);
  //       albumArtists.value = new Set<SimpleAlbumArtist>([...albumArtists.value, ...aa]);
  //       songArtists.value = new Set<SimpleSongArtist>([...songArtists.value, ...sa]);
  //       console.log("artists");
  //       console.log(artists.value);
  //       switchLike(playlistId, 'playlist');
  //     }
  //   };
  // })();

  // function addLikes() {
  //   for (const id of myLibraryIds['albums']) {
  //     switchLike(id, 'album');
  //   };
  //   for (const id of myLibraryIds['playlists']) {
  //     switchLike(id, 'playlist');
  //   };
  //   for (const id of myLibraryIds['artists']) {
  //     switchLike(id, 'artist');
  //   };
  //   // for(const id of myLibraryIds['podcasts']) {
  //   //   switchLike(id, 'podcast');
  //   // };
  // }

  function findOwner(id: string) {
    for (const item of owners.value) if (item.id === id) return item;
  }

  function findAlbumArtistName(id: string) {
    for (const item of albumArtists.value) {
      if (item.album_id === id) {
        return findArtistName(item.artist_id);
      }
    }
  }

  function findArtistName(id: string) {
    return artists.value.get(id)?.name;
  }

  function findSmallImage(id: string) {
    return images.value.get(id + 'small')?.url || findBigImage(id);
  }

  function findBigImage(id: string) {
    return images.value.get(id + 'big')?.url || 'noimage';
  }

  function findItem(id: string, type: 'playlist' | 'album' | 'artist' | 'song') {
    switch (type) {
      case 'playlist':
        return playlists.value.get(id);
      case 'album':
        return albums.value.get(id);
      case 'artist':
        return artists.value.get(id);
      case 'song':
        return songs.value.get(id);
    }
  }

  function switchLike(id: string, type: 'album' | 'playlist' | 'song' | 'artist') {
    let liked = false;
    switch (type) {
      case 'album': {
        const album = albums.value.get(id);
        if (album) {
          album.liked = !album.liked;
          liked = album.liked;
        };
        break;
      }
      case 'playlist': {
        const playlist = playlists.value.get(id);
        if (playlist) {
          playlist.liked = !playlist.liked;
          liked = playlist.liked;
        };
        break;
      }
      case 'song': {
        const song = songs.value.get(id);
        if (song) {
          song.liked = !song.liked;
          liked = song.liked;
        };
        break;
      }
      case 'artist': {
        const artist = artists.value.get(id);
        if (artist) {
          artist.liked = !artist.liked;
          liked = artist.liked;
        };
        break;
      }
      default:
        break;
    }
    if (liked) {
      const item = findItem(id, type);
      if (item) {
        myLibrary.value.push(item);
      }
    }
  }

  return { playlists, albums, artists, songs, owners, albumArtists, songArtists, myLibrary, findOwner, findAlbumArtistName, findSmallImage, findBigImage, findItem, switchLike };
});