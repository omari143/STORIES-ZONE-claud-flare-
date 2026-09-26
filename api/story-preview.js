// Faili hii iweke: /api/story-preview.js kwenye mradi wako wa Vercel (Stories Zone)
// Kazi yake: kutengeneza ukurasa wenye Open Graph meta tags (jina + cover) kwa hadithi maalum,
// ili WhatsApp/Facebook/Telegram/Twitter zioneshe kadi nzuri wakati link ikishirikiwa.

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
  const { id } = req.query;

  if (!id) {
    res.status(400).send('Missing story id');
    return;
  }

  try {
    const url = `${SUPABASE_URL}/rest/v1/stories?id=eq.${encodeURIComponent(id)}&select=title,description,cover_image_url&limit=1`;
    const r = await fetch(url, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    });
    const rows = await r.json();
    const story = Array.isArray(rows) && rows[0];

    const title = story?.title ? `${story.title} — Stories Zone` : 'Stories Zone';
    const description = story?.description
      ? String(story.description).slice(0, 160)
      : 'Soma hadithi za Kiswahili kwenye Stories Zone';
    const image =
      story?.cover_image_url ||
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80';

    const pageUrl = `https://stories-zone.vercel.app/story.html?id=${encodeURIComponent(id)}`;

    // Ukurasa huu unaonekana kwa BOTS pekee (via rewrite yenye masharti ya User-Agent).
    // Watumiaji wa kawaida wataendelea kufika story.html moja kwa moja.
    const html = `<!DOCTYPE html>
<html lang="sw">
<head>
  <meta charset="UTF-8" />
  <title>${escapeHtml(title)}</title>

  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:image" content="${escapeHtml(image)}" />
  <meta property="og:url" content="${escapeHtml(pageUrl)}" />
  <meta property="og:type" content="article" />
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
