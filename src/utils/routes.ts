export function getRoute(id: string, type: 'playlist' | 'album' | 'artist' | 'song') {
  switch (type) {
    case 'playlist':
      return {
        name: 'playlist',
        params: {
          id: id,
        },
      };
    case 'album':
      return {
        name: 'album',
        params: {
          id: id,
        },
      };
    case 'artist':
      return {
        name: 'artist',
        params: {
          id: id,
        },
      };
    case 'song':
      return {
        name: 'song',
        params: {
          id: id,
        },
      };
  }
}