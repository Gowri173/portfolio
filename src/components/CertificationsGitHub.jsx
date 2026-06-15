import React from 'react';
import { Award, GitCommit, GitMerge, Terminal, Flame, BookOpen, ExternalLink, Sparkles, CheckCircle, TrendingUp } from 'lucide-react';

const CertificationsGitHub = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      desc: "Validates foundational cloud knowledge including AWS services, architecture, security, and pricing.",
      id: "AWS-CCP-VERIFIED",
      credly: "https://www.credly.com",
      featured: true
    },
    {
      title: "Summer Analytics 2025",
      issuer: "IIT Guwahati",
      desc: "Top 25 Percentile in comprehensive data analytics, regression models, and ML pipelines.",
      id: "IITG-SA-2025"
    },
    {
      title: "AWS Academy Data Engineering",
      issuer: "AWS Academy · AICTE",
      desc: "40 hours training focused on distributed data pipelines, storage, and processing stacks.",
      id: "AWS-ACADEMY-DE"
    },
    {
      title: "CCNA: Switching, Routing & Wireless",
      issuer: "Cisco Networking Academy",
      desc: "Routing protocols, VLANs, switching architectures, and wireless infrastructure.",
      id: "CISCO-CCNA-SRW"
    },
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      desc: "IP addressing, subnetting, network configurations, and basic routing mechanics.",
      id: "CISCO-CCNA-ITN"
    },
    {
      title: "MongoDB Developer's Toolkit",
      issuer: "GeeksforGeeks",
      desc: "NoSQL document structures, query indexing, aggregation frameworks, and CRUD APIs.",
      id: "GFG-MONGODB"
    },
    {
      title: "Generative AI Mastery Workshop",
      issuer: "OpenAI Academy · NxtWave",
      desc: "Prompt engineering frameworks, model APIs, vector search, and chatbot orchestration.",
      id: "NXTW-GENAI"
    },
    {
      title: "C++ Advanced",
      issuer: "Cisco Networking Academy",
      desc: "Data structures, pointer arithmetic, memory management, and OOP paradigms.",
      id: "CISCO-CPP-ADV"
    },
    {
      title: "Joy of Computing Using Python",
      issuer: "NPTEL",
      desc: "Algorithmic thinking, Python data structures, libraries, and automation scripts.",
      id: "NPTEL-PYTHON"
    },
    {
      title: "Privacy & Security in Online Social Media",
      issuer: "NPTEL",
      desc: "Social network privacy settings, threat intelligence, data leaks, and cryptography.",
      id: "NPTEL-SECURITY"
    },
    {
      title: "Foundations of R Software",
      issuer: "NPTEL",
      desc: "Statistical computing, dataset manipulation, data cleaning, and graphing in R.",
      id: "NPTEL-R-SOFTWARE"
    }
  ];

  return (
    <section id="credentials" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative">
      {/* Background glow light */}
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-accent-fire/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left: Certifications Column */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-fire font-sans block mb-2">
              Credentials
            </span>
            <h2 className="text-3xl font-black text-[#4a1c1c] tracking-tight font-sans">
              Certifications & <span className="text-gradient-fire">Achievements</span>
            </h2>
            <div className="h-[2px] w-20 bg-gradient-to-r from-accent-fire to-accent-orange mt-4" />
          </div>

          {/* Expandable Certifications List Container */}
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-3 scrollbar-thin">
            {certifications.map((cert, idx) => (
              <div 
                key={idx}
                className={`group glass-panel p-4 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                  cert.featured 
                    ? 'border-accent-fire/40 bg-orange-50/10 shadow-[0_0_15px_rgba(255,69,0,0.04)]' 
                    : 'border-orange-100 hover:border-accent-fire/30'
                }`}
              >
                <div className={`p-2.5 rounded-xl border transition-colors shrink-0 ${
                  cert.featured 
                    ? 'bg-orange-50 border-accent-fire/40 text-accent-fire' 
                    : 'bg-orange-50/40 border-orange-100 text-[#6b2d2d]/60 group-hover:text-accent-fire'
                }`}>
                  <Award className="w-4.5 h-4.5" />
                </div>
                
                <div className="space-y-1 w-full">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-xs md:text-sm font-bold text-[#4a1c1c] font-sans group-hover:text-accent-orange transition-colors">
                      {cert.featured && <span className="text-accent-fire mr-1 font-sans">★</span>}
                      {cert.title}
                    </h4>
                    {cert.credly && (
                      <a 
                        href={cert.credly}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[9px] font-bold text-accent-fire hover:text-accent-orange font-mono flex items-center gap-0.5 shrink-0"
                      >
                        Credly
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                  <span className="text-[10px] font-semibold text-[#6b2d2d] font-mono block">
                    {cert.issuer}
                  </span>
                  <p className="text-[10px] text-[#6b2d2d]/80 font-light leading-relaxed font-sans">
                    {cert.desc}
                  </p>
                  <div className="flex justify-between items-center text-[8px] font-mono text-[#6b2d2d]/60 border-t border-orange-50/50 pt-1 mt-1">
                    <span>ID // {cert.id}</span>
                    <span>VERIFIED</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Real GitHub telemetry dashboard */}
        <div className="lg:col-span-6 glass-panel border-orange-100 p-6 md:p-8 rounded-3xl shadow-xl relative flex flex-col justify-between gap-6">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-orange-100 pb-4 mb-2 select-none">
            <span className="text-xs font-bold text-[#4a1c1c] font-mono uppercase tracking-widest flex items-center gap-2">
              <GitCommit className="w-4 h-4 text-accent-fire animate-pulse" />
              Code Universe
            </span>
            <span className="text-[10px] text-[#6b2d2d]/75 font-mono">NODE // @gowriram</span>
          </div>

          {/* Part 1: Core GitHub Stats & Grade Dial */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-orange-50/30 border border-orange-100/60 p-5 rounded-2xl">
            <div className="md:col-span-8 space-y-3">
              <h3 className="text-xs font-bold text-[#4a1c1c] font-sans uppercase tracking-wider border-b border-orange-100/50 pb-1">
                gowriram's GitHub Stats
              </h3>
              
              <div className="space-y-1.5 font-mono text-[10px] text-[#6b2d2d]">
                <div className="flex justify-between">
                  <span>Total Stars Earned:</span>
                  <span className="font-bold text-[#4a1c1c]">0</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Commits:</span>
                  <span className="font-bold text-accent-fire">59</span>
                </div>
                <div className="flex justify-between">
                  <span>Total PRs:</span>
                  <span className="font-bold text-[#4a1c1c]">0</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Issues:</span>
                  <span className="font-bold text-[#4a1c1c]">0</span>
                </div>
                <div className="flex justify-between">
                  <span>Contributed to (last year):</span>
                  <span className="font-bold text-[#4a1c1c]">0</span>
                </div>
              </div>
            </div>

            {/* Circular Grade Dial */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-2">
              <div className="relative w-20 h-20 rounded-full border border-dashed border-[#6b2d2d]/25 flex items-center justify-center">
                {/* Simulated outer border arc */}
                <div className="absolute inset-1.5 rounded-full border-2 border-accent-fire border-t-transparent border-r-transparent animate-spin [animation-duration:20s]" />
                
                <div className="w-14 h-14 rounded-full bg-white border border-orange-100 flex items-center justify-center shadow-inner">
                  <span className="text-2xl font-black text-accent-fire font-mono">C</span>
                </div>
              </div>
              <span className="text-[9px] font-bold text-[#6b2d2d]/60 font-mono mt-1.5">SYS_GRADE // STATS</span>
            </div>
          </div>

          {/* Part 2: Most Used Languages (Dynamic Horizontal Segmented Bar) */}
          <div className="bg-white/80 border border-orange-100/80 p-5 rounded-2xl space-y-4">
            <h4 className="text-xs font-bold text-[#4a1c1c] font-sans uppercase tracking-wider border-b border-orange-100/50 pb-1">
              Most Used Languages
            </h4>
            
            {/* Segmented Progress Bar */}
            <div className="w-full h-3 rounded-full overflow-hidden flex bg-orange-50 border border-orange-100/40">
              <div style={{ width: '75.06%' }} className="bg-yellow-400 h-full hover:opacity-85 transition-opacity" title="JavaScript: 75.06%" />
              <div style={{ width: '15.01%' }} className="bg-accent-fire h-full hover:opacity-85 transition-opacity" title="HTML: 15.01%" />
              <div style={{ width: '8.91%' }} className="bg-purple-500 h-full hover:opacity-85 transition-opacity" title="CSS: 8.91%" />
              <div style={{ width: '0.78%' }} className="bg-amber-700 h-full hover:opacity-85 transition-opacity" title="Java: 0.78%" />
              <div style={{ width: '0.23%' }} className="bg-slate-500 h-full hover:opacity-85 transition-opacity" title="Dockerfile: 0.23%" />
            </div>

            {/* Language Legend */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 text-[9px] font-mono text-[#6b2d2d]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                JavaScript (75.06%)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent-fire shrink-0" />
                HTML (15.01%)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                CSS (8.91%)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-700 shrink-0" />
                Java (0.78%)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-slate-500 shrink-0" />
                Dockerfile (0.23%)
              </span>
            </div>
          </div>

          {/* Part 3: Contribution Streak Indicators */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-2xl bg-orange-50/40 border border-orange-100/50 text-center relative overflow-hidden">
              <span className="block text-[8px] font-bold text-[#6b2d2d]/60 uppercase tracking-widest leading-none mb-1">
                Contributions
              </span>
              <span className="text-base font-black text-[#4a1c1c] font-sans block">71</span>
              <span className="text-[7px] text-[#6b2d2d]/50 font-mono block mt-0.5">2018 - Present</span>
            </div>

            <div className="p-3 rounded-2xl bg-orange-50/40 border border-orange-100/50 text-center relative overflow-hidden">
              <Flame className="w-3.5 h-3.5 text-accent-fire absolute top-1.5 right-1.5 opacity-40" />
              <span className="block text-[8px] font-bold text-[#6b2d2d]/60 uppercase tracking-widest leading-none mb-1">
                Current Streak
              </span>
              <span className="text-base font-black text-accent-fire font-sans block">0</span>
              <span className="text-[7px] text-[#6b2d2d]/50 font-mono block mt-0.5">Jun 14</span>
            </div>

            <div className="p-3 rounded-2xl bg-orange-50/40 border border-orange-100/50 text-center relative overflow-hidden">
              <TrendingUp className="w-3.5 h-3.5 text-accent-orange absolute top-1.5 right-1.5 opacity-40" />
              <span className="block text-[8px] font-bold text-[#6b2d2d]/60 uppercase tracking-widest leading-none mb-1">
                Longest Streak
              </span>
              <span className="text-base font-black text-[#4a1c1c] font-sans block">6</span>
              <span className="text-[7px] text-[#6b2d2d]/50 font-mono block mt-0.5">Nov 29 - Dec 4</span>
            </div>
          </div>

          {/* Action button at bottom */}
          <div>
            <a
              href="https://github.com/gowriram"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-fire group w-full py-3.5 text-xs font-bold uppercase tracking-wider rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform shadow-md font-sans"
            >
              <ExternalLink className="w-4 h-4 text-white" />
              View GitHub Profile
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CertificationsGitHub;
