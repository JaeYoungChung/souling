import { getStore } from '@netlify/blobs';

// Current date in Korea (KST), formatted YYYY-MM-DD, so the daily counter
// rolls over at midnight Asia/Seoul rather than UTC.
const kstDate = () =>
  new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Seoul' });

export default async (req) => {
  const badge = new URL(req.url).searchParams.get('b');
  if (badge !== 'a' && badge !== 'p') {
    return new Response('bad badge', { status: 400 });
  }

  const store = getStore('badge-clicks');
  const key = `${kstDate()}:${badge}`;

  // Not atomic, but fine for a low-traffic marketing page.
  const current = Number((await store.get(key)) || 0);
  await store.set(key, String(current + 1));

  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'content-type': 'application/json' },
  });
};
