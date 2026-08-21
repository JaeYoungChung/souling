// ─────────────────────────────────────────────────────────────
// 결과 이미지 저장 — iOS 사파리의 "첫 저장이 빈 이미지" 문제 대응 포함.
//
// 대응 방법:
//  1) document.fonts.ready 로 웹폰트 로딩 완료를 기다린다
//  2) 카드 안 모든 이미지의 decode() 완료를 기다린다
//  3) iOS(사파리/웹킷)에서는 toPng를 3회 반복 호출하고 마지막 결과를
//     사용한다 — 사파리가 인라인된 폰트/이미지를 첫 렌더에 반영하지
//     못하는 알려진 버그의 표준 우회법
// ─────────────────────────────────────────────────────────────

import { toPng } from 'html-to-image';

const CARD_WIDTH = 1080;
const CARD_HEIGHT = 1920;

function isIOS() {
  return (
    /iP(hone|od|ad)/.test(navigator.userAgent) ||
    // iPadOS 13+ 는 Mac으로 위장하므로 터치 지원 여부로 구분
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  );
}

async function waitForImages(node) {
  const images = Array.from(node.querySelectorAll('img'));
  await Promise.all(
    images.map((img) =>
      img.decode
        ? img.decode().catch(() => {})
        : Promise.resolve()
    )
  );
}

async function renderCardToBlob(node) {
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready.catch(() => {});
  }
  await waitForImages(node);

  const options = {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    pixelRatio: 1,
    cacheBust: true,
    backgroundColor: '#091970',
  };

  const attempts = isIOS() ? 3 : 1;
  let dataUrl = '';
  for (let i = 0; i < attempts; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    dataUrl = await toPng(node, options);
  }

  const res = await fetch(dataUrl);
  return res.blob();
}

// 저장 흐름: 모바일이면 시스템 공유 시트(사진 앱 저장 포함)를 먼저 시도,
// 안 되면 파일 다운로드로 폴백.
// 반환값: 'shared' | 'downloaded' | 'cancelled'
export async function saveShareImage(node, filename) {
  const blob = await renderCardToBlob(node);
  const file = new File([blob], filename, { type: 'image/png' });

  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (
    isTouchDevice &&
    navigator.share &&
    navigator.canShare &&
    navigator.canShare({ files: [file] })
  ) {
    try {
      await navigator.share({ files: [file] });
      return 'shared';
    } catch (e) {
      if (e && e.name === 'AbortError') return 'cancelled';
      // 공유 시트 실패 → 다운로드로 폴백
    }
  }

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
  return 'downloaded';
}

// 링크 공유: 시스템 공유 시트 → 실패 시 클립보드 복사.
// 링크 → 문구 순서의 한 텍스트로만 전달한다 — url이나 title을 따로 주면
// 일부 앱이 공백 없이 이어붙이거나 제목을 앞에 덧붙이는 문제가 있다.
// 반환값: 'shared' | 'copied' | 'cancelled' | 'failed'
export async function shareLink({ text, url }) {
  const message = text ? `${url}\n${text}` : url;

  if (navigator.share) {
    try {
      await navigator.share({ text: message });
      return 'shared';
    } catch (e) {
      if (e && e.name === 'AbortError') return 'cancelled';
      // 폴백으로 진행
    }
  }
  try {
    await navigator.clipboard.writeText(message);
    return 'copied';
  } catch (e) {
    // 클립보드 API도 막힌 경우 (매우 드묾) — 임시 input으로 복사
    try {
      const input = document.createElement('input');
      input.value = message;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      input.remove();
      return 'copied';
    } catch (e2) {
      return 'failed';
    }
  }
}
