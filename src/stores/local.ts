import { defineStore } from 'pinia';
import { ref } from 'vue';
import { myLibraryItem } from '@/types';

const myLibraryIds = {
  playlists: [
    '37i9dQZF1DX186v583rmzp',
    '3D6B2JCDW5k9yqJKKYh99J',
    '4hdwGGaXjpXLQSyMPSfD8H',
    '37i9dQZF1DZ06evO1tnejS',
    '37i9dQZF1DZ06evO1Uv28p',
    '37i9dQZF1DZ06evO25rXbO',
  ],
  artists: [
    '2pAWfrd7WFF3XhVt9GooDL',
    '3YcBF2ttyueytpXtEzn1Za',
    '40Yq4vzPs9VNUrIBG5Jr2i',
    '3kVUvbeRdcrqQ3oHk5hPdx',
    '7oPftvlwr6VrsViSDV7fJY',
    '3jOstUTkEu2JkjvRdBA5Gu',
    '4tZwfgrHOc3mvqYlEYSvVi',
    '3AA28KZvwAUcZuOKwyblJQ',
    '3inCNiUr4R6XQ3W43s9Aqi',
    '34EP7KEpOjXcM2TCat1ISk',
    '6ilYV5oF8whllOnm4VZlYR',
  ],
  albums: [
    '2VBcztE58pBKjIDS5oEgFh',
    '6pjuzPdAkJPdNBiKzcloXL',
    '65sHj9PvsbyD0uugGHjueN',
    '4ZVYZI1wY4TmLOQ3as1UNI',
    '5qt11cWjSs5Gbqj2Wyfu38',
  ],
  podcasts: ['308BQUUnIkoH2UAXJCAt0g'],
};

export const useLocalStore = defineStore('local', () => {
  const myLibrary = ref<myLibraryItem[]>([]);

  myLibrary.value.push(
    new myLibraryItem(
      '37i9dQZF1DX186v583rmzp',
      "I Love My '90s Hip-Hop",
      'Spotify',
      'https://i.scdn.co/image/ab67706f00000003696803fc4064f73c84a7dd76',
      'playlist'
    )
  );
  myLibrary.value.push(
    new myLibraryItem(
      '3D6B2JCDW5k9yqJKKYh99J',
      'To home',
      'Cami Salas Bravo',
      'https://i.scdn.co/image/ab67706c0000bebb181a26377bbe1224595fe33b',
      'playlist'
    )
  );
  myLibrary.value.push(
    new myLibraryItem(
      '4hdwGGaXjpXLQSyMPSfD8H',
      'What I like',
      'stixbunny',
      'https://mosaic.scdn.co/60/ab67616d0000b27309fd83d32aee93dceba78517ab67616d0000b273345536847e60f622ee0eae96ab67616d0000b273389fee741b183fc3df0fbf64ab67616d0000b2735901aaa980d3e714bf01171c',
      'playlist'
    )
  );
  myLibrary.value.push(
    new myLibraryItem(
      '37i9dQZF1DZ06evO1tnejS',
      'This is Audioslave',
      'Spotify',
      'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1tnejS-small.jpg',
      'playlist'
    )
  );
  myLibrary.value.push(
    new myLibraryItem(
      '37i9dQZF1DZ06evO1Uv28p',
      'This is Pavement',
      'Spotify',
      'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1Uv28p-small.jpg',
      'playlist'
    )
  );
  myLibrary.value.push(
    new myLibraryItem(
      '37i9dQZF1DZ06evO25rXbO',
      'This is Gorillaz',
      'Spotify',
      'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO25rXbO-small.jpg',
      'playlist'
    )
  );
  myLibrary.value.push(
    new myLibraryItem(
      '2pAWfrd7WFF3XhVt9GooDL',
      'MF DOOM',
      '',
      'https://i.scdn.co/image/ab6761610000f1781ca139a174e216880498dc16',
      'artist'
    )
  );
  myLibrary.value.push(
    new myLibraryItem(
      '3YcBF2ttyueytpXtEzn1Za',
      'Incubus',
      '',
      'https://i.scdn.co/image/ab6761610000f178baebf3a81961bdf7173ab959',
      'artist'
    )
  );
  myLibrary.value.push(
    new myLibraryItem(
      '40Yq4vzPs9VNUrIBG5Jr2i',
      'The Smashing Pumpkins',
      '',
      'https://i.scdn.co/image/ab6761610000f1781a7d0845c3b7e2f130264957',
      'artist'
    )
  );
  myLibrary.value.push(
    new myLibraryItem(
      '3kVUvbeRdcrqQ3oHk5hPdx',
      'GROUPLOVE',
      '',
      'https://i.scdn.co/image/ab6761610000f178212e97916d72380d77a9db17',
      'artist'
    )
  );
  myLibrary.value.push(
    new myLibraryItem(
      '7oPftvlwr6VrsViSDV7fJY',
      'Green Day',
      '',
      'https://i.scdn.co/image/ab6761610000f178047eac333eff0be4abe32cbf',
      'artist'
    )
  );
  myLibrary.value.push(
    new myLibraryItem(
      '3jOstUTkEu2JkjvRdBA5Gu',
      'Weezer',
      '',
      'https://i.scdn.co/image/ab6761610000f178878154b813440af37fb3d64d',
      'artist'
    )
  );
  myLibrary.value.push(
    new myLibraryItem(
      '4tZwfgrHOc3mvqYlEYSvVi',
      'Daft Punk',
      '',
      'https://i.scdn.co/image/ab6761610000f178a7bfd7835b5c1eee0c95fa6e',
      'artist'
    )
  );
  myLibrary.value.push(
    new myLibraryItem(
      '3AA28KZvwAUcZuOKwyblJQ',
      'Gorillaz',
      '',
      'https://i.scdn.co/image/ab6761610000f178337d671a32b2f44d4a4e6cf2',
      'artist'
    )
  );
  myLibrary.value.push(
    new myLibraryItem(
      '3inCNiUr4R6XQ3W43s9Aqi',
      'Pavement',
      '',
      'https://i.scdn.co/image/2772384cbf7185632bd7f64bd81bbfcc0a52d2e1',
      'artist'
    )
  );
  myLibrary.value.push(
    new myLibraryItem(
      '34EP7KEpOjXcM2TCat1ISk',
      'Wu-Tang Clan',
      '',
      'https://i.scdn.co/image/ab6761610000f178e60866298962b71792b2bf1a',
      'artist'
    )
  );
  myLibrary.value.push(
    new myLibraryItem(
      '6ilYV5oF8whllOnm4VZlYR',
      'the pillows',
      '',
      'https://i.scdn.co/image/ab6761610000f1784d9a10fc0d12679d391b2520',
      'artist'
    )
  );
  myLibrary.value.push(
    new myLibraryItem(
      '2VBcztE58pBKjIDS5oEgFh',
      'Acid Rap',
      'Chance The Rapper',
      'https://i.scdn.co/image/ab67616d00004851d95ab48a8a9de3c4a2cbfe80',
      'album'
    )
  );
  myLibrary.value.push(
    new myLibraryItem(
      '6pjuzPdAkJPdNBiKzcloXL',
      'No Fun Mondays',
      'Billie Joe Armstrong',
      'https://i.scdn.co/image/ab67616d00004851f625b5ead463ba98f532aad8',
      'album'
    )
  );
  myLibrary.value.push(
    new myLibraryItem(
      '65sHj9PvsbyD0uugGHjueN',
      'Weezer (Teal Album)',
      'Weezer',
      'https://i.scdn.co/image/ab67616d0000485123473d8f0c8669583307532e',
      'album'
    )
  );
  myLibrary.value.push(
    new myLibraryItem(
      '4ZVYZI1wY4TmLOQ3as1UNI',
      'Queens of the Stone Age',
      'Queens of the Stone Age',
      'https://i.scdn.co/image/ab67616d000048512021e21bc55e928b744a0113',
      'album'
    )
  );
  myLibrary.value.push(
    new myLibraryItem(
      '5qt11cWjSs5Gbqj2Wyfu38',
      'Enema Of The State',
      'blink-182',
      'https://i.scdn.co/image/ab67616d00004851645606c85724da85f15f6dee',
      'album'
    )
  );

  // Shuffling myLibrary
  for (let i = myLibrary.value.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [myLibrary.value[i], myLibrary.value[j]] = [myLibrary.value[j], myLibrary.value[i]];
  }

  function switchLike(id: string, type: 'album' | 'playlist' | 'song' | 'artist') {
    // let liked = false;
    // switch (type) {
    //   case 'album': {
    //     const album = albums.value.get(id);
    //     if (album) {
    //       album.liked = !album.liked;
    //       liked = album.liked;
    //     };
    //     break;
    //   }
    //   case 'playlist': {
    //     const playlist = playlists.value.get(id);
    //     if (playlist) {
    //       playlist.liked = !playlist.liked;
    //       liked = playlist.liked;
    //     };
    //     break;
    //   }
    //   case 'song': {
    //     const song = songs.value.get(id);
    //     if (song) {
    //       song.liked = !song.liked;
    //       liked = song.liked;
    //     };
    //     break;
    //   }
    //   case 'artist': {
    //     const artist = artists.value.get(id);
    //     if (artist) {
    //       artist.liked = !artist.liked;
    //       liked = artist.liked;
    //     };
    //     break;
    //   }
    //   default:
    //     break;
    // }
    // if (liked) {
    //   const item = findItem(id, type);
    //   if (item) {
    //     myLibrary.value.push(item);
    //   }
    // }
  }

  return { myLibrary, switchLike };
});
