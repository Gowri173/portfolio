import React, { useEffect, useRef } from 'react';

const BackgroundSystem = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.22; // slow speed for cinematic feel
        this.vy = (Math.random() - 0.5) * 0.22;
        this.radius = Math.random() * 2 + 1;
        this.baseAlpha = Math.random() * 0.45 + 0.15;
        this.alpha = this.baseAlpha;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce walls
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Smoothly follow mouse slightly
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 150) {
          const force = (150 - dist) / 1500;
          this.x += (dx / dist) * force;
          this.y += (dy / dist) * force;
          this.alpha = Math.min(1, this.baseAlpha + 0.3);
        } else {
          this.alpha = this.baseAlpha;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 107, 53, ${this.alpha})`; // Orange/Fire accent
        ctx.fill();
      }
    }

    // Initialize particles
    const particleCount = Math.min(60, Math.floor((width * height) / 20000));
    const particles = Array.from({ length: particleCount }, () => new Particle());

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Main animation loop
    const animate = () => {
      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid overlay
      ctx.strokeStyle = 'rgba(255, 69, 0, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Draw lines between nearby particles (Neural network lines)
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.15;
            ctx.strokeStyle = `rgba(255, 69, 0, ${alpha})`; // Fire/Orange-Red accent
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Cursor glow node
      ctx.beginPath();
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        180
      );
      gradient.addColorStop(0, 'rgba(255, 69, 0, 0.04)');
      gradient.addColorStop(1, 'rgba(255, 69, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.arc(mouseRef.current.x, mouseRef.current.y, 180, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Dynamic background gradient overlays for global sections */}
      <div className="fixed inset-0 bg-white/60 -z-40 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/95 -z-40 pointer-events-none" />
      
      {/* Dynamic animated orange/red glow lights */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-fire/5 rounded-full blur-[120px] -z-30 pointer-events-none animate-pulse-slow" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-accent-orange/5 rounded-full blur-[150px] -z-30 pointer-events-none animate-pulse-slow" />

      {/* Interactive particle canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-20 pointer-events-none"
      />
    </>
  );
};

export default BackgroundSystem;
