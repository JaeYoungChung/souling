import React, { useEffect, useRef } from 'react';

console.log('Stars loaded');

export default function Stars() {
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log('Canvas ref:', canvasRef.current);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Static stars
    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.3,
      opacity: Math.random(),
      speed: Math.random() * 0.02 + 0.005,
    }));

    // Shooting stars
    const shootingStars = [];
    const spawnShootingStar = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.5,
      length: Math.random() * 120 + 60,
      speed: Math.random() * 6 + 4,
      opacity: 1,
      angle: Math.PI / 5,
    });

    let shootingStarTimer = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw glowing stars
      stars.forEach(star => {
        star.opacity += star.speed;
        if (star.opacity > 1 || star.opacity < 0) star.speed *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
      });

      // Spawn shooting star occasionally
      shootingStarTimer++;
      if (shootingStarTimer > 90) {
        shootingStars.push(spawnShootingStar());
        shootingStarTimer = 0;
      }

      // Draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - Math.cos(s.angle) * s.length, s.y - Math.sin(s.angle) * s.length);
        ctx.strokeStyle = `rgba(255, 255, 255, ${s.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'white';
        ctx.stroke();

        s.x += s.speed;
        s.y += s.speed * 0.5;
        s.opacity -= 0.02;

        if (s.opacity <= 0) shootingStars.splice(i, 1);
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2,
      }}
    />
  );
}