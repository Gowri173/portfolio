import React from 'react';
import { GraduationCap, Award, Cloud, Brain, MapPin, Mail } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <GraduationCap className="w-4 h-4 text-accent-fire" />,
      value: "8.26",
      label: "B.Tech CGPA"
    },
    {
      icon: <Award className="w-4 h-4 text-accent-fire" />,
      value: "95.29%",
      label: "Diploma Score"
    },
    {
      icon: <Cloud className="w-4 h-4 text-accent-orange" />,
      value: "Certified",
      label: "AWS"
    },
    {
      icon: <Brain className="w-4 h-4 text-accent-orange" />,
      value: "Builder",
      label: "AI Systems"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative animate-fadeIn">
      {/* Background glow spot */}
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-accent-fire/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Header (Left-aligned as in the mockup) */}
      <div className="mb-12 text-left select-none">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-fire font-sans block mb-3">
          About
        </span>

      </div>

      {/* 2-Column Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

        {/* Left Column: Biography & Quote */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-4xl md:text-6xl font-black text-[#4a1c1c] tracking-tight font-sans leading-[1.08]">
            The Story Behind <br />
            <span className="text-gradient-fire">The Engineer</span>
          </h2>
          <p className="text-sm md:text-base text-[#6b2d2d] font-light leading-relaxed font-sans">
            I'm <strong className="font-semibold text-[#4a1c1c]">Masabattuni Gowriram</strong> — a Software Engineer from{' '}
            <span className="inline-flex items-center gap-1 text-accent-fire font-semibold">
              <MapPin className="w-3.5 h-3.5 inline shrink-0" />
              Vijayawada, Andhra Pradesh
            </span>
            , currently pursuing B.Tech in Information Technology.
          </p>

          <p className="text-sm md:text-base text-[#6b2d2d] font-light leading-relaxed font-sans">
            My mission is building <strong className="font-semibold text-accent-fire">Full-Stack AI Products</strong> — intelligent platforms, automation systems, and data-driven applications that solve real challenges and create lasting value.
          </p>

          <p className="text-sm md:text-base text-[#6b2d2d] font-light leading-relaxed font-sans">
            I believe the best software is invisible — it just works, intelligently. From designing RAG-powered medical assistants to engineering behavioral authentication systems with ML, I bring a product mindset to every engineering challenge.
          </p>

          {/* Blockquote with left-accent border */}
          <div className="border-l-4 border-accent-fire pl-5 py-2 my-8">
            <p className="text-sm md:text-base text-[#6b2d2d] font-normal italic font-sans leading-relaxed">
              "My portfolio speaks louder than my resume. Every system I build is a statement about how I think about technology."
            </p>
          </div>
        </div>

        {/* Right Column: Statistics Grid & Metadata Card */}
        <div className="lg:col-span-5 space-y-6">

          {/* 4 Stats Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel border-orange-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-accent-fire/20 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Icon Container */}
                <div className="w-8 h-8 rounded-full bg-orange-50/50 border border-orange-100/60 flex items-center justify-center mb-4 shrink-0">
                  {stat.icon}
                </div>

                {/* Stat details */}
                <div className="space-y-0.5">
                  <div className="text-xl md:text-2xl font-black text-accent-fire font-sans tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[9px] font-bold text-[#6b2d2d]/60 uppercase tracking-widest font-sans">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Location & Email Details Card */}
          <div className="glass-panel border-orange-100 p-6 rounded-2xl shadow-sm space-y-4 font-sans select-none">
            {/* Location Section */}
            <div className="space-y-1">
              <span className="block text-[8px] font-extrabold text-[#6b2d2d]/50 uppercase tracking-widest font-mono">
                Location
              </span>
              <span className="block text-xs md:text-sm font-bold text-[#4a1c1c]">
                Vijayawada, Andhra Pradesh
              </span>
            </div>

            {/* Email Section */}
            <div className="space-y-1">
              <span className="block text-[8px] font-extrabold text-[#6b2d2d]/50 uppercase tracking-widest font-mono">
                Email
              </span>
              <a
                href="mailto:gowrir559@gmail.com"
                className="block text-xs md:text-sm font-bold text-accent-fire hover:text-accent-orange transition-colors"
              >
                gowrir559@gmail.com
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
