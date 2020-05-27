const express = require('express');
const next = require('next');
const { join } = require('path');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
  await app.prepare();
  const server = express();

  // handle GET request to /service-worker.js
  server.get('/service-worker.js', (req, res) => {
    // Don't cache service worker is a best practice.
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.set('Content-Type', 'application/javascript');
    const filePath = join(__dirname, 'public/service-worker.js');
    app.serveStatic(req, res, filePath);
  });

  server.get('*', (req, res) => handle(req, res));
  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`);
})();
