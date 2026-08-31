import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BlogHeader from './BlogHeader';
import {
  SITE_URL,
  contentFor,
  detectLang,
  findPost,
  formatDate,
  renderInline,
  setHeadTags,
  sortedPosts,
} from './blogUtils';
import './blog.css';

// ─── 블로그 글 (/blog/:slug) ─────────────────────────────────

const TEXT = {
  en: {
    backToList: '← All posts',
    notFoundTitle: 'Post not found',
    notFoundDesc: 'This post may have been moved or renamed.',
    ctaTitle: 'Turn one small routine into a habit',
    ctaDesc: 'Grow your Souling as you keep your daily routines.',
    ctaButton: 'Meet Souling',
    moreTitle: 'More posts',
  },
  ko: {
    backToList: '← 글 목록',
    notFoundTitle: '글을 찾을 수 없어요',
    notFoundDesc: '주소가 바뀌었거나 삭제된 글일 수 있어요.',
    ctaTitle: '작은 루틴 하나를 습관으로',
    ctaDesc: '매일 루틴을 완수하고 나만의 소울링을 키워봐요!',
    ctaButton: '소울링 보러 가기',
    moreTitle: '다른 글',
  },
};

function Block({ block }) {
  switch (block.t) {
    case 'h2':
      return <h2>{block.text}</h2>;
    case 'h3':
      return <h3>{block.text}</h3>;
    case 'quote':
      return <blockquote>{renderInline(block.text)}</blockquote>;
    case 'ul':
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol>
          {block.items.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ol>
      );
    case 'img':
      return (
        <figure>
          <img src={block.src} alt={block.alt || ''} loading="lazy" />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
    case 'p':
    default:
      return <p>{renderInline(block.text)}</p>;
  }
}

function BlogPost() {
  const { slug } = useParams();
  const [lang, setLang] = useState(detectLang);
  const t = TEXT[lang];
  const post = findPost(slug);
  const content = post ? contentFor(post, lang) : null;

  useEffect(() => {
    document.documentElement.lang = lang;
    if (content) {
      setHeadTags({
        title: `${content.title} | ${lang === 'ko' ? '소울링 블로그' : 'Souling Blog'}`,
        description: content.description,
        url: `${SITE_URL}/blog/${slug}`,
      });
    } else {
      document.title = t.notFoundTitle;
    }
    window.scrollTo(0, 0);
    try {
      localStorage.setItem('souling_lang', lang);
    } catch (e) {
      // ignore
    }
  }, [lang, slug, content, t.notFoundTitle]);

  const toggleLang = () => setLang((prev) => (prev === 'ko' ? 'en' : 'ko'));

  if (!post) {
    return (
      <>
        <BlogHeader lang={lang} onToggleLang={toggleLang} />
        <main className="blog-page">
          <div className="container">
            <h1 className="blog-heading">{t.notFoundTitle}</h1>
            <p className="blog-subheading">{t.notFoundDesc}</p>
            <Link to="/blog" className="blog-back-link">{t.backToList}</Link>
          </div>
        </main>
      </>
    );
  }

  const others = sortedPosts().filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <BlogHeader lang={lang} onToggleLang={toggleLang} />

      <main className="blog-page blog-post-page">
        <div className="container">
          <article className="blog-post">
            <Link to="/blog" className="blog-back-link">{t.backToList}</Link>

            <div className="blog-card-meta">
              <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
              {content.readingTime && <span>· {content.readingTime}</span>}
            </div>

            <h1 className="blog-post-title">{content.title}</h1>
            <p className="blog-post-lead">{content.description}</p>

            {content.tags && (
              <div className="blog-tags">
                {content.tags.map((tag) => (
                  <span key={tag} className="blog-tag">#{tag}</span>
                ))}
              </div>
            )}

            <div className="blog-post-body">
              {content.body.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>

            <aside className="blog-post-cta">
              <div>
                <h2>{t.ctaTitle}</h2>
                <p>{t.ctaDesc}</p>
              </div>
              <Link to="/" className="blog-card-cta">{t.ctaButton} →</Link>
            </aside>

            {others.length > 0 && (
              <nav className="blog-post-more" aria-label={t.moreTitle}>
                <h2>{t.moreTitle}</h2>
                <ul>
                  {others.map((other) => (
                    <li key={other.slug}>
                      <Link to={`/blog/${other.slug}`}>{contentFor(other, lang).title}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </article>
        </div>
      </main>
    </>
  );
}

export default BlogPost;
