//キャッシュ名
var CACHE_NAME  = "約数-PWA";

//キャッシュするファイル名
var urlsToCache = [
	'index.html',
	'manifest.json',
	'service-worker.js',
];

//インストール時処理
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
        .open(CACHE_NAME)
        .then(function(cache){
            return cache.addAll(urlsToCache);
        })
    );
});

// フェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                if(response){
                    return response;
                }
                return fetch(event.request);
            })
    );
});
