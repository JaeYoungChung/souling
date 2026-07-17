import { getStore } from '@netlify/blobs';

const kstDate = () =>
  new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Seoul' });

export default async () => {
  const store = getStore('badge-clicks');
  const date = kstDate();
  const [a, p] = await Promise.all([
    store.get(`${date}:a`),
    store.get(`${date}:p`),
  ]);

  return new Response(
    JSON.stringify({ a: Number(a || 0), p: Number(p || 0) }),
    {
      headers: {
        'content-type': 'application/json',
        'cache-control': 'no-store',
      },
    }
  );
};
