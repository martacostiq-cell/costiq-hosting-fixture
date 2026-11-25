// Netlify style function
exports.handler = async (event) => ({
  statusCode: 200,
  headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  body: JSON.stringify({ ok: true, provider: 'netlify', version: 'build-1', method: event.httpMethod })
});
