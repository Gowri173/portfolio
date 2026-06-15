import React, { useState } from 'react';
import { Network, FileText, Settings, Shield, RefreshCw, Cpu, Brain, Database, User, GitBranch, Terminal } from 'lucide-react';

const AISystems = () => {
  const [activeTab, setActiveTab] = useState('ai-agents');

  const systemModules = [
    {
      id: 'ai-agents',
      label: 'AI Agents',
      tagline: 'Autonomous Decision-Making',
      desc: 'Designing agents that perceive their environment, reason over context, and act towards goals without continuous human intervention.',
      metric: 'Goal-Directed',
      icon: <Brain className="w-4 h-4" />
    },
    {
      id: 'multi-agents',
      label: 'Multi-Agent Systems',
      tagline: 'Collaborative Intelligence',
      desc: 'Orchestrating networks of specialized AI agents that communicate, delegate, and coordinate to solve complex multi-step tasks.',
      metric: 'Collaborative',
      icon: <Network className="w-4 h-4" />
    },
    {
      id: 'rag-pipelines',
      label: 'RAG Pipelines',
      tagline: 'Retrieval-Augmented Generation',
      desc: 'End-to-end RAG architectures: document ingestion, vector embeddings, semantic search, and source-grounded LLM synthesis.',
      metric: 'Source-Grounded',
      icon: <FileText className="w-4 h-4" />
    },
    {
      id: 'automation-workflows',
      label: 'Automation Workflows',
      tagline: 'Intelligent Process Automation',
      desc: 'Automated pipelines that integrate AI decision-making into business processes, reducing manual overhead at scale.',
      metric: 'Automated',
      icon: <Settings className="w-4 h-4 text-[#ff4500]" />
    },
    {
      id: 'ai-assistants',
      label: 'AI Assistants',
      tagline: 'Conversational Intelligence',
      desc: 'Context-aware assistants with long-term memory, tool use, and NLP pipelines for productive human-AI collaboration.',
      metric: 'Context-Aware',
      icon: <User className="w-4 h-4" />
    },
    {
      id: 'cloud-data-systems',
      label: 'Cloud Data Systems',
      tagline: 'Scalable Infrastructure',
      desc: 'Cloud-native data pipelines on AWS and Azure — from ingestion, storage, and processing to real-time analytics at scale.',
      metric: 'Cloud-Native',
      icon: <Database className="w-4 h-4" />
    }
  ];

  // Dynamic schematic selector
  const renderSchematic = () => {
    switch (activeTab) {
      case 'ai-agents':
        return (
          <div className="w-full h-full flex flex-col justify-between">
            <div className="relative flex-grow flex flex-col items-center justify-center min-h-[220px] select-none">
              {/* Perception Action loop */}
              <div className="flex items-center gap-6">
                <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-center w-20">
                  <span className="text-[8px] font-bold text-[#6b2d2d] block font-mono">Perceive</span>
                  <span className="text-[7px] text-[#6b2d2d]/60 block font-mono">Environment</span>
                </div>
                <div className="w-6 h-[1px] bg-accent-fire" />
                <div className="p-3 rounded-xl bg-white border-2 border-accent-fire text-center w-24 shadow-md animate-pulse">
                  <span className="text-[9px] font-black text-accent-fire block font-mono">Reason</span>
                  <span className="text-[7px] text-[#6b2d2d]/70 block font-mono">LLM Context</span>
                </div>
                <div className="w-6 h-[1px] bg-accent-fire" />
                <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-center w-20">
                  <span className="text-[8px] font-bold text-[#6b2d2d] block font-mono">Act</span>
                  <span className="text-[7px] text-[#6b2d2d]/60 block font-mono">Execute Tool</span>
                </div>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-orange-100 font-mono text-[9px] text-[#6b2d2d]/80">
              <div className="text-accent-fire font-bold flex justify-between">
                <span>&gt; MONITORED_AGENT: ACTIVE</span>
                <span>Loops: 12</span>
              </div>
              <div className="mt-1">&gt; [Observation] User requests data analysis report.</div>
              <div>&gt; [Reasoning] Plan generated. Step 1: Query database. Step 2: Format.</div>
              <div>&gt; [Action] Invoking SQLTool. Output: 200 rows. Ingestion complete.</div>
            </div>
          </div>
        );

      case 'multi-agents':
        return (
          <div className="w-full h-full flex flex-col justify-between">
            <div className="relative flex-grow flex items-center justify-center min-h-[220px] select-none">
              <div className="absolute z-10 w-20 h-20 rounded-full bg-white border-2 border-accent-fire flex flex-col items-center justify-center text-center shadow-[0_0_20px_rgba(255,69,0,0.1)]">
                <span className="text-[9px] font-bold text-accent-fire font-mono uppercase">Orchestrator</span>
              </div>
              <div className="absolute w-48 h-48 rounded-full border border-orange-100 border-dashed animate-spin [animation-duration:25s]" />
              <div className="absolute top-4 left-10 w-14 h-14 rounded-full bg-white border border-accent-orange flex items-center justify-center text-center shadow-sm">
                <span className="text-[7px] font-bold text-[#4a1c1c] font-mono">Parser Agent</span>
              </div>
              <div className="absolute top-4 right-10 w-14 h-14 rounded-full bg-white border border-accent-orange flex items-center justify-center text-center shadow-sm">
                <span className="text-[7px] font-bold text-[#4a1c1c] font-mono">Coder Agent</span>
              </div>
              <div className="absolute bottom-4 left-10 w-14 h-14 rounded-full bg-white border border-accent-orange flex items-center justify-center text-center shadow-sm">
                <span className="text-[7px] font-bold text-[#4a1c1c] font-mono">Verifier Agent</span>
              </div>
              <div className="absolute bottom-4 right-10 w-14 h-14 rounded-full bg-white border border-accent-orange flex items-center justify-center text-center shadow-sm">
                <span className="text-[7px] font-bold text-[#4a1c1c] font-mono">Executor Agent</span>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-orange-100 font-mono text-[9px] text-[#6b2d2d]/80">
              <div className="text-accent-orange font-bold">&gt; COLLABORATIVE NETWORK: 4 NODES ONLINE</div>
              <div className="mt-1">&gt; [Orchestrator] Delegated sub-task parsing to Parser Agent.</div>
              <div>&gt; [Verifier] Validated logic blocks compiled by Coder Agent.</div>
            </div>
          </div>
        );

      case 'rag-pipelines':
        return (
          <div className="w-full h-full flex flex-col justify-between">
            <div className="relative flex-grow flex items-center justify-around min-h-[220px] select-none px-2">
              <div className="p-2.5 rounded-xl bg-white border border-orange-100 text-center w-20">
                <span className="text-[8px] font-bold text-[#6b2d2d] block font-mono">Ingest</span>
                <span className="text-[7px] text-[#6b2d2d]/60 block font-mono mt-0.5">Split / Chunk</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-accent-fire/40 text-center w-24 shadow-sm">
                <span className="text-[8px] font-bold text-accent-fire block font-mono">VectorDB</span>
                <span className="text-[7px] text-[#6b2d2d]/60 block font-mono mt-0.5">Embeddings Match</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-orange-100 text-center w-20">
                <span className="text-[8px] font-bold text-[#6b2d2d] block font-mono">Synthesis</span>
                <span className="text-[7px] text-[#6b2d2d]/60 block font-mono mt-0.5">LLM Context</span>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-orange-100 font-mono text-[9px] text-[#6b2d2d]/80">
              <div className="text-accent-fire font-bold flex justify-between">
                <span>&gt; PIPELINE: RAG_SYSTEM_ACTIVE</span>
                <span>Latency: 120ms</span>
              </div>
              <div className="mt-1">&gt; Retrieved top-K reference documents via vector cosine similarity.</div>
              <div>&gt; Grounded prompt generated. Halucination safeguards active: OK.</div>
            </div>
          </div>
        );

      case 'automation-workflows':
        return (
          <div className="w-full h-full flex flex-col justify-between">
            <div className="relative flex-grow flex flex-col items-center justify-center min-h-[220px] select-none">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-xl bg-white border border-orange-100 flex flex-col items-center justify-center text-center shadow-inner">
                  <span className="text-[8px] font-bold text-[#6b2d2d] font-mono">Trigger</span>
                  <span className="text-[7px] text-[#6b2d2d]/50 font-mono">WebHook</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <RefreshCw className="w-4 h-4 text-accent-fire animate-spin [animation-duration:12s]" />
                  <span className="text-[7px] font-mono text-accent-fire">Evaluating</span>
                </div>
                <div className="w-16 h-16 rounded-xl bg-white border border-accent-orange flex flex-col items-center justify-center text-center shadow-[0_0_15px_rgba(255,107,53,0.08)]">
                  <span className="text-[8px] font-bold text-accent-orange font-mono">Condition</span>
                  <span className="text-[7px] text-accent-orange/80 font-mono">AI Guard</span>
                </div>
                <div className="w-6 h-[1px] bg-orange-100" />
                <div className="w-16 h-16 rounded-xl bg-white border border-orange-100 flex flex-col items-center justify-center text-center shadow-inner">
                  <span className="text-[8px] font-bold text-[#6b2d2d] font-mono">Action</span>
                  <span className="text-[7px] text-[#6b2d2d]/50 font-mono">Execute API</span>
                </div>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-orange-100 font-mono text-[9px] text-[#6b2d2d]/80">
              <div className="text-accent-fire font-bold">&gt; INTELLIGENT WORKFLOW: STABLE</div>
              <div className="mt-1">&gt; Webhook received webhook payload. Trigger condition: Verified.</div>
              <div>&gt; AI classification model route payload to department email channel.</div>
            </div>
          </div>
        );

      case 'ai-assistants':
        return (
          <div className="w-full h-full flex flex-col justify-between">
            <div className="relative flex-grow flex flex-col justify-center min-h-[220px] select-none max-w-sm mx-auto space-y-2.5">
              <div className="self-end p-2.5 rounded-2xl rounded-tr-none bg-orange-50 border border-orange-100 text-[9px] text-[#6b2d2d] max-w-[80%] font-sans">
                Analyze key differences in Q2 sales reports.
              </div>
              <div className="self-start p-2.5 rounded-2xl rounded-tl-none bg-white border border-accent-fire/20 text-[9px] text-[#4a1c1c] max-w-[80%] shadow-sm font-sans flex items-start gap-2">
                <Brain className="w-3.5 h-3.5 text-accent-fire shrink-0 mt-0.5" />
                <div>Checking historical database context... Loaded memory files.</div>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-orange-100 font-mono text-[9px] text-[#6b2d2d]/80">
              <div className="text-accent-orange font-bold">&gt; CONVERSATIONAL INTERACTION // MEMORY NODE ACTIVE</div>
              <div className="mt-1">&gt; Vector storage retrieval: matching context parameters.</div>
              <div>&gt; Context response synthesized. Tool invocation: OK.</div>
            </div>
          </div>
        );

      case 'cloud-data-systems':
        return (
          <div className="w-full h-full flex flex-col justify-between">
            <div className="relative flex-grow flex items-center justify-around min-h-[220px] select-none px-4">
              <div className="flex flex-col items-center">
                <div className="p-2 rounded-lg bg-orange-50 border border-orange-100 text-[8px] font-mono text-[#6b2d2d] uppercase">Ingestion</div>
                <div className="h-6 w-[2px] bg-orange-100 my-1 border-dashed" />
                <div className="p-2 rounded-lg bg-white border border-accent-orange text-[8px] font-mono text-accent-orange uppercase shadow-sm">AWS S3</div>
              </div>
              <div className="h-[2px] w-12 bg-orange-200 border-dashed" />
              <div className="p-3.5 rounded-xl bg-white border-2 border-accent-fire text-center shadow-md animate-pulse">
                <span className="text-[9px] font-bold text-accent-fire block font-mono">Spark Core</span>
                <span className="text-[7px] text-[#6b2d2d]/60 block font-mono">Processing</span>
              </div>
              <div className="h-[2px] w-12 bg-orange-200 border-dashed" />
              <div className="flex flex-col items-center">
                <div className="p-2 rounded-lg bg-orange-50 border border-orange-100 text-[8px] font-mono text-[#6b2d2d] uppercase">Warehouse</div>
                <div className="h-6 w-[2px] bg-orange-100 my-1 border-dashed" />
                <div className="p-2 rounded-lg bg-white border border-accent-fire text-[8px] font-mono text-accent-fire uppercase shadow-sm">BigQuery</div>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-orange-100 font-mono text-[9px] text-[#6b2d2d]/80">
              <div className="text-accent-fire font-bold flex justify-between">
                <span>&gt; DATA PIPELINE: ACTIVE</span>
                <span>Uptime: 99.98%</span>
              </div>
              <div className="mt-1">&gt; Data streamed from ingestion node to cloud container storage.</div>
              <div>&gt; Spark transformations completed. DB rows updated: 24,000.</div>
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
      <div className="mb-16 text-center animate-fadeIn">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-fire font-sans block mb-2">
          AI Systems
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#4a1c1c] tracking-tight font-sans">
          AI Systems <span className="text-gradient-fire">Architecture</span>
        </h2>
        <p className="text-[#6b2d2d]/80 text-xs font-semibold uppercase tracking-wider font-sans mt-2">
          The AI building blocks behind everything I create.
        </p>
        <div className="h-[2px] w-20 bg-gradient-to-r from-accent-fire to-accent-orange mt-4 mx-auto" />
      </div>

      {/* Interactive Module Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Navigation Selector Tabs - Left */}
        <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
          {systemModules.map((module) => (
            <button
              key={module.id}
              onClick={() => setActiveTab(module.id)}
              className={`p-4 rounded-2xl border text-left flex items-start gap-4 transition-all duration-300 font-sans ${
                activeTab === module.id
                  ? 'bg-gradient-to-r from-accent-fire/15 to-accent-orange/10 border-accent-fire/30 text-[#4a1c1c] shadow-[0_0_20px_rgba(255,69,0,0.08)] scale-[1.01]'
                  : 'bg-white/80 border-orange-100 text-[#6b2d2d] hover:text-accent-fire hover:border-orange-200'
              }`}
            >
              <div className={`p-2 rounded-xl border mt-0.5 transition-colors shrink-0 ${
                activeTab === module.id
                  ? 'bg-orange-50 border-accent-fire/30 text-accent-fire'
                  : 'bg-white border-orange-100 text-[#6b2d2d]/60'
              }`}>
                {module.icon}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider block">{module.label}</span>
                  <span className="px-2 py-0.5 rounded-full bg-orange-50/50 border border-orange-100 text-[8px] font-mono text-[#6b2d2d]">
                    {module.metric}
                  </span>
                </div>
                <p className="text-[10px] text-[#6b2d2d]/70 leading-relaxed font-sans font-light">
                  {module.desc}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Dashboard Visualizer Display - Right */}
        <div className="lg:col-span-7 glass-panel border-orange-100 p-8 rounded-3xl min-h-[380px] flex flex-col justify-between shadow-xl relative animate-fadeIn">
          {/* Subtle grid pattern overlay inside card */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none rounded-3xl" />
          
          <div className="flex items-center justify-between border-b border-orange-100 pb-4 mb-4 select-none">
            <span className="text-xs font-bold text-[#4a1c1c] font-mono uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-orange animate-ping" />
              All Systems Operational · 6 modules active
            </span>
            <span className="text-[10px] text-[#6b2d2d]/70 font-mono">MONITOR // ACTIVE</span>
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
