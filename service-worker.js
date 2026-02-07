const CACHE_NAME = "valentine-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./heart-bg.jpg",
  "./window.png",
  "./envelope.png",
  "./yes.png",
  "./no.png",
  "./cat_heart.gif",
  "./cat_dance.gif"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
