/**
 * Created by favianioel on 04.04.2017.
 */
'use strict';
self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open("jsmonthly").then(function(cache) {
            cache.addAll([
                "/index.html",
                "/app.css"
            ])
        })
    )
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.open("jsmonthly").then(function (cache) {
            return cache.match(event.request);
        })     
    )
