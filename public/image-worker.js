self.addEventListener('fetch', function(event) {
  if (event.request.url.includes('.png'))
    event.respondWith(
      caches.open('images').then(function(cache) {
        return fetch(event.request)
          .then(response => {
            cache.put(event.request, response.clone());
            return response;
          })
          .catch(function() {
            return caches.match(event.request);
          });
      })
    );
});
