import React, { useState, useEffect } from 'react';
import { Mail, Send, Terminal, CheckCircle, MessageSquare, Phone, MapPin, ExternalLink, Calendar, FileText, RefreshCw } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [projectType, setProjectType] = useState('General');
  const [status, setStatus] = useState('idle'); // idle, sending, success
  const [hudLogs, setHudLogs] = useState([]);

  const projectCategories = [
    { label: "AI & Agents", value: "AI & Agents", desc: "AI integrations, RAG pipelines, or Agent orchestration" },
    { label: "Full-Stack Dev", value: "Full-Stack Dev", desc: "React, Node, databases, and responsive web applications" },
    { label: "Cloud & Data", value: "Cloud & Data", desc: "AWS/Azure infrastructure or data pipelines" },
    { label: "Consultation", value: "Consultation", desc: "System architecture review or tech consulting" },
    { label: "General", value: "General", desc: "General queries, collaborations, or saying hello" }
  ];

  // Initialize and update HUD Logs dynamically based on form changes
  useEffect(() => {
    const logs = [
      `[SYS] NODE_IP // SECURE_SOCKET_ACTIVE`,
      `[SYS] TARGET: GOWRI_RAM_SYSTEMS // STATUS: ONLINE`,
      `[SYS] PORT: 8080 // INGESTION_ENDPOINT: active`,
      `----------------------------------------`
    ];

    if (projectType && projectType !== 'General') {
      logs.push(`[USER] Selected category: ${projectType}`);
      logs.push(`[SYS] Initializing context for ${projectType}...`);
    }

    if (formState.name) {
      logs.push(`[USER] Identity: "${formState.name}"`);
    }

    if (formState.email) {
      const emailDomain = formState.email.split('@')[1] || '...';
      logs.push(`[USER] Response vector: ...@${emailDomain}`);
    }

    if (formState.message) {
      const payloadSize = formState.message.length;
      logs.push(`[USER] Payload size: ${payloadSize} chars`);
    }

    if (status === 'idle') {
      logs.push(`[SYS] STATUS: Awaiting input connection...`);
    } else if (status === 'sending') {
      logs.push(`[SYS] WARNING: Initiating SSL handshake...`);
      logs.push(`[SYS] UPLOADING: Transmitting secure packet...`);
    } else if (status === 'success') {
      logs.push(`[SYS] SUCCESS: Packet ingested successfully!`);
      logs.push(`[SYS] STATUS: 200 OK. Connection closed.`);
    }

    setHudLogs(logs);
  }, [formState, projectType, status]);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleCategorySelect = (value) => {
    setProjectType(value);
  };

  const handleReset = () => {
    setFormState({ name: '', email: '', message: '' });
    setProjectType('General');
    setStatus('idle');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('sending');
    // Simulate transmission
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setFormState({ name: '', email: '', message: '' });
        setProjectType('General');
        setStatus('idle');
      }, 4000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative">
      {/* Background ambient glow lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-fire/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="mb-16 text-center animate-fadeIn">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-fire font-sans block mb-2">
          Get In Touch
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#4a1c1c] tracking-tight font-sans">
          Let's Build Something <span className="text-gradient-fire">Extraordinary</span>
        </h2>
        <p className="text-[#6b2d2d]/80 text-xs font-semibold uppercase tracking-wider font-sans mt-2">
          Open to AI product roles, cloud engineering, and meaningful collaborations.
        </p>
        <div className="h-[2px] w-20 bg-gradient-to-r from-accent-fire to-accent-orange mt-4 mx-auto" />
      </div>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

        {/* Left Column: Direct Channels & Live HUD */}
        <div className="lg:col-span-5 flex flex-col justify-between glass-panel border-orange-100 p-8 rounded-3xl relative overflow-hidden shadow-xl">

          <div className="space-y-6">
            <span className="text-xs font-bold text-accent-fire uppercase tracking-widest font-mono flex items-center gap-1.5 animate-pulse">
              <Terminal className="w-3.5 h-3.5" />
              Direct Channels
            </span>

            {/* Channels List */}
            <div className="space-y-4 font-sans text-xs md:text-sm text-[#6b2d2d] font-light">
              <div className="flex items-center gap-3 bg-white/50 border border-orange-50 p-3 rounded-xl hover:border-accent-orange/30 transition-colors">
                <Mail className="w-4 h-4 text-accent-fire shrink-0" />
                <div>
                  <span className="block text-[8px] font-bold text-[#6b2d2d]/50 uppercase tracking-widest leading-none mb-0.5">Email</span>
                  <a href="mailto:gowrir559@gmail.com" className="font-bold text-[#4a1c1c] hover:text-accent-orange transition-colors">
                    gowrir559@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/50 border border-orange-50 p-3 rounded-xl hover:border-accent-orange/30 transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-accent-orange shrink-0"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <div>
                  <a href="https://www.linkedin.com/in/gowri-ram-050a68271/" target="_blank" rel="noopener noreferrer" className="font-bold text-[#4a1c1c] hover:text-accent-orange transition-colors">
                    Linkedin
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/50 border border-orange-50 p-3 rounded-xl hover:border-accent-orange/30 transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-accent-fire shrink-0"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <div>
                  <a href="https://github.com/Gowri173" target="_blank" rel="noopener noreferrer" className="font-bold text-[#4a1c1c] hover:text-accent-orange transition-colors">
                    Github
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/50 border border-orange-50 p-3 rounded-xl hover:border-accent-orange/30 transition-colors">
                <Phone className="w-4 h-4 text-accent-orange shrink-0" />
                <div>
                  <span className="block text-[8px] font-bold text-[#6b2d2d]/50 uppercase tracking-widest leading-none mb-0.5">Phone</span>
                  <a href="tel:+919441857197" className="font-bold text-[#4a1c1c] hover:text-accent-orange transition-colors">
                    +91 9441857197
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/50 border border-orange-50 p-3 rounded-xl">
                <MapPin className="w-4 h-4 text-accent-fire shrink-0" />
                <div>
                  <span className="block text-[8px] font-bold text-[#6b2d2d]/50 uppercase tracking-widest leading-none mb-0.5">Location</span>
                  <span className="font-bold text-[#4a1c1c]">
                    Vijayawada, Andhra Pradesh, India
                  </span>
                </div>
              </div>
            </div>
          </div>


          {/* CTA Buttons */}
          <div className="flex gap-3 mt-2">
            <a
              href="mailto:gowrir559@gmail.com"
              className="btn-primary-fire group flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform text-center shadow-md"
            >
              <Calendar className="w-4 h-4" />
              Schedule a Call
            </a>

            <a
              href="/assest/Gowri_Ram.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 py-3 text-xs font-bold uppercase tracking-wider text-[#4a1c1c] bg-orange-50 border border-orange-100 hover:border-accent-orange/45 rounded-xl transition-all flex items-center justify-center gap-2 text-center"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </a>
          </div>

        </div>

        {/* Right Column: Connection Form */}
        <div className="lg:col-span-7 glass-panel border-orange-100 p-8 rounded-3xl shadow-xl relative flex flex-col justify-between">

          <div>
            <div className="flex items-center justify-between mb-6 border-b border-orange-50 pb-4">
              <h4 className="text-base font-bold text-[#4a1c1c] font-sans flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-accent-orange" />
                Connection Parameters
              </h4>
              <button
                type="button"
                onClick={handleReset}
                className="p-1.5 rounded-lg text-[#6b2d2d]/60 hover:text-accent-fire hover:bg-orange-50 transition-all flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider font-sans border border-transparent hover:border-orange-100"
              >
                <RefreshCw className="w-3 h-3" />
                Clear
              </button>
            </div>

            {/* Project Selectors */}
            <div className="mb-6">
              <label className="block text-[10px] font-bold text-[#6b2d2d]/80 uppercase tracking-widest mb-3 font-sans">
                Select Project Scope
              </label>
              <div className="flex flex-wrap gap-2">
                {projectCategories.map((cat) => (
                  <button
                    key={cat.value}
                    type="button"
                    onClick={() => handleCategorySelect(cat.value)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold font-sans border transition-all duration-200 select-none ${projectType === cat.value
                      ? 'bg-gradient-to-r from-accent-fire to-accent-orange text-white border-transparent shadow-md scale-[1.02]'
                      : 'bg-white hover:bg-orange-50/50 border-orange-100 text-[#4a1c1c] hover:border-accent-orange/30'
                      }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-[10px] font-bold text-[#6b2d2d]/70 uppercase tracking-widest mb-1.5 font-sans">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl bg-white/70 border border-orange-100 focus:border-accent-fire text-[#4a1c1c] text-xs md:text-sm font-sans placeholder-[#6b2d2d]/30 transition-all shadow-sm"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-[10px] font-bold text-[#6b2d2d]/70 uppercase tracking-widest mb-1.5 font-sans">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/70 border border-orange-100 focus:border-accent-fire text-[#4a1c1c] text-xs md:text-sm font-sans placeholder-[#6b2d2d]/30 transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Message Payload */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-[10px] font-bold text-[#6b2d2d]/70 uppercase tracking-widest font-sans">
                    Message
                  </label>
                  <span className="text-[9px] font-mono text-[#6b2d2d]/50">
                    {formState.message.length} chars
                  </span>
                </div>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell me about your project, role, or opportunity…"
                  className="w-full px-4 py-3 rounded-xl bg-white/70 border border-orange-100 focus:border-accent-fire text-[#4a1c1c] text-xs md:text-sm font-sans placeholder-[#6b2d2d]/30 transition-all shadow-sm resize-none"
                />
              </div>

              {/* Send Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary-fire w-full py-4 text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 select-none disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-98 shadow-md font-sans"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Transmitting...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Payload Ingested
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Secure disclaimer */}
          <div className="mt-6 pt-4 border-t border-orange-50 flex items-center gap-2 text-[9px] font-mono text-[#6b2d2d]/50 select-none">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <span>Connection secured. Telemetry transmitted over encrypted SSL channels.</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
