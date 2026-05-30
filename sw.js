
const CACHE_NAME = 'dharmesh-portfolio-cache-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/css/base.css',
  '/css/themes.css',
  '/css/components.css',
  '/css/layouts.css',
  '/js/app.js',
  '/manifest.json',
  '/Dharmesh_flutter.pdf'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});