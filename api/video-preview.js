// /api/video-preview.js
// Hutengeneza Open Graph meta tags kwa video maalum kwa kutumia SLUG
// ili WhatsApp/Facebook/Telegram/Twitter zioneshe kadi nzuri.

const SUPABASE_URL = 'https://fuyzusikxmkjmnhpdbof.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1eXp1c2lreG1ram1uaHBkYm9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1NjM3MTcsImV4cCI6MjA5NTEzOTcxN30.QaPxUs4e_O64nBxYhByGVkYa4tPIB9OCAh89xuQGG7c';

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export default async function handler(req, res) {
  const { slug } = req.query;

  if (!slug) {
    res.status(400).send('Missing video slug');
    return;
  }

  try {
    const url = `${SUPABASE_URL}/rest/v1/video_items?slug=eq.${encodeURIComponent(slug)}&select=title,description,thumbnail_url,cover_image_url,slug&is_published=eq.true&limit=1`;
    const r = await fetch(url, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    });
    const rows = await r.json();
    const video = Array.isArray(rows) && rows[0];

    if (!video) {
      res.status(404).send('Video not found');
      return;
    }

    const title = `${video.title} — Stories Zone`;
    const description = video.description
      ? String(video.description).slice(0, 160)
      : 'Tazama video za simulizi kwenye Stories Zone';
    const image =
      video.thumbnail_url ||
      video.cover_image_url ||
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80';

    const pageUrl = `https://stories-zone.vercel.app/video/${video.slug}`;

    const html = `<!DOCTYPE html>
<html lang="sw">
<head>
  <meta charset="UTF-8" />
  <title>${escapeHtml(title)}</title>

  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:image" content="${escapeHtml(image)}" />
  <meta property="og:url" content="${escapeHtml(pageUrl)}" />
  <meta property="og:type" content="video.other" />
  <meta property="og:site_name" content="Stories Zone" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(title)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <meta name="twitter:image" content="${escapeHtml(image)}" />

  <meta http-equiv="refresh" content="0; url=${escapeHtml(pageUrl)}" />
</head>
<body>
  <p>Inaelekeza kwenye <a href="${escapeHtml(pageUrl)}">${escapeHtml(title)}</a>...</p>
</body>
</html>`;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(html);
  } catch (err) {
    res.status(500).send('Error building preview');
  }
}
