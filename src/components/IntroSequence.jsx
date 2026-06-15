import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const IntroSequence = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        // Fade out the intro overlay container
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1.2,
          ease: 'power3.inOut',
          onComplete: () => {
            if (onComplete) onComplete();
          },
        });
      },
    });

    // Animate each text block one after another
    textRefs.current.forEach((el, index) => {
      if (!el) return;

      const isLast = index === textRefs.current.length - 1;

      // Setup initial styles
      gsap.set(el, { opacity: 0, y: 30, scale: 0.95 });

      timeline
        .to(el, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
        })
        .to(el, {
          opacity: isLast ? 1 : 0, // Keep last one ("GOWRI RAM") visible for transition
          y: isLast ? 0 : -35,
          scale: isLast ? 1.05 : 1,
          duration: isLast ? 1.4 : 0.6,
          ease: isLast ? 'power3.inOut' : 'power3.in',
          delay: isLast ? 0.8 : 0.6, // Keep it visible for a bit
        });
    });

    return () => {
      timeline.kill();
    };
  }, [onComplete]);

  const phrases = [
    "Building Intelligence",
    "Designing AI Systems",
    "Creating Digital Products",
    "Engineering The Future",
    "GOWRI RAM"
  ];

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 select-none"
    >
      {/* Subtle background glow during intro */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-accent-fire/15 blur-[120px] mix-blend-screen animate-pulse" />

      <div className="relative text-center px-4 w-full">
        {phrases.map((phrase, idx) => {
          const isLast = idx === phrases.length - 1;
          return (
            <h1
              key={idx}
              ref={(el) => (textRefs.current[idx] = el)}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center px-4 text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-[0.15em] uppercase font-sans ${isLast
                  ? 'text-gradient-fire drop-shadow-[0_0_35px_rgba(255,69,0,0.3)]'
                  : 'text-slate-100'
                }`}
              style={{ pointerEvents: 'none' }}
            >
              {phrase}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default IntroSequence;
