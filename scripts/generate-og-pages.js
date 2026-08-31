/* eslint-disable no-console */
// ─────────────────────────────────────────────────────────────
// 빌드 후 실행 (package.json "postbuild")
//   1) 유형별 OG 미리보기 페이지
//   2) 블로그 정적 페이지 (검색엔진용 본문 포함)
//   3) sitemap.xml
//
// SPA는 자바스크립트를 실행하지 않는 카카오톡/X/페이스북 크롤러에게
// 항상 같은 메타 태그만 보여준다. 그래서 build/index.html을 복사해
// 페이지별 title / description / og:* 를 넣은 정적 HTML을 만들어 둔다.
// Netlify는 실제 파일이 있으면 SPA 리다이렉트(/* → /index.html)보다
// 파일을 우선 서빙하므로, 사람이 열면 그대로 React 앱이 뜨고 크롤러는
// 페이지별 내용을 읽는다.
//
// 블로그는 검색 노출이 목적이라 메타 태그만으로는 부족해서, 글 본문
// HTML까지 #root 안에 미리 박아 넣는다. React가 마운트될 때 이 내용은
// 교체되므로 화면에는 영향이 없다.
//
// 콘텐츠 출처
//   - src/heroTest/data/heroTypes.js (hook.ko, ogImage)
//   - src/blog/posts.js (BLOG_POSTS)
// 둘 다 import 없는 순수 데이터 파일이라 export만 벗겨서 평가한다.
// ─────────────────────────────────────────────────────────────

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://souling.netlify.app';

// 유형 검사 OG 텍스트는 공유가 대부분 한국어권에서 일어나 한국어 기준으로 생성
const DEFAULT_DESCRIPTION = '27문항으로 알아보는 나의 영웅 유형 — 소울링';
const TEST_TITLE = '영웅 유형 테스트 — 소울링';
const DEFAULT_IMAGE = `${SITE_URL}/favicon.ico`;

// 블로그는 영어가 기준 언어 (검색 노출 우선순위)
const BLOG_TITLE = 'Souling Blog — Habits, Routines, and Small Daily Wins';
const BLOG_DESCRIPTION =
  'Notes on building habits that actually last, from the team behind Souling — the daily habit companion app.';

const buildDir = path.join(__dirname, '..', 'build');

// import 없는 순수 데이터 파일에서 상수 하나를 꺼낸다.
function loadData(relativePath, constName) {
  const file = path.join(__dirname, '..', relativePath);
  const source = fs.readFileSync(file, 'utf8').replace(/^export\s+/gm, '');
  // eslint-disable-next-line no-new-func
  return new Function(`${source}; return ${constName};`)();
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

function replaceNamedMeta(html, name, content) {
  const pattern = new RegExp(`(<meta name="${name}" content=")[^"]*(")`);
  if (!pattern.test(html)) return html;
  return html.replace(pattern, `$1${escapeHtml(content)}$2`);
}

function setCanonical(html, url) {
  const tag = `<link rel="canonical" href="${escapeHtml(url)}"/>`;
  if (/<link rel="canonical"[^>]*>/.test(html)) {
    return html.replace(/<link rel="canonical"[^>]*>/, tag);
  }
  return html.replace('</head>', `${tag}</head>`);
}

function appendJsonLd(html, data) {
  const tag = `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
  return html.replace('</head>', `${tag}</head>`);
}

// 크롤러용 초기 본문. React가 마운트되면 #root 내용은 전부 교체된다.
function setRootContent(html, inner) {
  return html.replace('<div id="root"></div>', `<div id="root">${inner}</div>`);
}

function setHtmlLang(html, lang) {
  return html.replace(/<html lang="[^"]*"/, `<html lang="${lang}"`);
}

// 빌드 시각 기준 한국 날짜 (sitemap lastmod)
function kstToday() {
  return new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Seoul' });
}

function buildPage(template, { title, description, image, url, ogType }) {
  let html = template;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);
  html = replaceNamedMeta(html, 'description', description);
  html = replaceMeta(html, 'og:title', title);
  html = replaceMeta(html, 'og:description', description);
  html = replaceMeta(html, 'og:url', url);
  html = replaceMeta(html, 'og:image', image);
  if (ogType) html = replaceMeta(html, 'og:type', ogType);
  html = setCanonical(html, url);
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

function writePage(routePath, html) {
  const dir = path.join(buildDir, ...routePath.split('/').filter(Boolean));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}

// ─── 유형별 OG 페이지 ────────────────────────────────────────

function generateHeroPages(template) {
  const heroTypes = loadData('src/heroTest/data/heroTypes.js', 'HERO_TYPES');

  // 테스트 시작 페이지 (/hero-test)
  writePage(
    '/hero-test',
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

    writePage(
      `/hero-test/result/${type.id}`,
      buildPage(template, { title, description, image, url })
    );
    console.log(`  ✓ /hero-test/result/${type.id} — "${title}"`);
  });

  console.log(`OG pages generated for ${heroTypes.length} hero types.`);
  return heroTypes;
}

// ─── 블로그 ──────────────────────────────────────────────────

// src/blog/blogUtils.js 의 renderInline 과 같은 문법(**굵게**, [링크](url))을
// HTML 로 옮긴다. 한쪽만 고치면 화면과 크롤러가 달라지니 함께 수정해야 한다.
function inlineToHtml(text) {
  return escapeHtml(text)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, label, href) =>
      href.startsWith('/')
        ? `<a href="${href}">${label}</a>`
        : `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`
    );
}

function blockToHtml(block) {
  switch (block.t) {
    case 'h2':
      return `<h2>${escapeHtml(block.text)}</h2>`;
    case 'h3':
      return `<h3>${escapeHtml(block.text)}</h3>`;
    case 'quote':
      return `<blockquote>${inlineToHtml(block.text)}</blockquote>`;
    case 'ul':
      return `<ul>${block.items.map((item) => `<li>${inlineToHtml(item)}</li>`).join('')}</ul>`;
    case 'ol':
      return `<ol>${block.items.map((item) => `<li>${inlineToHtml(item)}</li>`).join('')}</ol>`;
    case 'img':
      return [
        '<figure>',
        `<img src="${escapeHtml(block.src)}" alt="${escapeHtml(block.alt || '')}"/>`,
        block.caption ? `<figcaption>${escapeHtml(block.caption)}</figcaption>` : '',
        '</figure>',
      ].join('');
    case 'p':
    default:
      return `<p>${inlineToHtml(block.text)}</p>`;
  }
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Node 환경의 ICU 유무와 무관하게 같은 결과를 내려고 직접 포맷한다.
function formatDate(dateStr, lang) {
  const [year, month, day] = dateStr.split('-');
  if (lang === 'ko') return `${year}년 ${Number(month)}월 ${Number(day)}일`;
  return `${MONTHS[Number(month) - 1]} ${Number(day)}, ${year}`;
}

// 프리렌더 화면이 실제 페이지와 비슷해 보이도록 상단 바도 같이 넣는다.
// (내부 링크를 크롤러에게 알려주는 역할도 한다)
const STATIC_HEADER = [
  '<header class="header"><div class="container">',
  '<div class="logo-section"><a class="logo-home-link" href="/"><h1 class="logo">Souling</h1></a></div>',
  '<nav class="nav">',
  '<a class="contact-link nav-tests-link" href="/tests">Tests</a>',
  '<a class="contact-link nav-tests-link" href="/blog">Blog</a>',
  '</nav>',
  '</div></header>',
].join('');

function postBodyHtml(post, content, lang) {
  const tags = content.tags
    ? `<div class="blog-tags">${content.tags
        .map((tag) => `<span class="blog-tag">#${escapeHtml(tag)}</span>`)
        .join('')}</div>`
    : '';

  return [
    '<div class="App">',
    STATIC_HEADER,
    '<main class="blog-page blog-post-page"><div class="container"><article class="blog-post">',
    `<a class="blog-back-link" href="/blog">${lang === 'ko' ? '← 글 목록' : '← All posts'}</a>`,
    '<div class="blog-card-meta">',
    `<time datetime="${post.date}">${formatDate(post.date, lang)}</time>`,
    content.readingTime ? `<span>· ${escapeHtml(content.readingTime)}</span>` : '',
    '</div>',
    `<h1 class="blog-post-title">${escapeHtml(content.title)}</h1>`,
    `<p class="blog-post-lead">${escapeHtml(content.description)}</p>`,
    tags,
    `<div class="blog-post-body">${content.body.map(blockToHtml).join('')}</div>`,
    '</article></div></main>',
    '</div>',
  ].join('');
}

function listBodyHtml(posts) {
  const cards = posts
    .map((post) => {
      const content = post.en || post.ko;
      return [
        `<a class="blog-card" href="/blog/${post.slug}">`,
        `<div class="blog-card-meta"><time datetime="${post.date}">${formatDate(post.date, 'en')}</time></div>`,
        `<h2 class="blog-card-title">${escapeHtml(content.title)}</h2>`,
        `<p class="blog-card-desc">${escapeHtml(content.description)}</p>`,
        '</a>',
      ].join('');
    })
    .join('');

  return [
    '<div class="App">',
    STATIC_HEADER,
    '<main class="blog-page"><div class="container">',
    '<h1 class="blog-heading">Souling Blog</h1>',
    '<p class="blog-subheading">Notes on habits, routines, and growing a little every day.</p>',
    `<div class="blog-list">${cards}</div>`,
    '</div></main>',
    '</div>',
  ].join('');
}

function generateBlogPages(template) {
  const posts = loadData('src/blog/posts.js', 'BLOG_POSTS')
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  // 목록 페이지 (/blog)
  let listHtml = buildPage(template, {
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    image: DEFAULT_IMAGE,
    url: `${SITE_URL}/blog`,
  });
  listHtml = appendJsonLd(listHtml, {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Souling Blog',
    url: `${SITE_URL}/blog`,
    inLanguage: 'en',
    publisher: { '@type': 'Organization', name: 'Souling', url: `${SITE_URL}/` },
    blogPost: posts.map((post) => {
      const content = post.en || post.ko;
      return {
        '@type': 'BlogPosting',
        headline: content.title,
        datePublished: post.date,
        url: `${SITE_URL}/blog/${post.slug}`,
      };
    }),
  });
  listHtml = setRootContent(listHtml, listBodyHtml(posts));
  listHtml = setHtmlLang(listHtml, 'en');
  writePage('/blog', listHtml);

  // 글 페이지 (/blog/:slug) — 크롤러에게는 영어 원고를 보여준다
  posts.forEach((post) => {
    const lang = post.en ? 'en' : 'ko';
    const content = post.en || post.ko;
    const url = `${SITE_URL}/blog/${post.slug}`;
    const image = toAbsoluteUrl(post.cover);

    let html = buildPage(template, {
      title: `${content.title} | Souling Blog`,
      description: content.description,
      image,
      url,
      ogType: 'article',
    });
    html = replaceNamedMeta(
      html,
      'keywords',
      (content.tags || []).join(', ') || 'habits, routines, self-improvement'
    );
    html = appendJsonLd(html, {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: content.title,
      description: content.description,
      inLanguage: lang,
      datePublished: post.date,
      dateModified: post.updated || post.date,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      author: { '@type': 'Organization', name: 'Souling', url: `${SITE_URL}/` },
      publisher: {
        '@type': 'Organization',
        name: 'Souling',
        url: `${SITE_URL}/`,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.ico` },
      },
      ...(post.cover ? { image } : {}),
    });
    html = setRootContent(html, postBodyHtml(post, content, lang));
    html = setHtmlLang(html, lang);

    writePage(`/blog/${post.slug}`, html);
    console.log(`  ✓ /blog/${post.slug} — "${content.title}"`);
  });

  console.log(`Blog pages generated for ${posts.length} posts.`);
  return posts;
}

// ─── sitemap.xml ─────────────────────────────────────────────

function generateSitemap({ heroTypes, posts }) {
  const today = kstToday();

  const urls = [
    { loc: `${SITE_URL}/`, lastmod: today, priority: '1.0', changefreq: 'weekly' },
    { loc: `${SITE_URL}/blog`, lastmod: posts[0] ? posts[0].date : today, priority: '0.9', changefreq: 'weekly' },
    { loc: `${SITE_URL}/tests`, lastmod: today, priority: '0.8', changefreq: 'monthly' },
    { loc: `${SITE_URL}/hero-test`, lastmod: today, priority: '0.8', changefreq: 'monthly' },
    ...posts.map((post) => ({
      loc: `${SITE_URL}/blog/${post.slug}`,
      lastmod: post.updated || post.date,
      priority: '0.8',
      changefreq: 'monthly',
    })),
    ...heroTypes.map((type) => ({
      loc: `${SITE_URL}/hero-test/result/${type.id}`,
      lastmod: today,
      priority: '0.5',
      changefreq: 'yearly',
    })),
  ];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((url) =>
      [
        '  <url>',
        `    <loc>${url.loc}</loc>`,
        `    <lastmod>${url.lastmod}</lastmod>`,
        `    <changefreq>${url.changefreq}</changefreq>`,
        `    <priority>${url.priority}</priority>`,
        '  </url>',
      ].join('\n')
    ),
    '</urlset>',
    '',
  ].join('\n');

  fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), xml);
  console.log(`sitemap.xml generated with ${urls.length} URLs.`);
}

function main() {
  const templatePath = path.join(buildDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('build/index.html not found — run after `npm run build`');
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, 'utf8');

  const heroTypes = generateHeroPages(template);
  const posts = generateBlogPages(template);
  generateSitemap({ heroTypes, posts });
}

main();
