import React, { useState } from 'react';
import { Network, FileText, Settings, Shield, RefreshCw } from 'lucide-react';

const AISystems = () => {
  const [activeTab, setActiveTab] = useState('multi-agent');

  const tabs = [
    { id: 'multi-agent', label: 'Multi-Agent Orchestration', icon: <Network className="w-4 h-4" /> },
    { id: 'rag-pipelines', label: 'Advanced RAG Pipelines', icon: <FileText className="w-4 h-4" /> },
    { id: 'agent-workflows', label: 'Agentic Self-Correction', icon: <Settings className="w-4 h-4" /> },
  ];

  // Interactive schematics for Red/Orange/White Theme
  const renderSchematic = () => {
    switch (activeTab) {
      case 'multi-agent':
        return (
          <div className="w-full h-full flex flex-col justify-between">
            {/* Visual Graph Area */}
            <div className="relative flex-grow flex items-center justify-center min-h-[260px] select-none">
              
              {/* Orchestrator node */}
              <div className="absolute z-10 w-24 h-24 rounded-full bg-white border-2 border-accent-fire flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(255,69,0,0.12)]">
                <span className="text-[10px] font-bold text-accent-fire font-mono uppercase">Orchestrator</span>
                <span className="text-[8px] text-[#6b2d2d]/70 font-mono mt-0.5">Control Unit</span>
              </div>

              {/* Sub-agents orbit */}
              <div className="absolute w-64 h-64 rounded-full border border-orange-100 border-dashed animate-spin [animation-duration:35s]" />

              {/* Agent Nodes */}
              <div className="absolute top-8 left-16 w-16 h-16 rounded-full bg-white border border-accent-orange flex flex-col items-center justify-center text-center shadow-[0_0_15px_rgba(255,140,0,0.08)]">
                <span className="text-[8px] font-bold text-[#4a1c1c] font-mono">Ingestion Agent</span>
              </div>

              <div className="absolute top-8 right-16 w-16 h-16 rounded-full bg-white border border-accent-orange flex flex-col items-center justify-center text-center shadow-[0_0_15px_rgba(255,140,0,0.08)]">
                <span className="text-[8px] font-bold text-[#4a1c1c] font-mono">Parser Agent</span>
              </div>

              <div className="absolute bottom-8 left-16 w-16 h-16 rounded-full bg-white border border-accent-orange flex flex-col items-center justify-center text-center shadow-[0_0_15px_rgba(255,140,0,0.08)]">
                <span className="text-[8px] font-bold text-[#4a1c1c] font-mono">Validation Agent</span>
              </div>

              <div className="absolute bottom-8 right-16 w-16 h-16 rounded-full bg-white border border-accent-orange flex flex-col items-center justify-center text-center shadow-[0_0_15px_rgba(255,140,0,0.08)]">
                <span className="text-[8px] font-bold text-[#4a1c1c] font-mono">Correction Agent</span>
              </div>
            </div>

            {/* Ingestion status log */}
            <div className="p-4 rounded-xl bg-white/80 border border-orange-100 font-mono text-[10px] text-[#6b2d2d]/80 space-y-1">
              <div className="flex justify-between text-accent-fire font-semibold">
                <span>&gt; ORCHESTRATOR STATUS: RUNNING</span>
                <span>Active Loops: 4</span>
              </div>
              <div>&gt; [09:12:04] Ingestion Agent parsed document corpus.</div>
              <div>&gt; [09:12:05] Validation Agent detected schema mismatch at Node 42.</div>
              <div>&gt; [09:12:06] Correction Agent applied self-correcting logic. Status: OK.</div>
            </div>
          </div>
        );
      
      case 'rag-pipelines':
        return (
          <div className="w-full h-full flex flex-col justify-between">
            <div className="relative flex-grow flex items-center justify-around min-h-[260px] select-none px-4">
              
              {/* Document Source */}
              <div className="p-3 rounded-xl bg-white border border-orange-100 text-center w-24">
                <span className="text-[9px] font-bold text-[#6b2d2d] block font-mono">Document Store</span>
                <span className="text-[8px] text-[#6b2d2d]/70 block font-mono mt-0.5">PDF/Docx ZIP</span>
              </div>

              {/* Vector Store */}
              <div className="p-3 rounded-xl bg-white border border-accent-fire/40 text-center w-28 shadow-[0_0_20px_rgba(255,69,0,0.08)]">
                <span className="text-[9px] font-bold text-accent-fire block font-mono">Vector Database</span>
                <span className="text-[8px] text-[#6b2d2d]/70 block font-mono mt-0.5">Pinecone / PGVector</span>
              </div>

              {/* LLM Engine */}
              <div className="p-3 rounded-xl bg-white border border-orange-100 text-center w-24">
                <span className="text-[9px] font-bold text-[#6b2d2d] block font-mono">LLM Orchestrator</span>
                <span className="text-[8px] text-[#6b2d2d]/70 block font-mono mt-0.5">Gemini-Pro</span>
              </div>
            </div>

            {/* Diagnostic stats */}
            <div className="p-4 rounded-xl bg-white/80 border border-orange-100 font-mono text-[10px] text-[#6b2d2d]/80 space-y-1">
              <div className="flex justify-between text-accent-orange font-semibold">
                <span>&gt; PIPELINE METRICS: OPTIMIZED</span>
                <span>Latency: 142ms</span>
              </div>
              <div>&gt; [09:12:12] Triggering hybrid search query expansion.</div>
              <div>&gt; [09:12:13] Retrieved top-K text chunks. Cosine distance similarity: 0.88.</div>
              <div>&gt; [09:12:13] LLM context validation filters executed. No hallucinations flagged.</div>
            </div>
          </div>
        );

      case 'agent-workflows':
        return (
          <div className="w-full h-full flex flex-col justify-between">
            <div className="relative flex-grow flex flex-col items-center justify-center min-h-[260px] select-none gap-6">
              
              {/* Correction loop graph */}
              <div className="flex items-center gap-12">
                <div className="w-20 h-20 rounded-xl bg-white border border-accent-fire flex flex-col items-center justify-center text-center shadow-[0_0_15px_rgba(255,69,0,0.08)]">
                  <span className="text-[9px] font-bold text-[#4a1c1c] font-mono">Original Output</span>
                  <span className="text-[8px] text-red-500 font-mono mt-0.5">Score: 68%</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <RefreshCw className="w-5 h-5 text-accent-orange animate-spin [animation-duration:6s]" />
                  <span className="text-[8px] font-mono text-[#6b2d2d]/80">Refining...</span>
                </div>

                <div className="w-20 h-20 rounded-xl bg-white border border-emerald-500 flex flex-col items-center justify-center text-center shadow-[0_0_15px_rgba(16,185,129,0.08)]">
                  <span className="text-[9px] font-bold text-[#4a1c1c] font-mono">Refined Output</span>
                  <span className="text-[8px] text-emerald-600 font-mono mt-0.5">Score: 97%</span>
                </div>
              </div>

            </div>

            {/* Diagnostic console */}
            <div className="p-4 rounded-xl bg-white/80 border border-orange-100 font-mono text-[10px] text-[#6b2d2d]/80 space-y-1">
              <div className="flex justify-between text-accent-fire font-semibold">
                <span>&gt; PIPELINE STATUS: RESOLVED</span>
                <span>Tries: 2</span>
              </div>
              <div>&gt; [09:12:20] Generated original system response payload.</div>
              <div>&gt; [09:12:21] Quality Gate evaluator rejected output (Fidelity Score below 85%).</div>
              <div>&gt; [09:12:22] Synthesized correction instructions. Payload updated successfully.</div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="aisystems" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative">
      {/* Background glow light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-fire/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="mb-16 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-fire font-sans block mb-2">
          Architecture Hub
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#4a1c1c] tracking-tight font-sans">
          Cognitive <span className="text-gradient-fire">System Panels</span>
        </h2>
        <div className="h-[2px] w-20 bg-gradient-to-r from-accent-fire to-accent-orange mt-4 mx-auto" />
      </div>

      {/* Interactive Module Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Navigation Selector Tabs - Left */}
        <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-5 rounded-2xl border text-left flex items-center gap-4 transition-all duration-300 font-sans ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-accent-fire/15 to-accent-orange/10 border-accent-fire/30 text-[#4a1c1c] shadow-[0_0_20px_rgba(255,69,0,0.1)]'
                  : 'bg-white/80 border-orange-100 text-[#6b2d2d] hover:text-accent-fire hover:border-orange-200'
              }`}
            >
              <div className={`p-2.5 rounded-xl border transition-colors ${
                activeTab === tab.id
                  ? 'bg-orange-50 border-accent-fire/30 text-accent-fire'
                  : 'bg-white border-orange-100 text-[#6b2d2d]/60'
              }`}>
                {tab.icon}
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-bold uppercase tracking-wider block">{tab.label}</span>
                <span className="text-[10px] text-[#6b2d2d]/60 font-mono">SYSTEM_NODE // CLICK</span>
              </div>
            </button>
          ))}
        </div>

        {/* Dashboard Visualizer Display - Right */}
        <div className="lg:col-span-8 glass-panel border-orange-100 p-8 rounded-3xl min-h-[380px] flex flex-col justify-between shadow-xl relative">
          {/* Subtle grid pattern overlay inside card */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none rounded-3xl" />
          
          <div className="flex items-center justify-between border-b border-orange-100 pb-4 mb-4 select-none">
            <span className="text-xs font-bold text-[#4a1c1c] font-mono uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-orange animate-ping" />
              Telemetry Monitor Panel
            </span>
            <span className="text-[10px] text-[#6b2d2d]/70 font-mono">STATUS: ONLINE</span>
          </div>

          <div className="flex-grow flex flex-col justify-between">
            {renderSchematic()}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AISystems;
