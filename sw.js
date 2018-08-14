const version = 'v0.16';
const STATIC_CACHE_NAME = `${version}staticfiles`;

const assets = ['https://use.typekit.net/qmq0znp.css'];

async function getPreCachedItems(cacheName) {
  let url = `${self.location.protocol}//${
    self.location.host
  }/parcel-manifest.json`;
  let staticCache = await caches.open(cacheName);
  let assets = await fetch(url).then(r => r.json());

  let assetList = Object.entries(assets).reduce((accum, [_, value]) => {
    accum.push(value);

    return accum;
  }, []);
  console.log(assetList);
  return staticCache.addAll(assetList);
}

async function removeOldCaches() {
  let cacheNames = await caches.keys();

  let staleCachePromises = cacheNames.map(
    cacheName =>
      cacheName !== STATIC_CACHE_NAME
        ? caches.delete(cacheName)
        : Promise.resolve()
  );
  return await Promise.all(staleCachePromises);
}

self.addEventListener('install', installEvent => {
  console.log('sw is installing...');
  skipWaiting();
  installEvent.waitUntil(getPreCachedItems(STATIC_CACHE_NAME));
});

self.addEventListener('activate', activateEvent => {
  console.log('sw is activated');
  activateEvent.waitUntil(removeOldCaches().then(() => clients.claim()));
});

self.addEventListener('fetch', event => {
  const request = event.request;
  event.respondWith(
    caches
      .match(request)
      .then(responseFromCache => {
        console.log(responseFromCache, 'cache');
        if (responseFromCache) return responseFromCache;

        return fetch(request);
      })
      .catch(reason => {
        return caches.match('/offline.html');
      })
  );
});
