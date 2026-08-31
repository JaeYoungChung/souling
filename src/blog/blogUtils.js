import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from './posts';

export const SITE_URL = 'https://souling.netlify.app';

export function detectLang() {
  try {
    const saved = localStorage.getItem('souling_lang');
    if (saved === 'en' || saved === 'ko') return saved;
  } catch (e) {
    // localStorage 불가 — 브라우저 언어로
  }
  const browserLang =
    navigator.language || (navigator.languages && navigator.languages[0]) || 'en';
  return browserLang.toLowerCase().startsWith('ko') ? 'ko' : 'en';
}

// 최신 글이 위로. posts.js 의 순서와 무관하게 날짜로 정렬한다.
export function sortedPosts() {
  return [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function findPost(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug) || null;
}

// 요청한 언어의 원고가 없으면 영어(기준 언어)로 대체한다.
export function contentFor(post, lang) {
  const content = post[lang] || post.en || post.ko;
  const contentLang = post[lang] ? lang : post.en ? 'en' : 'ko';
  return { ...content, contentLang };
}

export function formatDate(dateStr, lang) {
  const date = new Date(`${dateStr}T00:00:00`);
  if (Number.isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString(lang === 'ko' ? 'ko-KR' : 'en-US', {
    year: 'numeric',
    month: lang === 'ko' ? 'long' : 'short',
    day: 'numeric',
  });
}

// **굵게** 와 [링크](url) 만 지원한다. 같은 규칙을 scripts/generate-og-pages.js
// 에서도 HTML 로 변환하므로, 문법을 늘릴 때는 두 곳을 함께 고쳐야 한다.
const INLINE_PATTERN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

export function renderInline(text) {
  return String(text)
    .split(INLINE_PATTERN)
    .filter((part) => part !== '')
    .map((part, i) => {
      const bold = part.match(/^\*\*([^*]+)\*\*$/);
      if (bold) return <strong key={i}>{bold[1]}</strong>;

      const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) {
        const [, label, href] = link;
        if (href.startsWith('/')) {
          return (
            <Link key={i} to={href}>
              {label}
            </Link>
          );
        }
        return (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        );
      }

      return part;
    });
}

// 브라우저 내 이동(SPA)에서도 검색·공유용 태그가 현재 글을 가리키게 유지한다.
// 크롤러용 초기 HTML 은 빌드 시 scripts/generate-og-pages.js 가 만든다.
export function setHeadTags({ title, description, url }) {
  if (title) document.title = title;

  const setAttr = (selector, create, content) => {
    let el = document.head.querySelector(selector);
    if (!el) {
      el = create();
      document.head.appendChild(el);
    }
    el.setAttribute(el.tagName === 'LINK' ? 'href' : 'content', content);
  };

  if (description) {
    setAttr(
      'meta[name="description"]',
      () => Object.assign(document.createElement('meta'), { name: 'description' }),
      description
    );
    setAttr(
      'meta[property="og:description"]',
      () => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:description');
        return meta;
      },
      description
    );
  }

  if (title) {
    setAttr(
      'meta[property="og:title"]',
      () => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:title');
        return meta;
      },
      title
    );
  }

  if (url) {
    setAttr(
      'meta[property="og:url"]',
      () => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:url');
        return meta;
      },
      url
    );
    setAttr(
      'link[rel="canonical"]',
      () => Object.assign(document.createElement('link'), { rel: 'canonical' }),
      url
    );
  }
}
