import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Code, Sparkles } from 'lucide-react';
import heroVideo from '../assets/intro-video.mp4';

const Hero = () => {
  const contentRef = useRef(null);
  const glowRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Entrance animations for typography
    const tl = gsap.timeline();
    tl.fromTo(
      '.hero-reveal',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.5 }
    );

    // Mouse Parallax effect
    const handleMouseMove = (e) => {
      if (!contentRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Subtle parallax displacement
      const moveX = (clientX - innerWidth / 2) * 0.012;
      const moveY = (clientY - innerHeight / 2) * 0.012;

      gsap.to(contentRef.current, {
        x: moveX,
        y: moveY,
        duration: 0.6,
        ease: 'power2.out',
      });

      // Move the ambient glow with the mouse slightly
      if (glowRef.current) {
        const glowX = (clientX - innerWidth / 2) * 0.03;
        const glowY = (clientY - innerHeight / 2) * 0.03;
        gsap.to(glowRef.current, {
          x: glowX,
          y: glowY,
          duration: 0.8,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.autoPlay = true;


    // Explicitly disable looping
    video.loop = false;

    // Set muted to false to try playing audio
    video.muted = false;

    const playAudio = () => {
      if (video) {
        video.muted = false;
        video.autoPlay = true;
        video.play().catch((err) => {
          console.log("Autoplay unmuted blocked by browser, waiting for user interaction:", err);
        });
      }
    };

    // Try playing immediately
    playAudio();

    // Interaction triggers to start/unmute audio as soon as user interacts
    const enableAudio = () => {
      if (video) {
        video.muted = false;
        video.play().catch(() => { });
      }
      // Remove listeners once activated
      window.removeEventListener('click', enableAudio);
      window.removeEventListener('touchstart', enableAudio);
      window.removeEventListener('scroll', enableAudio);
    };

    window.addEventListener('click', enableAudio);
    window.addEventListener('touchstart', enableAudio);
    window.addEventListener('scroll', enableAudio);

    return () => {
      window.removeEventListener('click', enableAudio);
      window.removeEventListener('touchstart', enableAudio);
      window.removeEventListener('scroll', enableAudio);
    };
  }, []);

  const handleExploreProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* REQUIRED STRUCTURE Layer 1: Fullscreen background video */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        loop={false}
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* REQUIRED STRUCTURE Layer 2: Dark cinematic overlay */}
      <div className="absolute inset-0 bg-transparent z-10" />

      {/* REQUIRED STRUCTURE Layer 3: Interactive particles and glows */}
      <div
        ref={glowRef}
        className="absolute bottom-20 left-10 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-gradient-to-tr from-accent-fire/10 to-accent-orange/5 blur-[120px] pointer-events-none z-15"
      />

      {/* REQUIRED STRUCTURE Layer 4 & 5: Content */}
      <div
        ref={contentRef}
        className="relative z-20 h-full flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-20 md:pb-28 select-none"
      >
        <div className="max-w-4xl text-left">
          {/* Eyebrow badge */}
          <div className="hero-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-accent-fire/30 backdrop-blur-sm mb-6 shadow-[0_0_15px_rgba(255,69,0,0.08)]">
            <Sparkles className="w-3.5 h-3.5 text-accent-fire animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-accent-orange font-sans">
              Full Stack • AI • Cloud
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-reveal text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#4a1c1c] mb-6 leading-[1.05] font-sans">
            Building Intelligent <br className="hidden md:inline" />
            <span className="text-gradient-fire drop-shadow-[0_0_30px_rgba(255,69,0,0.15)]">
              Digital Products
            </span> <br />
            <span className="text-xl md:text-3xl lg:text-4xl font-normal tracking-wide text-[#6b2d2d] block mt-2">
              Powered by AI & Modern Engineering
            </span>
          </h1>

          {/* Description */}
          <p className="hero-reveal text-sm md:text-base lg:text-lg text-[#6b2d2d]/90 font-light max-w-2xl mb-8 leading-relaxed font-sans">
            I design and develop AI-powered systems, intelligent automation platforms, cloud-native applications, and modern web experiences that solve real-world challenges.
          </p>

          {/* Quick Metrics */}
          <div className="hero-reveal flex items-center gap-6 mb-8 border-t border-orange-100/10 pt-6 max-w-xs select-none">
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black text-[#4a1c1c] font-sans">AWS</span>
              <span className="text-[9px] font-bold text-[#6b2d2d]/80 uppercase tracking-widest mt-0.5">Certified</span>
            </div>
            <div className="h-8 w-[1px] bg-orange-100/30" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black text-[#4a1c1c] font-sans">2+</span>
              <span className="text-[9px] font-bold text-[#6b2d2d]/80 uppercase tracking-widest mt-0.5">Internships</span>
            </div>
            <div className="h-8 w-[1px] bg-orange-100/30" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black text-[#4a1c1c] font-sans">8.26</span>
              <span className="text-[9px] font-bold text-[#6b2d2d]/80 uppercase tracking-widest mt-0.5">CGPA</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-reveal flex flex-wrap items-center gap-4">
            <button
              onClick={handleExploreProjects}
              className="btn-primary-fire group px-7 py-3.5 text-sm font-semibold tracking-wider rounded-full hover:scale-[1.03] flex items-center gap-2"
            >
              Explore Projects
              <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <a
              href="/assest/Gowri_Ram.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-fire group px-7 py-3.5 text-sm font-semibold tracking-wider text-[#4a1c1c] hover:border-accent-orange/50 rounded-full hover:scale-[1.03] transition-all flex items-center gap-2 backdrop-blur-sm"
            >
              View Resume
              <Code className="w-4 h-4 text-[#6b2d2d] group-hover:text-accent-orange transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        onClick={handleExploreProjects}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 opacity-65 hover:opacity-100 transition-opacity cursor-pointer select-none"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#6b2d2d] font-mono">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-orange-200 flex justify-center p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-fire animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
