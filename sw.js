/**
 * Created by favianioel on 04.04.2017.
 */
'use strict';
self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open("jsmonthlyfip").then(function(cache) {
            cache.addAll([
                "/in.html",
                "/a.css"
            ])
        })
    )
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.open("jsmonthlyfip").then(function (cache) {
            return cache.match(event.request);
        })     
    )
});
