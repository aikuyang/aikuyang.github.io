'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"aikuyang.github.io/.git/COMMIT_EDITMSG": "e29311f6f1bf1af907f9ef9f44b8328b",
"aikuyang.github.io/.git/config": "5f81537ad48f84e2bec717ea8e110fad",
"aikuyang.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"aikuyang.github.io/.git/FETCH_HEAD": "6fe5179ea3b7f06c49557f856ea0f8ac",
"aikuyang.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"aikuyang.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"aikuyang.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"aikuyang.github.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"aikuyang.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"aikuyang.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"aikuyang.github.io/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"aikuyang.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"aikuyang.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"aikuyang.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"aikuyang.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"aikuyang.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"aikuyang.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"aikuyang.github.io/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"aikuyang.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"aikuyang.github.io/.git/index": "70cdb09eb3263a111f1ea2508a54d1f5",
"aikuyang.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"aikuyang.github.io/.git/logs/HEAD": "e8a7b6bc14bd1afb8d8c67759afb3186",
"aikuyang.github.io/.git/logs/refs/heads/main": "e8a7b6bc14bd1afb8d8c67759afb3186",
"aikuyang.github.io/.git/logs/refs/remotes/origin/HEAD": "8eb72c9acff719c39a74e4bb941acbee",
"aikuyang.github.io/.git/logs/refs/remotes/origin/main": "942d9fc7579567cdfa1e6ddfc8c5d531",
"aikuyang.github.io/.git/objects/03/d94baa5984b60c60d2ba945c6f549694ed925c": "0d4abee21e78b1586428ff2b355a72b9",
"aikuyang.github.io/.git/objects/0c/98a20118d7c981590038521e117b123b31e06c": "90935ec0142ca4825cb3ab9af2d27b08",
"aikuyang.github.io/.git/objects/13/ed6816b1855d43e45a77fa42a95db8c36b514c": "2edfd17bbee88e5968a6b5d418e1ee22",
"aikuyang.github.io/.git/objects/15/2d098693150c70109f43e1bea6f62fac1cb07a": "8356c34728f518a1ef816ffb5c6a52b7",
"aikuyang.github.io/.git/objects/60/9eeb37e005b7a81bce4da9e2357b8f35ab4265": "eb669c38e0d54d45506664e6f9b336f2",
"aikuyang.github.io/.git/objects/64/d5c6bea016837b07bc5b7af678c5163f356f6a": "c5a4993a8183ad84f4c93550520bb31c",
"aikuyang.github.io/.git/objects/d2/0ca7c23d973a9a3506a3db8500f7ea42d6ef6a": "444c2c8a371a1174265d85ac4f1a4b1a",
"aikuyang.github.io/.git/objects/db/d4594551e1831f0111ed9a1b9b37d7ddd9eb50": "81c96a900895765155e08bf6e8228f7c",
"aikuyang.github.io/.git/objects/pack/pack-21661381c2d305d86ca7ea5b2f45eaf0a2b72125.idx": "b121b955b8e2c191d29a30e0f5913fe5",
"aikuyang.github.io/.git/objects/pack/pack-21661381c2d305d86ca7ea5b2f45eaf0a2b72125.pack": "b4faff0e5595d9efc69220212594ac66",
"aikuyang.github.io/.git/objects/pack/pack-21661381c2d305d86ca7ea5b2f45eaf0a2b72125.rev": "e6f2618149f29dd9c5cd700ce58f1bde",
"aikuyang.github.io/.git/packed-refs": "89b910089e8b52256e914de8833c2123",
"aikuyang.github.io/.git/refs/heads/main": "c3ce836fc694a07d46831011f27d2b4d",
"aikuyang.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"aikuyang.github.io/.git/refs/remotes/origin/main": "c3ce836fc694a07d46831011f27d2b4d",
"aikuyang.github.io/assets/AssetManifest.bin": "bc34121c710af339217eb3d6c9b93280",
"aikuyang.github.io/assets/AssetManifest.bin.json": "4bfa144aec0cb148252522d93bad3eb6",
"aikuyang.github.io/assets/AssetManifest.json": "ef21466cf60dccaae1a1bbceb9c3494e",
"aikuyang.github.io/assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"aikuyang.github.io/assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"aikuyang.github.io/assets/NOTICES": "1c973877429f7878a138a25933c4e1ac",
"aikuyang.github.io/assets/packages/simple_barcode_scanner/assets/barcode.html": "7a1c45aca573208e15c71b378fdbe027",
"aikuyang.github.io/assets/packages/simple_barcode_scanner/assets/html5-qrcode.min.js": "d88d3200cb547c9e86ee972975561dcd",
"aikuyang.github.io/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"aikuyang.github.io/canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"aikuyang.github.io/canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"aikuyang.github.io/canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"aikuyang.github.io/canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"aikuyang.github.io/canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"aikuyang.github.io/canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"aikuyang.github.io/canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"aikuyang.github.io/canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"aikuyang.github.io/canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"aikuyang.github.io/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"aikuyang.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"aikuyang.github.io/flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"aikuyang.github.io/flutter_bootstrap.js": "698d6c9f7f2948ef7361078737f58fe6",
"aikuyang.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"aikuyang.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"aikuyang.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"aikuyang.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"aikuyang.github.io/index.html": "3215ed6132efd0639530459608860045",
"aikuyang.github.io/main.dart.js": "5047a08d20c7e793a3fc2ee2257f5ff4",
"aikuyang.github.io/manifest.json": "dd08298dde26728dfe785733e820586c",
"aikuyang.github.io/version.json": "39c3b03b6b5e246dd911d1295c36de38",
"assets/AssetManifest.bin": "bc34121c710af339217eb3d6c9b93280",
"assets/AssetManifest.bin.json": "4bfa144aec0cb148252522d93bad3eb6",
"assets/AssetManifest.json": "ef21466cf60dccaae1a1bbceb9c3494e",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "1c973877429f7878a138a25933c4e1ac",
"assets/packages/simple_barcode_scanner/assets/barcode.html": "7a1c45aca573208e15c71b378fdbe027",
"assets/packages/simple_barcode_scanner/assets/html5-qrcode.min.js": "d88d3200cb547c9e86ee972975561dcd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "0797288b17d5ad5f742d7ffccf63da1a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3215ed6132efd0639530459608860045",
"/": "3215ed6132efd0639530459608860045",
"main.dart.js": "6933de3a810547d8f6a71384a79346c3",
"manifest.json": "dd08298dde26728dfe785733e820586c",
"version.json": "39c3b03b6b5e246dd911d1295c36de38"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
