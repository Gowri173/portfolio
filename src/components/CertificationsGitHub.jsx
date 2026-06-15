import React from 'react';
import { Award, GitCommit, GitMerge, Terminal, Flame, BookOpen } from 'lucide-react';

const CertificationsGitHub = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "Issued 2025",
      id: "AWS-CCP-VERIFIED"
    }
  ];

  // Helper to generate mock GitHub contribution blocks in Red/Orange Theme
  const renderCommitGrid = () => {
    const blocks = [];
    const colors = [
      'bg-orange-50/90',
      'bg-accent-fire/20',
      'bg-accent-fire/40',
      'bg-accent-orange/60',
      'bg-accent-fire'
    ];

    // Generate 120 blocks representing commit activity
    for (let i = 0; i < 112; i++) {
      // Pick a random level biased towards lower levels for authenticity
      const rand = Math.random();
      let colorIdx = 0;
      if (rand > 0.88) colorIdx = 4;
      else if (rand > 0.75) colorIdx = 3;
      else if (rand > 0.55) colorIdx = 2;
      else if (rand > 0.3) colorIdx = 1;

      blocks.push(
        <div
          key={i}
          className={`w-2 h-2 rounded-sm ${colors[colorIdx]} hover:scale-125 transition-transform cursor-pointer`}
          title={`Activity Level: ${colorIdx}`}
        />
      );
    }
    return blocks;
  };

  return (
    <section id="credentials" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative">
      {/* Background glow light */}
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-accent-fire/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left: Certifications Column */}
        <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-fire font-sans block mb-2">
              Credentials
            </span>
            <h2 className="text-3xl font-black text-[#4a1c1c] tracking-tight font-sans">
              System <span className="text-gradient-fire">Verifications</span>
            </h2>
            <div className="h-[2px] w-20 bg-gradient-to-r from-accent-fire to-accent-orange mt-4" />
          </div>

          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <div 
                key={idx}
                className="group glass-panel p-5 rounded-2xl border-orange-100 hover:border-accent-fire/30 transition-all flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-orange-50 border border-orange-100 text-[#6b2d2d]/80 group-hover:text-accent-fire group-hover:border-accent-fire/30 transition-colors">
                  <Award className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-[#4a1c1c] font-sans group-hover:text-accent-orange transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-[10px] text-[#6b2d2d]/90 font-sans font-light">
                    {cert.issuer} • <span className="text-[#6b2d2d]/70">{cert.date}</span>
                  </p>
                  <p className="text-[9px] text-[#6b2d2d]/65 font-mono">
                    ID: {cert.id}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: GitHub telemetry dashboard */}
        <div className="lg:col-span-7 glass-panel border-orange-100 p-8 rounded-3xl shadow-xl relative flex flex-col justify-between">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-orange-100 pb-4 mb-6 select-none">
            <span className="text-xs font-bold text-[#4a1c1c] font-mono uppercase tracking-widest flex items-center gap-2">
              <GitCommit className="w-4 h-4 text-accent-fire animate-pulse" />
              Developer Telemetry
            </span>
            <span className="text-[10px] text-[#6b2d2d]/75 font-mono">NODE // @Gowri173</span>
          </div>

          {/* Activity Commits Map */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-[#6b2d2d]/90 font-sans uppercase tracking-wider">
                System Contributions Grid
              </span>
              <span className="text-[9px] text-[#6b2d2d]/70 font-mono">Last 16 Weeks</span>
            </div>
            
            <div className="p-4 rounded-xl bg-orange-50/30 border border-orange-100 flex justify-center">
              <div className="grid grid-flow-col grid-rows-7 gap-1.5 overflow-x-auto">
                {renderCommitGrid()}
              </div>
            </div>
          </div>

          {/* GitHub Metrics Bar */}
          <div className="grid grid-cols-3 gap-6 mt-8 select-none">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-100 text-accent-fire">
                <Flame className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-[#6b2d2d]/80 font-sans block">Current Streak</span>
                <span className="text-sm font-extrabold text-[#4a1c1c] font-sans">42 Days</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-100 text-accent-orange">
                <GitMerge className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-[#6b2d2d]/80 font-sans block">Pull Requests</span>
                <span className="text-sm font-extrabold text-[#4a1c1c] font-sans">148 Merge</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-100 text-accent-gold">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-[#6b2d2d]/80 font-sans block">Repositories</span>
                <span className="text-sm font-extrabold text-[#4a1c1c] font-sans">26 Active</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CertificationsGitHub;
