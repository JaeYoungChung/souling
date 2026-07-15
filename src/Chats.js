import React, { useState, useEffect } from 'react';

const MESSAGES = {
  en: [
    "Ready for the next grow-up?",
    "One routine at a time. That’s how we grow.",
    "Little progress still counts.",
    "Let’s make today a little brighter.",
    "One habit at a time!",
  ],
  ko: [
    "성장 할 준비 됐어?",
    "난 언제든 여기 있어.",
    "작은 행동 하나부터!",
    "괜찮아, 다시 시작하면 돼.",
    "하나씩 시작해볼까?",
  ],
};

export default function Chats({ lang = 'en' }) {
  const messages = MESSAGES[lang] || MESSAGES.en;
  const [messageIndex, setMessageIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setMessageIndex(0);
  }, [lang]);

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setMessageIndex(prev => (prev + 1) % messages.length);
        setVisible(true);
      }, 200);
    }, 4000);
    return () => clearInterval(cycle);
  }, [messages.length]);

  return (
    <div
      className="chat-bubble"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0.85)',
        transition: 'opacity 0.25s ease, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      <p style={{
        margin: 0,
        fontWeight: lang === 'ko' ? 400 : 600,
        lineHeight: lang === 'ko' ? 'normal' : 1.3,
        color: '#333',
        minHeight: '20px',
        textAlign: 'center',
      }}>
        {messages[messageIndex]}
      </p>
      <div style={{
        position: 'absolute',
        bottom: '-8px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 0,
        height: 0,
        borderLeft: '8px solid transparent',
        borderRight: '8px solid transparent',
        borderTop: '8px solid white',
      }} />
    </div>
  );
}