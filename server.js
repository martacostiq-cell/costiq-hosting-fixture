const http = require('http');
const fs = require('fs');
const path = require('path');
const provider = process.env.PROVIDER_NAME || 'node';
const port = process.env.PORT || 3000;
const types = { '.html': 'text/html; charset=utf-8', '.svg': 'image/svg+xml', '.json': 'application/json' };
http.createServer((req, res) => {
  const url = req.url.split('?')[0];
  if (url === '/api/hello') {
    res.writeHead(200, { 'content-type': 'application/json', 'cache-control': 'no-store' });
    res.end(JSON.stringify({ ok: true, provider, version: 'build-1', method: req.method }));
    return;
  }
  const file = url === '/' ? 'index.html' : url.replace(/^\//, '');
  const full = path.join(__dirname, 'public', file);
  if (!full.startsWith(path.join(__dirname, 'public')) || !fs.existsSync(full)) {
    res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
    res.end('<h1>404</h1>');
    return;
  }
  res.writeHead(200, { 'content-type': types[path.extname(full)] || 'application/octet-stream' });
  fs.createReadStream(full).pipe(res);
}).listen(port, () => console.log('listening on ' + port));
