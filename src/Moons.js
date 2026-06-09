import React, { useState, useEffect } from 'react';

export default function Moons() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}>

        {/* Large moon - moves up with scroll */}
        <div style={{
          position: 'absolute',
          width: '1200px',
          height: '1200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 35%, #ffffff, #3a7bd5)',
          bottom: `-${840 + scrollY * 0.5}px`,
          left: '28%',
          boxShadow: '0 0 80px rgba(100, 180, 255, 0.3)',
          opacity: 0.25,
        }} />

        {/* Medium moon - floats and moves up with scroll */}
        <div style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 35%, #d0f0ff, #5aa0e0)',
          top: `calc(20% - ${scrollY * 0.4}px)`,
          left: '3%',
          boxShadow: '0 0 25px rgba(100, 180, 255, 0.2)',
          opacity: 0.2,
          animation: 'float1 5s ease-in-out infinite',
        }} />

        {/* Small moon - floats and moves up with scroll */}
        <div style={{
          position: 'absolute',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 35%, #c0e8ff, #4a90d9)',
          top: `calc(8% - ${scrollY * 0.3}px)`,
          right: '2%',
          boxShadow: '0 0 40px rgba(100, 180, 255, 0.25)',
          opacity: 0.1,
          animation: 'float2 7s ease-in-out infinite',
        }} />

      </div>
    </>
  );
}