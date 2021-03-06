var staticHScope = "HScope-v1";
var assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/app.js",
  "/js/data.json",
  "/js/firebase.js",
  "/js/predictions.js",
  "/js/tarot.js",
  "/js/tarot-deck.json",
];

self.addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open(staticHScope).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request);
      })
    );
  });