# smockify

Hi! This was my attempt at making a functional Spotify UI copy. Its motivation being learning more about frontend web development as a whole and deepen my Vue and CSS knowledge. I also managed to learn more about Typescript and consuming APIs although the final product doesn't use them yet.

## How it went

I had plenty of problems trying to achieve this. My starting goal was far too ambitious. I decided I was going to use supabase as a means to permanently save Spotify data to not make a request twice. I soon learned the time to do this was way too long for the user experience, so I had to ditch the plans for an external database.

I then tried keeping up the same database of requested data locally, but it too proved to be a bad idea. Timing was still not at its best and the memory used by the app was also very high.

I finally, after a couple of weeks , had to resort to using a static database for items first loading into the website; that is, the personal library in the navbar and the items in the homepage. My plans for the future include implementing each artist/album/playlist/etc dynamic page, built with each Spotify API query.

As for the front end, I strived to be as close as possible to the real thing. However I still had a difficult time with a couple of things such a dragging elements like the navbar and the volume and play bar. They do work as of now, but I could implement more improvements in the near future.

## What works

- Right now each button interacts like the original version, although most don't work. Only the library button expands and compresses the navbar and the home and search both redirect to their respective pages.
- There is no filtering in the side library, but there is a scrollbar for the items, al well as in the homepage. Both look and function just like the original.
- The homepage reacts with the short list of items at the start, changing color depending on the main color of the picture.
- Each list of items adjusts dynamically depending on how many it can fit comfortably on the screen.

## What doesn't

- LIke I said before, each detailed view for artist, album, playlist, song and podcast isn't implemented yet, so there's a placeholder page for each.
- There's no filtering for the navbar library.
- You can't drag neither the volume nor the play bar. Although both can be clicked and it's element react accordingly.
- There's no playing of the song, as in advancing it's time nor there's a local playlist to cycle through the items.

## Final words

It was fun! And I sure did learn a lot. I wasted too much time scaling down the project and there's a lot of code that got dumped or is unused as a result.

I'd love to como back to this to at least implement each detail view.

Thanks for checking it out!
