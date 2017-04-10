'use strict';
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw-offline/index.html'
      ]);
    })
  );
});
