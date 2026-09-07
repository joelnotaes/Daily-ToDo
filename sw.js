// Minimal service worker — required by Chrome/Android to allow "Install app"
// instead of only "Create shortcut". No offline caching logic needed.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', () => {}); // pass-through, required for installability
