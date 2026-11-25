// Vercel style function
module.exports = (req, res) => {
  res.setHeader('cache-control', 'no-store');
  res.status(200).json({ ok: true, provider: 'vercel', version: 'build-1', method: req.method });
};
