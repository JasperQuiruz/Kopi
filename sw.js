const CACHE_NAME = 'coin-calc-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'HD-wallpaper-lucky-clover-beautiful-green-life-love-luck-nature.jpg'
];

// Install Service Worker and Cache Assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Cache and Network Strategy
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
