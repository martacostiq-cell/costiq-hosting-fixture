// Cloudflare Pages function
export async function onRequestGet() {
  return new Response(JSON.stringify({ ok: true, provider: 'cloudflare', version: 'build-1', method: 'GET' }), {
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' }
  });
}
