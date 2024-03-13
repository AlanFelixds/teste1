'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f6a5fba321d8e137db98628c69b2dd56",
"assets/AssetManifest.bin.json": "4f4172d764d8099e768c6418359b959d",
"assets/AssetManifest.json": "73c6a9a908aee29e69d57a8f762c9d13",
"assets/assets/fonts/inter/Inter-Black.ttf": "980c7e8757e741bb49c7c96513924c61",
"assets/assets/fonts/inter/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/fonts/inter/Inter-ExtraBold.ttf": "c9709fb8e32755490795ce5bd226c3a0",
"assets/assets/fonts/inter/Inter-ExtraLight.ttf": "0f3ac0692901f70f1ac32cf079355051",
"assets/assets/fonts/inter/Inter-Light.ttf": "d55f45d07cfe01e8797bd1566561f718",
"assets/assets/fonts/inter/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/inter/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/fonts/inter/Inter-SemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/assets/fonts/inter/Inter-Thin.ttf": "2dce622147cace7b467d9929b7708430",
"assets/assets/fonts/inter/OFL.txt": "5e95a870c39ff72fe49798801aa14966",
"assets/assets/icon/atendimento_crednosso.svg": "9fd9772a484dbdc9048da5e51144f12f",
"assets/assets/icon/atendimento_padrao.svg": "2f681cd1f61c447b8003b34f7b1136b9",
"assets/assets/icon/atendimento_pipag.svg": "b946e7728f441e1edf4e1cb4a5a810cd",
"assets/assets/icon/icon-acesso-a-conta.svg": "9e9e7497f1b648ec7e0b45716732ff0a",
"assets/assets/icon/icon-alerta.svg": "175be62ddd6a39e41ad44e4023cd6794",
"assets/assets/icon/icon-barcode.svg": "dea6938f756079f5beddd1139709b932",
"assets/assets/icon/icon-calendario.svg": "b56e9b19362262311b7163229788bf24",
"assets/assets/icon/icon-camera.svg": "cbd2d3df2de5e2606b995347a61d8303",
"assets/assets/icon/icon-carteira.svg": "94d3478ecf742e25b32e98ce36d5adda",
"assets/assets/icon/icon-chart-line.svg": "a40f4839cbdcf56ba1cbf778b0e84475",
"assets/assets/icon/icon-chave.svg": "820ad90d1e71f2fb91957274b20d2fab",
"assets/assets/icon/icon-circle-dollar.svg": "f04152e00ffecdf282eb611fbce96e87",
"assets/assets/icon/icon-codigo-ativacao.svg": "9127050176ea8bd521bfb8b583ea26af",
"assets/assets/icon/icon-conta.svg": "521ebda99905140d7bd9b7a3eda918e4",
"assets/assets/icon/icon-credcard.svg": "548e406d40333ade60185b10acbf8135",
"assets/assets/icon/icon-dollar.svg": "a8c0a414e19145bd34fe9d11215bf61a",
"assets/assets/icon/icon-duvida.svg": "ba9e8a4422e7f32f762f80f176a7c018",
"assets/assets/icon/icon-erro.svg": "e664064bda2d1db5c54bf6fda3eba322",
"assets/assets/icon/icon-faceid.svg": "5f4933b711676eba82069a23d76f6379",
"assets/assets/icon/icon-files.svg": "a835f1ea7a5091b9a23b045ed7fb484b",
"assets/assets/icon/icon-frente-loja.svg": "a872d48587ef7dab505563df120917e4",
"assets/assets/icon/icon-info.svg": "b68c01512057bb29972250ee0c948ed7",
"assets/assets/icon/icon-ja-possuo-senha.svg": "554028df350a200c6599471331fb24e1",
"assets/assets/icon/icon-limites.svg": "bed2e2a6371641cfda96f07e717ec449",
"assets/assets/icon/icon-limpar.svg": "06024e1c5faf3c03b3137712b8bb2d7b",
"assets/assets/icon/icon-lista-seta-esquerda.svg": "84075dc1673dc3fbb6c9456cf0c2fae4",
"assets/assets/icon/icon-lista.svg": "bbd2225d550d9d2599f14bd18f65c84d",
"assets/assets/icon/icon-loading.svg": "c329e23402c7b7d7aab81bfd0c67945a",
"assets/assets/icon/icon-logo-crednosso-borda-branca.svg": "4454a48ca733f78950a7b87dbdca724a",
"assets/assets/icon/icon-logo-crednosso.svg": "8fb6356be5278a37081816cf449ce662",
"assets/assets/icon/icon-logo-pipag-constrate.svg": "0636acaf48f8c42465e4190bc27af298",
"assets/assets/icon/icon-logo-pipag.svg": "6f58ee5ade9677a257a214b895f4a338",
"assets/assets/icon/icon-lupa.svg": "34b46e6ae00cbebbf41ec75a155156af",
"assets/assets/icon/icon-mao-moedas.svg": "58279741e6155b90a41d13ece3fcabcb",
"assets/assets/icon/icon-map-pin-disponivel.svg": "af505ea037f5ce94c8d409c833c0c795",
"assets/assets/icon/icon-map-pin-indisponivel.svg": "73054e7eb9eb1ba179dd0c95a419623e",
"assets/assets/icon/icon-map-pin-line.svg": "a2fde3fcd6b47eb3127fe1418dd352ae",
"assets/assets/icon/icon-notification.svg": "25df8b925850c282dabcf80e99d36cf4",
"assets/assets/icon/icon-olho-cortado.svg": "5d8e5f640469cac85b3921a22012be75",
"assets/assets/icon/icon-olho-fechado.svg": "8706836c2fc0225b5827590fe6dd91f6",
"assets/assets/icon/icon-olho.svg": "fd6497b6a53ce3f247e2ccd873509cf7",
"assets/assets/icon/icon-pagamento.svg": "2349fc44aaf2d658a76bf4a8ff92697c",
"assets/assets/icon/icon-pix.svg": "0bd27f026bf9a8d3dadc2ac0402be45d",
"assets/assets/icon/icon-qrcode.svg": "1cd737882938e0454702f39e79dbac39",
"assets/assets/icon/icon-quadrado-qrcode.svg": "199c2b014f65be3d238549c546274c9c",
"assets/assets/icon/icon-questionario.svg": "cf991b1eb32c0ee3017c009098ff0e1b",
"assets/assets/icon/icon-relogio.svg": "f17903990656c93089449fd8d20bf300",
"assets/assets/icon/icon-senha-4-digitos.svg": "81924e262f001ab6bdaec4306759a421",
"assets/assets/icon/icon-seta-direita.svg": "6c49926e95b94b73bc52f68c3fc623d0",
"assets/assets/icon/icon-seta-esquerda-direita.svg": "3b844bb86120d07aaba84fc2f8b91268",
"assets/assets/icon/icon-slider.svg": "73d9390a5551cf48d58bde3caab15cdb",
"assets/assets/icon/icon-sucesso.svg": "24c28a022e6044f85e78e052c1ecdcec",
"assets/assets/icon/icon-transferencia.svg": "d4b10046afda013f8a50ebf473ca5f1f",
"assets/assets/icon/icon-transferin.svg": "d2ccbd3f80a032f2579a7843519f792a",
"assets/assets/icon/icon-transferout.svg": "70e7081df73cf32d24edacbbd2b6ac5b",
"assets/assets/images/cartao.png": "ed250fd4bacba273ffb1e2e7feb38750",
"assets/assets/images/footer.png": "f26778b8fd1eddb5e53b85af8f991936",
"assets/assets/images/imagem-login.jpg": "f2f5ca753140fa3e9a3f5ad0d5069357",
"assets/assets/images/img_acao_concluida.png": "6c5bcd674c3159abfa92d2a06c31391d",
"assets/assets/images/img_sem_notificacoes.png": "12f7794b671aba545d5de30533c04446",
"assets/assets/images/img_sucesso.png": "d1c75cc3b34c2083717461d7433a870c",
"assets/assets/images/informacoes_cedente.png": "41aa8b69e11b6392b8d1781f78719174",
"assets/assets/images/logo-crednosso-borda-branca.png": "020dcf1ad8955307573749bf26e71a7c",
"assets/assets/images/logo-crednosso.png": "ce6505b13c71b234ce935901be6ebfb2",
"assets/assets/images/logo-picash.png": "79db6e558e011ad1ba6b75e66856b959",
"assets/assets/images/logo-pipag-contraste.png": "7294bacda7baa530ba0b57a9f5637d69",
"assets/assets/images/logo-pipag.png": "8c91b30a2544f2c77394a961172e4cb2",
"assets/assets/images/logo-rv2.png": "52849dd215472330d81c501ef73da3cd",
"assets/assets/images/mercado-blur.png": "78a18c56d800e0f0f97aafc511f27225",
"assets/assets/images/mercado.png": "86720ee5542dc87d6ba1e67673a8fec2",
"assets/assets/images/mulher.png": "d64e957ba3ad6880ed8268ff0856b881",
"assets/assets/images/mulher_cartao.png": "28ae1a1ffb632ca66bb8d08b491abfdb",
"assets/assets/images/mulher_cartao_crednosso.png": "bc9c8ef56c468837c3180e830ad5303c",
"assets/assets/images/mulher_cartao_pipag.png": "b1e8597ca7203e2241fdc12898ee40bb",
"assets/assets/images/sem_solicitacao_de_credito.png": "3f60b75297ea18a365a0c6b10c2b9d29",
"assets/assets/images/top-footer.png": "6747b1f220532e1ee5d65c905bbe5e43",
"assets/FontManifest.json": "f9749866f6623e6c8bc893d82ae21a81",
"assets/fonts/MaterialIcons-Regular.otf": "a1f36d3e80989de451b74312eec531f9",
"assets/NOTICES": "82e90cfdfcdd55d4d2061d8c2c4b4ad2",
"assets/packages/community_material_icon/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2a2814a4d36d0f7eab108411d8a9b78f",
"/": "2a2814a4d36d0f7eab108411d8a9b78f",
"main.dart.js": "60affe84fe831e5b957593530ea8bcbf",
"manifest.json": "8deadb582fed9ecfd3ba273e75c9a4ee",
"version.json": "83fc2577888db9a17e9fbd440fdd614a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
