/* Arc service worker — offline app shell + runtime font cache */
const CACHE = 'arc-v3-2';
const EXO = [
  'developpe-couche-barre','developpe-incline-halteres','developpe-militaire','developpe-machine',
  'dips-lestes','ecartes-halteres','elevations-laterales','extension-triceps-corde','barre-au-front',
  'tractions','tirage-vertical','rowing-barre','rowing-t-bar','tirage-horizontal',
  'curl-barre','curl-incline-halteres','curl-marteau','oiseau-rear-delt','face-pull',
  'squat-barre','presse-a-cuisses','fentes-halteres','souleve-de-terre-roumain',
  'leg-curl','leg-extension','hip-thrust','mollets-debout',
  'releve-de-jambes','crunch-cable','gainage','barre','default'
];
const SHELL = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest',
  './favicon.png',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  ...EXO.map(s => './img/exercises/' + s + '.svg')
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Fonts (Google) : cache-first so the app keeps its typography offline.
  if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
    e.respondWith(
      caches.open(CACHE).then(async c => {
        const hit = await c.match(req);
        if (hit) return hit;
        try { const res = await fetch(req); c.put(req, res.clone()); return res; }
        catch (err) { return hit || Response.error(); }
      })
    );
    return;
  }

  // Same-origin : cache-first, fall back to network then cache it.
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        return res;
      }).catch(() => caches.match('./index.html')))
    );
  }
});
