self.addEventListener("install", (event) => {
  console.log("Service worker install");
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activate");
});

self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
