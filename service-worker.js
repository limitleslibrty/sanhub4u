const cacheName = 'sanhub-movie-cache-v1';
const assets = [
  '/',
  '/index.html',
  '/movie.html',
  '/style.css',
  '/main.js',
  '/logo192.png',
  '/logo512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});