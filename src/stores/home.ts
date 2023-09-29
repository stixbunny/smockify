import { defineStore } from 'pinia';
import { myLibraryItem } from '@/types';

export const useHomeStore = defineStore('home', () => {
  const welcomeItems: myLibraryItem[] = [];
  welcomeItems.push(
    new myLibraryItem(
      '37i9dQZF1DX186v583rmzp',
      "I Love My '90s Hip-Hop",
      'Spotify',
      'https://i.scdn.co/image/ab67706f00000003696803fc4064f73c84a7dd76',
      'playlist'
    )
  );
  welcomeItems.push(
    new myLibraryItem(
      '4hdwGGaXjpXLQSyMPSfD8H',
      'What I like',
      'stixbunny',
      'https://mosaic.scdn.co/60/ab67616d0000b27309fd83d32aee93dceba78517ab67616d0000b273345536847e60f622ee0eae96ab67616d0000b273389fee741b183fc3df0fbf64ab67616d0000b2735901aaa980d3e714bf01171c',
      'playlist'
    )
  );
  welcomeItems.push(
    new myLibraryItem(
      '2pAWfrd7WFF3XhVt9GooDL',
      'MF DOOM',
      '',
      'https://i.scdn.co/image/ab6761610000f1781ca139a174e216880498dc16',
      'artist'
    )
  );
  welcomeItems.push(
    new myLibraryItem(
      '7oPftvlwr6VrsViSDV7fJY',
      'Green Day',
      '',
      'https://i.scdn.co/image/ab6761610000f178047eac333eff0be4abe32cbf',
      'artist'
    )
  );
  welcomeItems.push(
    new myLibraryItem(
      '3AA28KZvwAUcZuOKwyblJQ',
      'Gorillaz',
      '',
      'https://i.scdn.co/image/ab6761610000f178337d671a32b2f44d4a4e6cf2',
      'artist'
    )
  );
  welcomeItems.push(
    new myLibraryItem(
      '65sHj9PvsbyD0uugGHjueN',
      'Weezer (Teal Album)',
      'Weezer',
      'https://i.scdn.co/image/ab67616d0000485123473d8f0c8669583307532e',
      'album'
    )
  );

  return { welcomeItems };
});
