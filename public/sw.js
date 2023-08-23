const STATIC_CACHE = "static-v1";
const STATIC_FILES = [
	'/images/portfolio1.webp',
	'/images/portfolio2.webp',
	'/images/portfolio3.webp',
	'/images/a1.webp',
	'/images/b1.webp',
	'/images/k1.webp',
	'/images/l1.webp',
	'/images/m1.webp',
	'/images/n1.webp',
	'/images/o1.webp',
	'/images/p1.webp',
	'/images/s1.webp',
	'/images/sl1.webp',
];

self.addEventListener("install", (event) => {
	console.log("%c[sw.js] Service Worker installed", "color: #FEC233");
	event.waitUntil(
		caches.open(STATIC_CACHE).then((cache) => {
			cache.addAll(STATIC_FILES).then(() => {
				console.log("%c[sw.js] Files added to static cache", "color: #FEC233");
				self.skipWaiting();
			});
		})
	);
});

self.addEventListener("activate", (event) => {
	console.log("%c[sw.js] Service Worker activated", "color: #FEC233");
	// ensure that the Service Worker is activated correctly (fail-safe)
	return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		// look at all caches for a match on the key (= request)
		caches.match(event.request).then((response) => {
			if (response) {
				// return from cache
				return response;
			} else {
				// fetch from the server
				return fetch(event.request);
			}
		})
	);
});
