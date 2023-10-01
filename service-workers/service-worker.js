const CACHE_NAME = "cache-test-v1";
const CACHE_URLS = ["https://api.publicapis.org/random"];

// CACHE STRATEGIES:
// 1. Cache only
// 2. Network only
// 3. Cache falling back to network
// 4. Network falling back to cache

self.addEventListener("install", (event) => {
  console.log("Service worker install");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CACHE_URLS))
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activate");
  // In activate event, for example, you can clear the cache.
});

self.addEventListener("fetch", (event) => {
  console.log("Service worker fetch");
  // 3. Cache falling back to network
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
