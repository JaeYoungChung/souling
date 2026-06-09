import React, { useState, useEffect } from 'react';

const messages = [
  "Habits are muscles too!",
  "Every small step counts!",
  "You've got this!",
  "Let's grow together!",
  "One habit at a time!",
];

export default function Chats() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setMessageIndex(prev => (prev + 1) % messages.length);
        setVisible(true);
      }, 200);
    }, 4000);
    return () => clearInterval(cycle);
  }, []);

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
        fontWeight: 600,
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