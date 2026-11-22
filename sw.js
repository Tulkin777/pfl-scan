// 22.11.2026: KO‘CHIRISH на компьютере — нужен браузеру, чтобы предложить «Установить» (значок на рабочем столе).
// Ничего не хранит и не подменяет: каждый запрос идёт в сеть как обычно (свежие данные складов).
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) { e.respondWith(fetch(e.request)); });
