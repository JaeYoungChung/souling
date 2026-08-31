import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogHeader from './BlogHeader';
import {
  SITE_URL,
  contentFor,
  detectLang,
  formatDate,
  setHeadTags,
  sortedPosts,
} from './blogUtils';
import './blog.css';

// ─── 블로그 목록 (/blog) ─────────────────────────────────────

const TEXT = {
  en: {
    pageTitle: 'Blog | Souling',
    description:
      'Notes on building habits that last — from the team behind Souling, the daily habit companion app.',
    heading: 'Souling Blog',
    subheading: 'Notes on habits, routines, and growing a little every day.',
    emptyTitle: 'The first post is on its way',
    emptyDesc: 'We are writing it right now. Come back soon!',
    readMore: 'Read',
  },
  ko: {
    pageTitle: '블로그 | 소울링',
    description:
      '습관을 오래 유지하는 방법에 대한 기록 — 데일리 습관 앱 소울링 팀이 씁니다.',
    heading: '소울링 블로그',
    subheading: '습관과 루틴, 매일 조금씩 자라는 이야기.',
    emptyTitle: '첫 글을 준비하고 있어요',
    emptyDesc: '지금 쓰는 중이에요. 곧 다시 들러주세요!',
    readMore: '읽어보기',
  },
};

function BlogPage() {
  const [lang, setLang] = useState(detectLang);
  const t = TEXT[lang];
  const posts = sortedPosts();

  useEffect(() => {
    document.documentElement.lang = lang;
    setHeadTags({
      title: t.pageTitle,
      description: t.description,
      url: `${SITE_URL}/blog`,
    });
    window.scrollTo(0, 0);
    try {
      localStorage.setItem('souling_lang', lang);
    } catch (e) {
      // ignore
    }
  }, [lang, t.pageTitle, t.description]);

  const toggleLang = () => setLang((prev) => (prev === 'ko' ? 'en' : 'ko'));

  return (
    <>
      <BlogHeader lang={lang} onToggleLang={toggleLang} />

      <main className="blog-page">
        <div className="container">
          <h1 className="blog-heading">{t.heading}</h1>
          <p className="blog-subheading">{t.subheading}</p>

          {posts.length === 0 ? (
            <div className="blog-card blog-card--soon">
              <h2 className="blog-card-title">{t.emptyTitle}</h2>
              <p className="blog-card-desc">{t.emptyDesc}</p>
            </div>
          ) : (
            <div className="blog-list">
              {posts.map((post) => {
                const c = contentFor(post, lang);
                return (
                  <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card">
                    <div className="blog-card-meta">
                      <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
                      {c.readingTime && <span>· {c.readingTime}</span>}
                    </div>
                    <h2 className="blog-card-title">{c.title}</h2>
                    <p className="blog-card-desc">{c.description}</p>
                    <div className="blog-card-bottom">
                      {c.tags && (
                        <span className="blog-tags">
                          {c.tags.map((tag) => (
                            <span key={tag} className="blog-tag">#{tag}</span>
                          ))}
                        </span>
                      )}
                      <span className="blog-card-cta">{t.readMore} →</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default BlogPage;
