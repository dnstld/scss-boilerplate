var CACHENAME = 'cache-v10';
var urlsToCache = [
  '/',
  '/dev/css/main.css',
  '/dev/js/main.js'
]

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHENAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
      .then(function() {
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys()
      .then(function(cacheNames) {
        return Promise.all(cacheNames.map(function(key) {
          if (key !== CACHENAME) return caches.delete(key)
        }))
      })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  var url = new URL(event.request.url);

  if (url.origin == location.origin && url.pathname == '/') {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          return response || fetch(event.request)
        })
    );
  }
});