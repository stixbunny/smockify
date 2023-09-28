import { createRouter, createWebHistory } from 'vue-router';
const HomeView = () => import('@/views/HomeView.vue');
const ArtistView = () => import('@/views/ArtistView.vue');
const AlbumView = () => import('@/views/AlbumView.vue');
const SongView = () => import('@/views/SongView.vue');
const PlaylistView = () => import('@/views/PlaylistView.vue');
const NotFound = () => import('@/views/NotFoundView.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'index',
    },
    {
      path: '/home',
      component: HomeView,
      name: 'home',
    },
    {
      path: '/artist/:id',
      component: ArtistView,
      props: true,
      name: 'artist',
    },
    {
      path: '/album/:id',
      component: AlbumView,
      props: true,
      name: 'album',
    },
    {
      path: '/song/:id',
      component: SongView,
      props: true,
      name: 'song',
    },
    {
      path: '/playlist/:id',
      component: PlaylistView,
      props: true,
      name: 'playlist',
    },
    {
      name: 'not-found',
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});

export default router;
