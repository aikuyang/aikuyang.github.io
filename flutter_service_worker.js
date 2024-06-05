'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"aikuyang.github.io/.git/COMMIT_EDITMSG": "f8b1290a18936718b6bee78397665768",
"aikuyang.github.io/.git/config": "09e8feae197a9eb3893b2639f7bccf91",
"aikuyang.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"aikuyang.github.io/.git/FETCH_HEAD": "5a7a68f9d344b9cd877cd4e4efaf6066",
"aikuyang.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"aikuyang.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"aikuyang.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"aikuyang.github.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"aikuyang.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"aikuyang.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"aikuyang.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"aikuyang.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"aikuyang.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"aikuyang.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"aikuyang.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"aikuyang.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"aikuyang.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"aikuyang.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"aikuyang.github.io/.git/index": "93c495b3a7dfcb91f7e5a5b1e496fb24",
"aikuyang.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"aikuyang.github.io/.git/logs/HEAD": "d65dd4d9e9a986297471b6739f49bf33",
"aikuyang.github.io/.git/logs/refs/heads/main": "d65dd4d9e9a986297471b6739f49bf33",
"aikuyang.github.io/.git/logs/refs/remotes/origin/HEAD": "bfe99a6624977ce2af2638031fcb4615",
"aikuyang.github.io/.git/logs/refs/remotes/origin/main": "1b49d6f6fa0213dca720748d6154c9e0",
"aikuyang.github.io/.git/objects/02/02a94dda95eb9cc623841bb9e9ac8a4e65d53a": "866158668140766711c533e088ab26e1",
"aikuyang.github.io/.git/objects/03/d94baa5984b60c60d2ba945c6f549694ed925c": "0d4abee21e78b1586428ff2b355a72b9",
"aikuyang.github.io/.git/objects/07/2d7c098201e41d19249b8c9366c38be5d3a43e": "8ffff375df5a870ef76e66301c8d9830",
"aikuyang.github.io/.git/objects/09/852cdb52865360578de144f4dfd4333b95ac51": "183b1dcd19fbf56a212a52941027f311",
"aikuyang.github.io/.git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
"aikuyang.github.io/.git/objects/18/db263dbdc958f63f14c4904cb7e2124c766ecc": "f8de7758db8b931ae09f803f670ed09a",
"aikuyang.github.io/.git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
"aikuyang.github.io/.git/objects/1d/a79b48d854bb1e31533f70d7d077aa47162d57": "b027ae38df13e51f1b455561bde5afdf",
"aikuyang.github.io/.git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
"aikuyang.github.io/.git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
"aikuyang.github.io/.git/objects/31/4447e385219f26e10dc94209033e39d5b7d18d": "8494d5bd62c61fa6843e345aab2412c4",
"aikuyang.github.io/.git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
"aikuyang.github.io/.git/objects/43/a1367c0d00e9ff20fca3243e719aeb27a93bcb": "74c5ec7eda6fb58e4b201a911f8c5b7f",
"aikuyang.github.io/.git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
"aikuyang.github.io/.git/objects/50/3625a75b373dc9fb10ca0921becf9bffa62327": "ebee92e0580ce8ade9317785b9855e0f",
"aikuyang.github.io/.git/objects/55/7e27b285fb08a645e08e44c30b26d78db85a94": "bdc0c37ce868dc06138080ed3f5c31ff",
"aikuyang.github.io/.git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
"aikuyang.github.io/.git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
"aikuyang.github.io/.git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
"aikuyang.github.io/.git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
"aikuyang.github.io/.git/objects/77/44d76d20b768bdb7ccbb6ffcff5695b72b7622": "a6b187a4012dc21dbe27ba368304233a",
"aikuyang.github.io/.git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
"aikuyang.github.io/.git/objects/7e/76eec6cae02140ea11a8be386a2ddc36c1504a": "5cf70ed2f4420168c44a90d1fa0d128b",
"aikuyang.github.io/.git/objects/80/58beabf81b2b1bdf125c85f2da1cd95475a7de": "5dc53bed45ac01a9e05984acf94c63ef",
"aikuyang.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"aikuyang.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"aikuyang.github.io/.git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
"aikuyang.github.io/.git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
"aikuyang.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"aikuyang.github.io/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"aikuyang.github.io/.git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
"aikuyang.github.io/.git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
"aikuyang.github.io/.git/objects/cb/c543c84e7fec4c132c63430e974a1fc21fef22": "9da5ffdcd61b340f5d8f68dc10d1ee73",
"aikuyang.github.io/.git/objects/cc/747e610c5934c12670983020990c70abaf381a": "9d9eb6ed0a8b608c3d290004d08df0b4",
"aikuyang.github.io/.git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
"aikuyang.github.io/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
"aikuyang.github.io/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"aikuyang.github.io/.git/objects/e0/d75001ca326876508d4417351d1b4091df48f2": "6c648a642836c15573f3f4704e9eec4c",
"aikuyang.github.io/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"aikuyang.github.io/.git/objects/ec/d24380aba1e0db183441e6b3dd36b170beae92": "9f16a4e3d07a110a4169688dfca5e595",
"aikuyang.github.io/.git/objects/ed/3d304e72edce20eeeea459d82e8fb81004df08": "e474478ea2a47642c89052167ae53160",
"aikuyang.github.io/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
"aikuyang.github.io/.git/objects/fd/3aaa39f0d9398035bd448b456416ba8287ebe2": "62fad1076559717350b24dda0ea5de90",
"aikuyang.github.io/.git/refs/heads/main": "1bfbf46a1d87546e562261e603c13659",
"aikuyang.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"aikuyang.github.io/.git/refs/remotes/origin/main": "1bfbf46a1d87546e562261e603c13659",
"aikuyang.github.io/assets/AssetManifest.bin": "bc34121c710af339217eb3d6c9b93280",
"aikuyang.github.io/assets/AssetManifest.bin.json": "4bfa144aec0cb148252522d93bad3eb6",
"aikuyang.github.io/assets/AssetManifest.json": "ef21466cf60dccaae1a1bbceb9c3494e",
"aikuyang.github.io/assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"aikuyang.github.io/assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"aikuyang.github.io/assets/NOTICES": "03e2c09aadddfadbcdab81b84c4f7069",
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
"aikuyang.github.io/flutter_bootstrap.js": "b6c9a7021e35942e03b7baed15c1fbf6",
"aikuyang.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"aikuyang.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"aikuyang.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"aikuyang.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"aikuyang.github.io/index.html": "3215ed6132efd0639530459608860045",
"aikuyang.github.io/main.dart.js": "e149127c4e5b08b25898759e20d870de",
"aikuyang.github.io/manifest.json": "dd08298dde26728dfe785733e820586c",
"aikuyang.github.io/version.json": "39c3b03b6b5e246dd911d1295c36de38",
"assets/AssetManifest.bin": "bc34121c710af339217eb3d6c9b93280",
"assets/AssetManifest.bin.json": "4bfa144aec0cb148252522d93bad3eb6",
"assets/AssetManifest.json": "ef21466cf60dccaae1a1bbceb9c3494e",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "4d0b6f395cfef9c7d1cb0279415c9465",
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
"flutter_bootstrap.js": "17c6a4597f2127be6e2a5ae0a73b01ba",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3215ed6132efd0639530459608860045",
"/": "3215ed6132efd0639530459608860045",
"main.dart.js": "b2d1ade6c0e33c1a950f7bd2d6460152",
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
