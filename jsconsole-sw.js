// same SW as in Gunn Bell version PWA_Test1, have to manually kill cache.

const cachePrefix = "MG27713_JSCONSOLE";
const version = 1;

addEventListener("fetch", function(event) {
	event.respondWith(
		caches
			.match(event.request)
			.then(function(res) {
				return res
					|| fetch(event.request)
						.then(function(response) {
							return caches
								.open(cachePrefix + version)
								.then(function(cache) {
									cache.put(event.request, response.clone());
									return response;
								});
						});
			})
	);
});
