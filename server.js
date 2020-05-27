const express = require('express');
const next = require('next');
const path = require('path');
const { parse } = require('url');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
  await app.prepare();
  const server = express();

  server.get('*', (req, res) => handle(req, res));
  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`);
})();
