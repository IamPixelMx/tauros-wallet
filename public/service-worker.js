try {
  self['workbox:core:5.1.3'] && _();
} catch (e) {}
const e = (e, ...t) => {
  let s = e;
  return t.length > 0 && (s += ' :: ' + JSON.stringify(t)), s;
};
class t extends Error {
  constructor(t, s) {
    super(e(t, s)), (this.name = t), (this.details = s);
  }
}
try {
  self['workbox:routing:5.1.3'] && _();
} catch (e) {}
const s = e => (e && 'object' == typeof e ? e : { handle: e });
class n {
  constructor(e, t, n = 'GET') {
    (this.handler = s(t)), (this.match = e), (this.method = n);
  }
}
class i extends n {
  constructor(e, t, s) {
    super(
      ({ url: t }) => {
        const s = e.exec(t.href);
        if (s && (t.origin === location.origin || 0 === s.index)) return s.slice(1);
      },
      t,
      s,
    );
  }
}
const c = e =>
  new URL(String(e), location.href).href.replace(new RegExp('^' + location.origin), '');
class a {
  constructor() {
    this.t = new Map();
  }
  get routes() {
    return this.t;
  }
  addFetchListener() {
    self.addEventListener('fetch', e => {
      const { request: t } = e,
        s = this.handleRequest({ request: t, event: e });
      s && e.respondWith(s);
    });
  }
  addCacheListener() {
    self.addEventListener('message', e => {
      if (e.data && 'CACHE_URLS' === e.data.type) {
        const { payload: t } = e.data,
          s = Promise.all(
            t.urlsToCache.map(e => {
              'string' == typeof e && (e = [e]);
              const t = new Request(...e);
              return this.handleRequest({ request: t });
            }),
          );
        e.waitUntil(s), e.ports && e.ports[0] && s.then(() => e.ports[0].postMessage(!0));
      }
    });
  }
  handleRequest({ request: e, event: t }) {
    const s = new URL(e.url, location.href);
    if (!s.protocol.startsWith('http')) return;
    const { params: n, route: i } = this.findMatchingRoute({ url: s, request: e, event: t });
    let c,
      a = i && i.handler;
    if ((!a && this.s && (a = this.s), a)) {
      try {
        c = a.handle({ url: s, request: e, event: t, params: n });
      } catch (e) {
        c = Promise.reject(e);
      }
      return (
        c instanceof Promise &&
          this.i &&
          (c = c.catch(n => this.i.handle({ url: s, request: e, event: t }))),
        c
      );
    }
  }
  findMatchingRoute({ url: e, request: t, event: s }) {
    const n = this.t.get(t.method) || [];
    for (const i of n) {
      let n;
      const c = i.match({ url: e, request: t, event: s });
      if (c)
        return (
          (n = c),
          ((Array.isArray(c) && 0 === c.length) ||
            (c.constructor === Object && 0 === Object.keys(c).length) ||
            'boolean' == typeof c) &&
            (n = void 0),
          { route: i, params: n }
        );
    }
    return {};
  }
  setDefaultHandler(e) {
    this.s = s(e);
  }
  setCatchHandler(e) {
    this.i = s(e);
  }
  registerRoute(e) {
    this.t.has(e.method) || this.t.set(e.method, []), this.t.get(e.method).push(e);
  }
  unregisterRoute(e) {
    if (!this.t.has(e.method))
      throw new t('unregister-route-but-not-found-with-method', { method: e.method });
    const s = this.t.get(e.method).indexOf(e);
    if (!(s > -1)) throw new t('unregister-route-route-not-registered');
    this.t.get(e.method).splice(s, 1);
  }
}
let r;
const o = () => (r || ((r = new a()), r.addFetchListener(), r.addCacheListener()), r);
const h = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: 'undefined' != typeof registration ? registration.scope : '',
  },
  u = e => [h.prefix, e, h.suffix].filter(e => e && e.length > 0).join('-'),
  l = e => e || u(h.precache),
  f = e => e || u(h.runtime);
function d(e) {
  e.then(() => {});
}
const w = new Set();
class p {
  constructor(e, t, { onupgradeneeded: s, onversionchange: n } = {}) {
    (this.o = null), (this.h = e), (this.u = t), (this.l = s), (this.p = n || (() => this.close()));
  }
  get db() {
    return this.o;
  }
  async open() {
    if (!this.o)
      return (
        (this.o = await new Promise((e, t) => {
          let s = !1;
          setTimeout(() => {
            (s = !0), t(new Error('The open request was blocked and timed out'));
          }, this.OPEN_TIMEOUT);
          const n = indexedDB.open(this.h, this.u);
          (n.onerror = () => t(n.error)),
            (n.onupgradeneeded = e => {
              s
                ? (n.transaction.abort(), n.result.close())
                : 'function' == typeof this.l && this.l(e);
            }),
            (n.onsuccess = () => {
              const t = n.result;
              s ? t.close() : ((t.onversionchange = this.p.bind(this)), e(t));
            });
        })),
        this
      );
  }
  async getKey(e, t) {
    return (await this.getAllKeys(e, t, 1))[0];
  }
  async getAll(e, t, s) {
    return await this.getAllMatching(e, { query: t, count: s });
  }
  async getAllKeys(e, t, s) {
    return (await this.getAllMatching(e, { query: t, count: s, includeKeys: !0 })).map(e => e.key);
  }
  async getAllMatching(
    e,
    { index: t, query: s = null, direction: n = 'next', count: i, includeKeys: c = !1 } = {},
  ) {
    return await this.transaction([e], 'readonly', (a, r) => {
      const o = a.objectStore(e),
        h = t ? o.index(t) : o,
        u = [],
        l = h.openCursor(s, n);
      l.onsuccess = () => {
        const e = l.result;
        e ? (u.push(c ? e : e.value), i && u.length >= i ? r(u) : e.continue()) : r(u);
      };
    });
  }
  async transaction(e, t, s) {
    return (
      await this.open(),
      await new Promise((n, i) => {
        const c = this.o.transaction(e, t);
        (c.onabort = () => i(c.error)), (c.oncomplete = () => n()), s(c, e => n(e));
      })
    );
  }
  async g(e, t, s, ...n) {
    return await this.transaction([t], s, (s, i) => {
      const c = s.objectStore(t),
        a = c[e].apply(c, n);
      a.onsuccess = () => i(a.result);
    });
  }
  close() {
    this.o && (this.o.close(), (this.o = null));
  }
}
p.prototype.OPEN_TIMEOUT = 2e3;
const y = {
  readonly: ['get', 'count', 'getKey', 'getAll', 'getAllKeys'],
  readwrite: ['add', 'put', 'clear', 'delete'],
};
for (const [e, t] of Object.entries(y))
  for (const s of t)
    s in IDBObjectStore.prototype &&
      (p.prototype[s] = async function (t, ...n) {
        return await this.g(s, t, e, ...n);
      });
try {
  self['workbox:expiration:5.1.3'] && _();
} catch (e) {}
const g = e => {
  const t = new URL(e, location.href);
  return (t.hash = ''), t.href;
};
class m {
  constructor(e) {
    (this.m = e), (this.o = new p('workbox-expiration', 1, { onupgradeneeded: e => this.v(e) }));
  }
  v(e) {
    const t = e.target.result.createObjectStore('cache-entries', { keyPath: 'id' });
    t.createIndex('cacheName', 'cacheName', { unique: !1 }),
      t.createIndex('timestamp', 'timestamp', { unique: !1 }),
      (async e => {
        await new Promise((t, s) => {
          const n = indexedDB.deleteDatabase(e);
          (n.onerror = () => {
            s(n.error);
          }),
            (n.onblocked = () => {
              s(new Error('Delete blocked'));
            }),
            (n.onsuccess = () => {
              t();
            });
        });
      })(this.m);
  }
  async setTimestamp(e, t) {
    const s = { url: (e = g(e)), timestamp: t, cacheName: this.m, id: this.q(e) };
    await this.o.put('cache-entries', s);
  }
  async getTimestamp(e) {
    return (await this.o.get('cache-entries', this.q(e))).timestamp;
  }
  async expireEntries(e, t) {
    const s = await this.o.transaction('cache-entries', 'readwrite', (s, n) => {
        const i = s.objectStore('cache-entries').index('timestamp').openCursor(null, 'prev'),
          c = [];
        let a = 0;
        i.onsuccess = () => {
          const s = i.result;
          if (s) {
            const n = s.value;
            n.cacheName === this.m &&
              ((e && n.timestamp < e) || (t && a >= t) ? c.push(s.value) : a++),
              s.continue();
          } else n(c);
        };
      }),
      n = [];
    for (const e of s) await this.o.delete('cache-entries', e.id), n.push(e.url);
    return n;
  }
  q(e) {
    return this.m + '|' + g(e);
  }
}
class v {
  constructor(e, t = {}) {
    (this.R = !1),
      (this._ = !1),
      (this.U = t.maxEntries),
      (this.L = t.maxAgeSeconds),
      (this.m = e),
      (this.k = new m(e));
  }
  async expireEntries() {
    if (this.R) return void (this._ = !0);
    this.R = !0;
    const e = this.L ? Date.now() - 1e3 * this.L : 0,
      t = await this.k.expireEntries(e, this.U),
      s = await self.caches.open(this.m);
    for (const e of t) await s.delete(e);
    (this.R = !1), this._ && ((this._ = !1), d(this.expireEntries()));
  }
  async updateTimestamp(e) {
    await this.k.setTimestamp(e, Date.now());
  }
  async isURLExpired(e) {
    if (this.L) {
      return (await this.k.getTimestamp(e)) < Date.now() - 1e3 * this.L;
    }
    return !1;
  }
  async delete() {
    (this._ = !1), await this.k.expireEntries(1 / 0);
  }
}
const b = (e, t) => e.filter(e => t in e),
  q = async ({ request: e, mode: t, plugins: s = [] }) => {
    const n = b(s, 'cacheKeyWillBeUsed');
    let i = e;
    for (const e of n)
      (i = await e.cacheKeyWillBeUsed.call(e, { mode: t, request: i })),
        'string' == typeof i && (i = new Request(i));
    return i;
  },
  R = async ({ cacheName: e, request: t, event: s, matchOptions: n, plugins: i = [] }) => {
    const c = await self.caches.open(e),
      a = await q({ plugins: i, request: t, mode: 'read' });
    let r = await c.match(a, n);
    for (const t of i)
      if ('cachedResponseWillBeUsed' in t) {
        const i = t.cachedResponseWillBeUsed;
        r = await i.call(t, {
          cacheName: e,
          event: s,
          matchOptions: n,
          cachedResponse: r,
          request: a,
        });
      }
    return r;
  },
  x = async ({
    cacheName: e,
    request: s,
    response: n,
    event: i,
    plugins: a = [],
    matchOptions: r,
  }) => {
    const o = await q({ plugins: a, request: s, mode: 'write' });
    if (!n) throw new t('cache-put-with-no-response', { url: c(o.url) });
    const h = await (async ({ request: e, response: t, event: s, plugins: n = [] }) => {
      let i = t,
        c = !1;
      for (const t of n)
        if ('cacheWillUpdate' in t) {
          c = !0;
          const n = t.cacheWillUpdate;
          if (((i = await n.call(t, { request: e, response: i, event: s })), !i)) break;
        }
      return c || (i = i && 200 === i.status ? i : void 0), i || null;
    })({ event: i, plugins: a, response: n, request: o });
    if (!h) return;
    const u = await self.caches.open(e),
      l = b(a, 'cacheDidUpdate'),
      f = l.length > 0 ? await R({ cacheName: e, matchOptions: r, request: o }) : null;
    try {
      await u.put(o, h);
    } catch (e) {
      throw (
        ('QuotaExceededError' === e.name &&
          (await (async function () {
            for (const e of w) await e();
          })()),
        e)
      );
    }
    for (const t of l)
      await t.cacheDidUpdate.call(t, {
        cacheName: e,
        event: i,
        oldResponse: f,
        newResponse: h,
        request: o,
      });
  },
  U = R,
  L = async ({ request: e, fetchOptions: s, event: n, plugins: i = [] }) => {
    if (
      ('string' == typeof e && (e = new Request(e)), n instanceof FetchEvent && n.preloadResponse)
    ) {
      const e = await n.preloadResponse;
      if (e) return e;
    }
    const c = b(i, 'fetchDidFail'),
      a = c.length > 0 ? e.clone() : null;
    try {
      for (const t of i)
        if ('requestWillFetch' in t) {
          const s = t.requestWillFetch,
            i = e.clone();
          e = await s.call(t, { request: i, event: n });
        }
    } catch (e) {
      throw new t('plugin-error-request-will-fetch', { thrownError: e });
    }
    const r = e.clone();
    try {
      let t;
      t = 'navigate' === e.mode ? await fetch(e) : await fetch(e, s);
      for (const e of i)
        'fetchDidSucceed' in e &&
          (t = await e.fetchDidSucceed.call(e, { event: n, request: r, response: t }));
      return t;
    } catch (e) {
      for (const t of c)
        await t.fetchDidFail.call(t, {
          error: e,
          event: n,
          originalRequest: a.clone(),
          request: r.clone(),
        });
      throw e;
    }
  };
try {
  self['workbox:strategies:5.1.3'] && _();
} catch (e) {}
const E = {
  cacheWillUpdate: async ({ response: e }) => (200 === e.status || 0 === e.status ? e : null),
};
let k;
async function N(e, t) {
  const s = e.clone(),
    n = { headers: new Headers(s.headers), status: s.status, statusText: s.statusText },
    i = t ? t(n) : n,
    c = (function () {
      if (void 0 === k) {
        const e = new Response('');
        if ('body' in e)
          try {
            new Response(e.body), (k = !0);
          } catch (e) {
            k = !1;
          }
        k = !1;
      }
      return k;
    })()
      ? s.body
      : await s.blob();
  return new Response(c, i);
}
try {
  self['workbox:precaching:5.1.3'] && _();
} catch (e) {}
function D(e) {
  if (!e) throw new t('add-to-cache-list-unexpected-type', { entry: e });
  if ('string' == typeof e) {
    const t = new URL(e, location.href);
    return { cacheKey: t.href, url: t.href };
  }
  const { revision: s, url: n } = e;
  if (!n) throw new t('add-to-cache-list-unexpected-type', { entry: e });
  if (!s) {
    const e = new URL(n, location.href);
    return { cacheKey: e.href, url: e.href };
  }
  const i = new URL(n, location.href),
    c = new URL(n, location.href);
  return i.searchParams.set('__WB_REVISION__', s), { cacheKey: i.href, url: c.href };
}
class j {
  constructor(e) {
    (this.m = l(e)), (this.N = new Map()), (this.D = new Map()), (this.j = new Map());
  }
  addToCacheList(e) {
    const s = [];
    for (const n of e) {
      'string' == typeof n ? s.push(n) : n && void 0 === n.revision && s.push(n.url);
      const { cacheKey: e, url: i } = D(n),
        c = 'string' != typeof n && n.revision ? 'reload' : 'default';
      if (this.N.has(i) && this.N.get(i) !== e)
        throw new t('add-to-cache-list-conflicting-entries', {
          firstEntry: this.N.get(i),
          secondEntry: e,
        });
      if ('string' != typeof n && n.integrity) {
        if (this.j.has(e) && this.j.get(e) !== n.integrity)
          throw new t('add-to-cache-list-conflicting-integrities', { url: i });
        this.j.set(e, n.integrity);
      }
      if ((this.N.set(i, e), this.D.set(i, c), s.length > 0)) {
        const e = `Workbox is precaching URLs without revision info: ${s.join(
          ', ',
        )}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
        console.warn(e);
      }
    }
  }
  async install({ event: e, plugins: t } = {}) {
    const s = [],
      n = [],
      i = await self.caches.open(this.m),
      c = await i.keys(),
      a = new Set(c.map(e => e.url));
    for (const [e, t] of this.N) a.has(t) ? n.push(e) : s.push({ cacheKey: t, url: e });
    const r = s.map(({ cacheKey: s, url: n }) => {
      const i = this.j.get(s),
        c = this.D.get(n);
      return this.C({ cacheKey: s, cacheMode: c, event: e, integrity: i, plugins: t, url: n });
    });
    await Promise.all(r);
    return { updatedURLs: s.map(e => e.url), notUpdatedURLs: n };
  }
  async activate() {
    const e = await self.caches.open(this.m),
      t = await e.keys(),
      s = new Set(this.N.values()),
      n = [];
    for (const i of t) s.has(i.url) || (await e.delete(i), n.push(i.url));
    return { deletedURLs: n };
  }
  async C({ cacheKey: e, url: s, cacheMode: n, event: i, plugins: c, integrity: a }) {
    const r = new Request(s, { integrity: a, cache: n, credentials: 'same-origin' });
    let o,
      h = await L({ event: i, plugins: c, request: r });
    for (const e of c || []) 'cacheWillUpdate' in e && (o = e);
    if (!(o ? await o.cacheWillUpdate({ event: i, request: r, response: h }) : h.status < 400))
      throw new t('bad-precaching-response', { url: s, status: h.status });
    h.redirected && (h = await N(h)),
      await x({
        event: i,
        plugins: c,
        response: h,
        request: e === s ? r : new Request(e),
        cacheName: this.m,
        matchOptions: { ignoreSearch: !0 },
      });
  }
  getURLsToCacheKeys() {
    return this.N;
  }
  getCachedURLs() {
    return [...this.N.keys()];
  }
  getCacheKeyForURL(e) {
    const t = new URL(e, location.href);
    return this.N.get(t.href);
  }
  async matchPrecache(e) {
    const t = e instanceof Request ? e.url : e,
      s = this.getCacheKeyForURL(t);
    if (s) {
      return (await self.caches.open(this.m)).match(s);
    }
  }
  createHandler(e = !0) {
    return async ({ request: s }) => {
      try {
        const e = await this.matchPrecache(s);
        if (e) return e;
        throw new t('missing-precache-entry', {
          cacheName: this.m,
          url: s instanceof Request ? s.url : s,
        });
      } catch (t) {
        if (e) return fetch(s);
        throw t;
      }
    };
  }
  createHandlerBoundToURL(e, s = !0) {
    if (!this.getCacheKeyForURL(e)) throw new t('non-precached-url', { url: e });
    const n = this.createHandler(s),
      i = new Request(e);
    return () => n({ request: i });
  }
}
let C;
const M = () => (C || (C = new j()), C);
const T = (e, t) => {
  const s = M().getURLsToCacheKeys();
  for (const n of (function* (
    e,
    { ignoreURLParametersMatching: t, directoryIndex: s, cleanURLs: n, urlManipulation: i } = {},
  ) {
    const c = new URL(e, location.href);
    (c.hash = ''), yield c.href;
    const a = (function (e, t = []) {
      for (const s of [...e.searchParams.keys()])
        t.some(e => e.test(s)) && e.searchParams.delete(s);
      return e;
    })(c, t);
    if ((yield a.href, s && a.pathname.endsWith('/'))) {
      const e = new URL(a.href);
      (e.pathname += s), yield e.href;
    }
    if (n) {
      const e = new URL(a.href);
      (e.pathname += '.html'), yield e.href;
    }
    if (i) {
      const e = i({ url: c });
      for (const t of e) yield t.href;
    }
  })(e, t)) {
    const e = s.get(n);
    if (e) return e;
  }
};
let K = !1;
function G(e) {
  K ||
    ((({
      ignoreURLParametersMatching: e = [/^utm_/],
      directoryIndex: t = 'index.html',
      cleanURLs: s = !0,
      urlManipulation: n,
    } = {}) => {
      const i = l();
      self.addEventListener('fetch', c => {
        const a = T(c.request.url, {
          cleanURLs: s,
          directoryIndex: t,
          ignoreURLParametersMatching: e,
          urlManipulation: n,
        });
        if (!a) return;
        let r = self.caches
          .open(i)
          .then(e => e.match(a))
          .then(e => e || fetch(a));
        c.respondWith(r);
      });
    })(e),
    (K = !0));
}
const I = [],
  O = {
    get: () => I,
    add(e) {
      I.push(...e);
    },
  },
  P = e => {
    const t = M(),
      s = O.get();
    e.waitUntil(
      t.install({ event: e, plugins: s }).catch(e => {
        throw e;
      }),
    );
  },
  A = e => {
    const t = M();
    e.waitUntil(t.activate());
  };
var S;
self.addEventListener('install', () => self.skipWaiting()),
  self.addEventListener('activate', () => self.clients.claim()),
  (S = {}),
  (function (e) {
    M().addToCacheList(e),
      e.length > 0 && (self.addEventListener('install', P), self.addEventListener('activate', A));
  })([
    {
      url: '_next/static/442DU9e076Icv_CkgG2EG/_buildManifest.js',
      revision: 'e42f54b70f3c7b24c2385265eebedce3',
    },
    {
      url: '_next/static/442DU9e076Icv_CkgG2EG/_ssgManifest.js',
      revision: 'abee47769bf307639ace4945f9cfd4ff',
    },
    {
      url: '_next/static/442DU9e076Icv_CkgG2EG/pages/_app.js',
      revision: '7cc502f161ba66a07475c086f20e44d7',
    },
    {
      url: '_next/static/442DU9e076Icv_CkgG2EG/pages/_error.js',
      revision: '4428e1614e68fda8f68bf9df6b7ec9a2',
    },
    {
      url: '_next/static/442DU9e076Icv_CkgG2EG/pages/home.js',
      revision: '1c226551014633816750a35cb6a44a83',
    },
    {
      url: '_next/static/442DU9e076Icv_CkgG2EG/pages/home/Home.js',
      revision: '3b651047c5ef1e60591cf78202546ac9',
    },
    {
      url: '_next/static/442DU9e076Icv_CkgG2EG/pages/index.js',
      revision: 'ee7a8491fbbe634cdfa7f7fcf97b86be',
    },
    {
      url: '_next/static/chunks/475281f743ad40b6a0f0a6abbde69697243bb9f1.931adcbece28c9a5c427.js',
      revision: '68f211df47c8eda5360522bce01df05c',
    },
    {
      url: '_next/static/chunks/54c0ce666e81d3c9dccbe5aba0cd323e5a462888.3de7028779e6301114d3.js',
      revision: 'f1a82a75942dd27c4654b3b18aec27c7',
    },
    {
      url: '_next/static/chunks/8804ed50.4c419f4b16a96bca7647.js',
      revision: '0f76c6f3cca30e5b890b037c53cdecd9',
    },
    {
      url: '_next/static/chunks/commons.580642c8fc5dcb56fe30.js',
      revision: 'e2a434c60fc998ed4c2615a4419e2365',
    },
    {
      url: '_next/static/chunks/framework.619a4f70c1d4d3a29cbc.js',
      revision: '8e6204793e3d11a8bedf359bfb6e110d',
    },
    {
      url: '_next/static/chunks/styles.e99c2b0a57ad209bdd27.js',
      revision: '050ac6caec9725cd43bfd214147ffa02',
    },
    {
      url: '_next/static/css/8804ed50.fe07a263.chunk.css',
      revision: '476773ffddd8fad867e411c49a0f3ef4',
    },
    {
      url: '_next/static/runtime/main-4be34270d2be07111b73.js',
      revision: 'e95279b8675e4fbadd4882161b0d4738',
    },
    {
      url: '_next/static/runtime/polyfills-e714fa05317f6352c0fa.js',
      revision: '9c3c83291b493c9ee9c859280250f0a4',
    },
    {
      url: '_next/static/runtime/webpack-6ef28db84b4c42ad34e9.js',
      revision: '40b4095b5b68a142c856f388ccb756f2',
    },
  ]),
  G(S),
  (function (e, s, c) {
    let a;
    if ('string' == typeof e) {
      const t = new URL(e, location.href);
      a = new n(({ url: e }) => e.href === t.href, s, c);
    } else if (e instanceof RegExp) a = new i(e, s, c);
    else if ('function' == typeof e) a = new n(e, s, c);
    else {
      if (!(e instanceof n))
        throw new t('unsupported-route-type', {
          moduleName: 'workbox-routing',
          funcName: 'registerRoute',
          paramName: 'capture',
        });
      a = e;
    }
    o().registerRoute(a);
  })(
    /^https?.*/,
    new (class {
      constructor(e = {}) {
        if (((this.m = f(e.cacheName)), e.plugins)) {
          const t = e.plugins.some(e => !!e.cacheWillUpdate);
          this.M = t ? e.plugins : [E, ...e.plugins];
        } else this.M = [E];
        (this.T = e.networkTimeoutSeconds || 0),
          (this.K = e.fetchOptions),
          (this.G = e.matchOptions);
      }
      async handle({ event: e, request: s }) {
        const n = [];
        'string' == typeof s && (s = new Request(s));
        const i = [];
        let c;
        if (this.T) {
          const { id: t, promise: a } = this.I({ request: s, event: e, logs: n });
          (c = t), i.push(a);
        }
        const a = this.O({ timeoutId: c, request: s, event: e, logs: n });
        i.push(a);
        let r = await Promise.race(i);
        if ((r || (r = await a), !r)) throw new t('no-response', { url: s.url });
        return r;
      }
      I({ request: e, logs: t, event: s }) {
        let n;
        return {
          promise: new Promise(t => {
            n = setTimeout(async () => {
              t(await this.P({ request: e, event: s }));
            }, 1e3 * this.T);
          }),
          id: n,
        };
      }
      async O({ timeoutId: e, request: t, logs: s, event: n }) {
        let i, c;
        try {
          c = await L({ request: t, event: n, fetchOptions: this.K, plugins: this.M });
        } catch (e) {
          i = e;
        }
        if ((e && clearTimeout(e), i || !c)) c = await this.P({ request: t, event: n });
        else {
          const e = c.clone(),
            s = x({ cacheName: this.m, request: t, response: e, event: n, plugins: this.M });
          if (n)
            try {
              n.waitUntil(s);
            } catch (e) {}
        }
        return c;
      }
      P({ event: e, request: t }) {
        return U({
          cacheName: this.m,
          request: t,
          event: e,
          matchOptions: this.G,
          plugins: this.M,
        });
      }
    })({
      cacheName: 'offlineCache',
      plugins: [
        new (class {
          constructor(e = {}) {
            var t;
            (this.cachedResponseWillBeUsed = async ({
              event: e,
              request: t,
              cacheName: s,
              cachedResponse: n,
            }) => {
              if (!n) return null;
              const i = this.A(n),
                c = this.S(s);
              d(c.expireEntries());
              const a = c.updateTimestamp(t.url);
              if (e)
                try {
                  e.waitUntil(a);
                } catch (e) {}
              return i ? n : null;
            }),
              (this.cacheDidUpdate = async ({ cacheName: e, request: t }) => {
                const s = this.S(e);
                await s.updateTimestamp(t.url), await s.expireEntries();
              }),
              (this.H = e),
              (this.L = e.maxAgeSeconds),
              (this.W = new Map()),
              e.purgeOnQuotaError && ((t = () => this.deleteCacheAndMetadata()), w.add(t));
          }
          S(e) {
            if (e === f()) throw new t('expire-custom-caches-only');
            let s = this.W.get(e);
            return s || ((s = new v(e, this.H)), this.W.set(e, s)), s;
          }
          A(e) {
            if (!this.L) return !0;
            const t = this.B(e);
            if (null === t) return !0;
            return t >= Date.now() - 1e3 * this.L;
          }
          B(e) {
            if (!e.headers.has('date')) return null;
            const t = e.headers.get('date'),
              s = new Date(t).getTime();
            return isNaN(s) ? null : s;
          }
          async deleteCacheAndMetadata() {
            for (const [e, t] of this.W) await self.caches.delete(e), await t.delete();
            this.W = new Map();
          }
        })({ maxEntries: 200, purgeOnQuotaError: !0 }),
      ],
    }),
    'GET',
  );
