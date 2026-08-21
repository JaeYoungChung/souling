import { getStore } from '@netlify/blobs';

// 영웅 유형 테스트 — 익명 유형 카운트
//   POST /.netlify/functions/hero-count?t=ody  → 해당 유형 +1
//   GET  /.netlify/functions/hero-count        → { orp: 16, mus: 7, ... }
//
// 유형 3글자 코드 (src/heroTest/data/heroTypes.js 의 code와 동일)
const CODES = [
  'orp', 'mus', 'tho', 'zge', 'dae', 'hel', 'pen', 'ody',
  'per', 'ach', 'ata', 'cuc', 'swk', 'odn', 'art', 'fin',
];

const json = (body) =>
  new Response(JSON.stringify(body), {
    headers: {
      'content-type': 'application/json',
      'cache-control': 'no-store',
    },
  });

export default async (req) => {
  const store = getStore('hero-test-results');

  if (req.method === 'POST') {
    const code = new URL(req.url).searchParams.get('t');
    if (!CODES.includes(code)) {
      return new Response('bad type', { status: 400 });
    }
    // 원자적이지 않지만 마케팅 페이지 수준 트래픽에는 충분 (track.mjs와 동일 패턴)
    const current = Number((await store.get(code)) || 0);
    await store.set(code, String(current + 1));
    return json({ ok: true });
  }

  const entries = await Promise.all(
    CODES.map(async (code) => [code, Number((await store.get(code)) || 0)])
  );
  return json(Object.fromEntries(entries));
};
