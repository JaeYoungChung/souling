// ─────────────────────────────────────────────────────────────
// 언어 처리 — 홈페이지와 같은 키(souling_lang)를 공유한다.
// 기본 한국어, 브라우저 언어가 영어권이면 영어로 시작.
// 언어를 바꿔도 진행 중인 답변(souling_hero_test_v1)은 건드리지 않는다.
// ─────────────────────────────────────────────────────────────

import { useState, useCallback } from 'react';

export function detectLang() {
  try {
    const saved = localStorage.getItem('souling_lang');
    if (saved === 'en' || saved === 'ko') return saved;
  } catch (e) {
    // localStorage 불가 시 브라우저 언어로
  }
  const browserLang =
    navigator.language || (navigator.languages && navigator.languages[0]) || 'ko';
  return browserLang.toLowerCase().startsWith('ko') ? 'ko' : 'en';
}

export function useLang() {
  const [lang, setLang] = useState(detectLang);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'ko' ? 'en' : 'ko';
      try {
        localStorage.setItem('souling_lang', next);
      } catch (e) {
        // ignore
      }
      return next;
    });
  }, []);

  return [lang, toggleLang];
}

// { ko, en } 필드에서 현재 언어 텍스트를 꺼낸다. 비어 있으면 한국어로 폴백.
export function txt(field, lang) {
  if (!field) return '';
  const value = field[lang];
  if (typeof value === 'string' && value.trim() !== '') return value;
  return field.ko || '';
}

// 문단 배열 버전 ({ ko: [], en: [] })
export function txtList(field, lang) {
  if (!field) return [];
  const value = field[lang];
  if (Array.isArray(value) && value.length > 0) return value;
  return Array.isArray(field.ko) ? field.ko : [];
}
