importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
);

if (workbox) {
  workbox.precaching.precacheAndRoute([]);

  workbox.routing.registerNavigationRoute(
    workbox.precaching.getCacheKeyForURL('/index.html'),
    {
      blacklist: [/^\/_/, /\/[^\/?]+\.[^\/]+$/],
    }
  );

  // Font caching
  workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:.googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
      cacheName: 'googleapis',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 30,
        }),
      ],
    })
  );

  // Image caching
  workbox.routing.registerRoute(
    new RegExp('https://.*(?:png|gif|jpg|jpeg|svg).*'),
    workbox.strategies.cacheFirst({
      cacheName: 'images',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
      ],
    })
  );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
