/* eslint-disable no-console */
// ─────────────────────────────────────────────────────────────
// 빌드 후 실행 (package.json "postbuild") — 유형별 OG 미리보기 페이지 생성
//
// SPA는 자바스크립트를 실행하지 않는 카카오톡/X/페이스북 크롤러에게
// 항상 같은 메타 태그만 보여준다. 그래서 build/index.html을 복사해
// 유형별 og:title / og:description / og:image 를 넣은 정적 HTML을
//   build/hero-test/result/<typeId>/index.html
// 로 만들어 둔다. Netlify는 실제 파일이 있으면 SPA 리다이렉트(/* →
// /index.html)보다 파일을 우선 서빙하므로, 사람이 열면 그대로 React
// 앱이 뜨고 크롤러는 유형별 미리보기를 읽는다.
//
// 콘텐츠는 src/heroTest/data/heroTypes.js 에서 읽는다 (hook.ko, ogImage).
// ─────────────────────────────────────────────────────────────

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://souling.netlify.app';

// OG 텍스트는 크롤러가 언어를 모르므로 한국어 기준으로 생성
const DEFAULT_DESCRIPTION = '27문항으로 알아보는 나의 영웅 유형 — 소울링';
const TEST_TITLE = '영웅 유형 테스트 — 소울링';
const DEFAULT_IMAGE = `${SITE_URL}/favicon.ico`;

// heroTypes.js는 import 없는 순수 데이터 파일 — export만 벗겨서 평가한다.
function loadHeroTypes() {
  const file = path.join(__dirname, '..', 'src', 'heroTest', 'data', 'heroTypes.js');
  const source = fs.readFileSync(file, 'utf8').replace(/^export\s+/gm, '');
  // eslint-disable-next-line no-new-func
  return new Function(`${source}; return HERO_TYPES;`)();
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function replaceMeta(html, property, content) {
  const pattern = new RegExp(`(<meta property="${property}" content=")[^"]*(")`);
  if (!pattern.test(html)) {
    console.warn(`  ⚠ meta ${property} not found in template`);
    return html;
  }
  return html.replace(pattern, `$1${escapeHtml(content)}$2`);
}

function buildPage(template, { title, description, image, url }) {
  let html = template;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);
  html = replaceMeta(html, 'og:title', title);
  html = replaceMeta(html, 'og:description', description);
  html = replaceMeta(html, 'og:url', url);
  html = replaceMeta(html, 'og:image', image);
  html = html.replace(
    /<meta name="twitter:card" content="[^"]*"\s*\/>/,
    [
      // 유형 이미지가 정사각형(1:1)이라 X에서는 summary 카드가 맞음
      `<meta name="twitter:card" content="summary" />`,
      `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
      `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
      `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
    ].join('\n    ')
  );
  return html;
}

function toAbsoluteUrl(imagePath) {
  if (!imagePath) return DEFAULT_IMAGE;
  if (/^https?:\/\//.test(imagePath)) return imagePath;
  return `${SITE_URL}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`;
}

function main() {
  const buildDir = path.join(__dirname, '..', 'build');
  const templatePath = path.join(buildDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('build/index.html not found — run after `npm run build`');
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, 'utf8');
  const heroTypes = loadHeroTypes();

  // 테스트 시작 페이지 (/hero-test)
  const startDir = path.join(buildDir, 'hero-test');
  fs.mkdirSync(startDir, { recursive: true });
  fs.writeFileSync(
    path.join(startDir, 'index.html'),
    buildPage(template, {
      title: TEST_TITLE,
      description: DEFAULT_DESCRIPTION,
      image: DEFAULT_IMAGE,
      url: `${SITE_URL}/hero-test`,
    })
  );

  // 유형별 결과 페이지 (/hero-test/result/:typeId) 16개
  heroTypes.forEach((type) => {
    const name = type.name.ko || type.id;
    const heroName = type.heroName.ko || '';
    const title = heroName ? `나는 ${name} — ${heroName}` : `나는 ${name}`;
    const description = type.hook.ko || DEFAULT_DESCRIPTION;
    const image = toAbsoluteUrl(type.ogImage);
    const url = `${SITE_URL}/hero-test/result/${type.id}`;

    const dir = path.join(buildDir, 'hero-test', 'result', type.id);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), buildPage(template, { title, description, image, url }));
    console.log(`  ✓ /hero-test/result/${type.id} — "${title}"`);
  });

  console.log(`OG pages generated for ${heroTypes.length} hero types.`);
}

main();
