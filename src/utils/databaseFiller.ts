import { getSpotifyArtist, getSpotifyAlbums, getSpotifyTracks } from "./spotifygetter";
import { getArtist, getArtists, getArtistsAlbums, setArtist, setArtists, getAlbum, getAlbums, setAlbum, setAlbums, setAlbumArtists, setSong, setSongs, setSongsArtists } from "./supabase";

const artistsIds = [
  // '2pAWfrd7WFF3XhVt9GooDL', //MF DOOM
  // '3YcBF2ttyueytpXtEzn1Za', //Incubus
  // '40Yq4vzPs9VNUrIBG5Jr2i', //Smashing Pumpkins
  // '3kVUvbeRdcrqQ3oHk5hPdx', //Grouplove
  // '7oPftvlwr6VrsViSDV7fJY', //Green Day
  // '3jOstUTkEu2JkjvRdBA5Gu', //Weezer
  // '4tZwfgrHOc3mvqYlEYSvVi', //Daft Punk
  // '67ea9eGLXYMsO2eYQRui3w', //The Who
  '34EP7KEpOjXcM2TCat1ISk', //Wu-Tang Clan
]

async function insertArtists(artists: string[]) {
  console.log("Running insertArtists...");
  for (const id of artists) {
    const artist = await getSpotifyArtist(id);
    if (artist) {
      console.log(artist);
      await setArtist(artist);
    }
  }
  console.log("insertArtists finished!");
}

async function insertAlbums(artistsIds: string[]) {
  console.log("Running insertAlbums...");
  for (const id of artistsIds) {
    console.log(`Getting ${id} albums...`)
    const response = await getSpotifyAlbums(id);
    if (response) {
      const { albums, artists } = response;
      const newArtists: Set<string> = new Set();
      for (let i = 0; i < albums.length; i++) {
        for (const artist of artists[i]) {
          if (await getArtist(artist) == null) {
            newArtists.add(artist);
          }
        }
      }
      if (newArtists.size > 0) {
        console.log('New artists found:');
        console.log(newArtists);
        await insertArtists(Array.from(newArtists));
      }
      await setAlbums(albums);
      await setAlbumArtists(albums, artists);
    }
  }
  console.log("insertAlbums finished!");
}

async function insertSongs(albumIds: string[]) {
  console.log('Running insertSongs...');
  const albums = await getArtistsAlbums(albumIds);
  for (const album of albums) {
    console.log(`Getting tracks for ${album}...`);
    const response = await getSpotifyTracks(album);
    if (response) {
      const { tracks, artists } = response;
      console.log(`Setting tracks for ${album}...`);
      await setSongs(tracks);
      await setSongsArtists(tracks, artists)
    }
  }
  console.log('InsertSongs finished!');
}

export async function fill() {
  // await insertArtists(artistsIds);
  // await insertAlbums(artistsIds);
  // await insertSongs(artistsIds);
}