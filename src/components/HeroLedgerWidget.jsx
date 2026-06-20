import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import api from '@/services/axios';
import { Star, X, ChevronLeft, ChevronRight, Send, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

const HeroLedgerWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [entries, setEntries] = useState([]);
  const [totalEntries, setTotalEntries] = useState(0);
  const [pageGroup, setPageGroup] = useState(0); // 0 means page 1-2, 1 means page 3-4, etc.

  // Form States
  const [isFormActive, setIsFormActive] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    country: '',
    experience: '',
    rating: 5,
  });

  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const ENTRIES_PER_PAGE = 3;

  const fetchEntries = async () => {
    try {
      const res = await api.get('/api/ledger?limit=100');
      if (res.data?.status === 'success') {
        setEntries(res.data.data);
        setTotalEntries(res.data.total || res.data.data.length);
      }
    } catch (err) {
      console.error('Widget failed to fetch ledger entries:', err);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleRatingSelect = (val) => {
    setFormState({ ...formState, rating: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.experience) return;

    setStatus('sending');
    setErrorMessage('');

    try {
      const res = await api.post('/api/ledger', formState);
      if (res.data?.status === 'success') {
        setStatus('success');

        // Reload entries
        await fetchEntries();

        // Reset form
        setFormState({
          name: '',
          country: '',
          experience: '',
          rating: 5,
        });

        setTimeout(() => {
          setIsFormActive(false);
          setStatus('idle');
        }, 2000);
      }
    } catch (err) {
      console.error('Ledger submission failed:', err);
      const serverMsg = err.response?.data?.message || err.message || 'Submission error';
      setErrorMessage(serverMsg);
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  // Chunk entries for pages
  const leftPageEntries = entries.slice(pageGroup * (ENTRIES_PER_PAGE * 2), pageGroup * (ENTRIES_PER_PAGE * 2) + ENTRIES_PER_PAGE);
  const rightPageEntries = entries.slice(pageGroup * (ENTRIES_PER_PAGE * 2) + ENTRIES_PER_PAGE, pageGroup * (ENTRIES_PER_PAGE * 2) + (ENTRIES_PER_PAGE * 2));

  const hasNextPageGroup = entries.length > (pageGroup + 1) * (ENTRIES_PER_PAGE * 2);
  const hasPrevPageGroup = pageGroup > 0;

  return (
    <>
      {/* Dynamic Google Fonts Import for realistic handwriting styling */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Playpen+Sans:wght@300;400;500;700&family=Architects+Daughter&display=swap');
        
        .handwritten-text {
          font-family: 'Caveat', 'Architects Daughter', cursive;
          font-size: 16px;
          line-height: 1.4;
          color: #2b2b2b;
        }
        
        .notebook-font {
          font-family: 'Playpen Sans', sans-serif;
        }

        .book-container {
          perspective: 1000px;
        }

        .closed-book {
          transform: rotateY(-18deg) rotateX(10deg);
          box-shadow: 12px 12px 25px rgba(0, 0, 0, 0.4);
          transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .closed-book:hover {
          transform: rotateY(-5deg) rotateX(5deg) scale(1.06);
          box-shadow: 18px 18px 30px rgba(239, 68, 68, 0.3);
        }

        /* Lined paper lines */
        .paper-lines {
          background-image: linear-gradient(#e5e7eb 1px, transparent 1px);
          background-size: 100% 28px;
        }
      `}} />

      {/* =========================================================
          CLOSED BOOK INTERFACE (RIGHT SIDE OF HERO)
          ========================================================= */}
      <div className="book-container flex flex-col items-center justify-end h-full pb-8 pr-6">
        <button
          onClick={() => setIsOpen(true)}
          className="group focus:outline-none flex flex-col items-center"
        >
          {/* 3D Closed Book Cover */}
          <div className="closed-book relative w-[130px] h-[170px] bg-gradient-to-br from-[#a81a1a] to-[#7f1212] rounded-r-xl rounded-l-md border-l-8 border-[#5c0b0b] flex flex-col justify-between p-3 select-none cursor-pointer">
            {/* Gold border inset */}
            <div className="absolute inset-1.5 border border-amber-400/40 rounded-r-lg pointer-events-none" />

            {/* Gold circle/oval accent in center */}
            <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[90px] h-[45px] rounded-full bg-amber-400/15 border-2 border-amber-400/60 flex items-center justify-center pointer-events-none shadow-[inset_0_0_8px_rgba(251,191,36,0.3)]">
              <span className="text-[10px] font-black text-amber-300 uppercase tracking-[0.25em] font-sans">
                Ledger
              </span>
            </div>

            {/* Spine highlights */}
            <div className="absolute left-0 top-0 w-2 h-full bg-black/10 shadow-inner" />

            {/* White pages showing on the right edge */}
            <div className="absolute right-[-4px] top-[4%] w-1 h-[92%] bg-gradient-to-b from-slate-200 via-white to-slate-200 rounded-r border-r border-slate-300 shadow-[2px_2px_4px_rgba(0,0,0,0.15)]" />

            {/* Guest Book Label */}
            <div className="w-full text-center mt-auto pb-1 z-10 pointer-events-none">
              <span className="text-[10px] font-sans font-black text-amber-200/90 uppercase tracking-[0.25em] block">
                GUESTBOOK
              </span>
            </div>
          </div>

          {/* Cursive prompt below book */}
          <span className="mt-3.5 text-xs text-accent-fire text-white font-bold tracking-wider hover:text-accent-red transition-colors flex items-center gap-1 font-sans">
            📖 Sign the Book!
          </span>
        </button>
      </div>

      {/* =========================================================
          OPEN BOOK MODAL OVERLAY (INLINE WINDOW)
          ========================================================= */}
      {isOpen && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-8 animate-fadeIn">
          {/* Close button outside book */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 focus:outline-none cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Open Book Container */}
          <div className="relative w-full max-w-4xl h-[560px] bg-[#f8f5ee] rounded-2xl shadow-2xl flex flex-col md:flex-row border-[6px] border-[#653e19] select-text overflow-hidden">

            {/* 3D Middle Spine Shadow */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-8 bg-gradient-to-r from-black/20 via-black/5 to-black/20 border-l border-r border-black/5 z-20 pointer-events-none hidden md:block" />

            {/* =========================================================
                LEFT PAGE (PUBLIC ENTRIES)
                ========================================================= */}
            <div className="w-full md:w-1/2 bg-[#faf7f0] p-8 md:p-10 flex flex-col justify-between relative h-1/2 md:h-full border-b md:border-b-0 md:border-r border-orange-100/30">

              <div className="space-y-4">
                {/* Page Title */}
                <div className="border-b-2 border-orange-100 pb-2">
                  <h3 className="text-xl font-extrabold text-[#4a1c1c] font-sans flex items-center gap-2">
                    Guest Book
                  </h3>
                </div>

                {/* Entries List */}
                <div className="space-y-4 max-h-[340px] overflow-y-auto pr-2 scrollbar-thin">
                  {leftPageEntries.length === 0 ? (
                    <div className="py-20 text-center text-xs text-[#6b2d2d]/40 font-mono italic">
                      No registered signatures on this page.
                    </div>
                  ) : (
                    leftPageEntries.map((entry, idx) => (
                      <div key={entry._id || idx} className="pb-3 border-b border-orange-100/40 relative">
                        {entry.isPinned && (
                          <span className="absolute top-0 right-0 text-[7px] font-black uppercase tracking-wider text-accent-fire bg-orange-50 border border-orange-100 px-1 py-0.5 rounded">
                            Pinned
                          </span>
                        )}
                        <p className="handwritten-text italic leading-relaxed text-[#2c2c2c] pr-8">
                          "{entry.experience}"
                        </p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs font-bold text-sky-600 font-sans">
                            - {entry.name}
                          </span>

                          {/* Rating Stars */}
                          <div className="flex gap-0.5 text-accent-orange shrink-0">
                            {Array.from({ length: entry.rating }).map((_, rIdx) => (
                              <Star key={rIdx} className="w-2.5 h-2.5 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Bottom Navigation & Page Number */}
              <div className="flex items-center justify-between border-t border-orange-100/40 pt-3 text-[10px] font-mono text-[#6b2d2d]/60 select-none">
                <div>
                  {hasPrevPageGroup && (
                    <button
                      onClick={() => setPageGroup(prev => prev - 1)}
                      className="flex items-center gap-1 hover:text-accent-fire font-bold transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      Prev Page
                    </button>
                  )}
                </div>
                <span className="font-bold">{(pageGroup * 2) + 5}</span>
              </div>
            </div>

            {/* =========================================================
                RIGHT PAGE (STATISTICS / MORE ENTRIES / FORM)
                ========================================================= */}
            <div className="w-full md:w-1/2 bg-[#faf7f0] p-8 md:p-10 flex flex-col justify-between relative h-1/2 md:h-full">

              <div className="space-y-4 flex-grow flex flex-col justify-start">
                {/* Header Title */}
                <div className="border-b-2 border-orange-100 pb-2 flex justify-between items-center">
                  <h3 className="text-xl font-extrabold text-[#4a1c1c] font-sans">
                    {totalEntries} entries
                  </h3>
                </div>

                {/* Right page middle view - Form or continuation entries */}
                <div className="flex-grow max-h-[340px] overflow-y-auto pr-2 scrollbar-thin">
                  {isFormActive ? (
                    /* Ingestion Form */
                    <form onSubmit={handleSubmit} className="space-y-3 pt-1">
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your Name"
                          className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-orange-100 focus:border-accent-fire text-xs font-sans placeholder-[#6b2d2d]/30 shadow-sm"
                        />
                        <input
                          type="text"
                          name="country"
                          value={formState.country}
                          onChange={handleInputChange}
                          placeholder="Country (optional)"
                          className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-orange-100 focus:border-accent-fire text-xs font-sans placeholder-[#6b2d2d]/30 shadow-sm"
                        />
                      </div>

                      <div className="flex items-center gap-2 py-0.5">
                        <span className="text-[10px] font-bold text-[#6b2d2d]/70 uppercase tracking-wider font-sans">Rating:</span>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((val) => (
                            <button
                              key={val}
                              type="button"
                              onClick={() => handleRatingSelect(val)}
                              className="focus:outline-none hover:scale-110 transition-transform cursor-pointer"
                            >
                              <Star
                                className={`w-4 h-4 ${val <= formState.rating ? 'text-accent-orange fill-accent-orange' : 'text-orange-200'
                                  }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      <textarea
                        name="experience"
                        value={formState.experience}
                        onChange={handleInputChange}
                        required
                        rows="3"
                        maxLength="150"
                        placeholder="Write your brief impression here..."
                        className="w-full px-2.5 py-2 rounded-lg bg-white border border-orange-100 focus:border-accent-fire text-xs font-sans placeholder-[#6b2d2d]/30 shadow-sm resize-none"
                      />

                      <div className="flex gap-2 pt-1.5">
                        <button
                          type="button"
                          onClick={() => setIsFormActive(false)}
                          className="flex-1 py-2 border border-orange-100 hover:border-accent-orange/40 text-[10px] font-bold uppercase tracking-wider text-[#6b2d2d] rounded-lg hover:bg-orange-50/50 transition-all cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={status === 'sending'}
                          className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer ${status === 'error'
                            ? 'bg-red-600 text-white'
                            : status === 'success'
                              ? 'bg-emerald-600 text-white'
                              : 'btn-primary-fire'
                            }`}
                        >
                          {status === 'sending' ? (
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          ) : status === 'success' ? (
                            'Ingested!'
                          ) : (
                            <>
                              <Send className="w-3.5 h-3.5" />
                              Submit
                            </>
                          )}
                        </button>
                      </div>

                      {status === 'error' && (
                        <p className="text-[9px] text-red-500 font-mono mt-1 text-center">{errorMessage}</p>
                      )}
                    </form>
                  ) : (
                    /* Display Entries on Right Page */
                    <div className="space-y-4">
                      {rightPageEntries.map((entry, idx) => (
                        <div key={entry._id || idx} className="pb-3 border-b border-orange-100/40 relative">
                          <p className="handwritten-text italic leading-relaxed text-[#2c2c2c] pr-8">
                            "{entry.experience}"
                          </p>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs font-bold text-sky-600 font-sans">
                              - {entry.name}
                            </span>
                            <div className="flex gap-0.5 text-accent-orange shrink-0">
                              {Array.from({ length: entry.rating }).map((_, rIdx) => (
                                <Star key={rIdx} className="w-2.5 h-2.5 fill-current" />
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Click here to write... target */}
                      <button
                        onClick={() => setIsFormActive(true)}
                        className="w-full py-3 border border-dashed border-orange-200 rounded-xl text-left pl-4 hover:border-accent-orange/40 transition-all text-xs text-[#6b2d2d]/40 font-sans italic hover:text-accent-fire hover:bg-orange-50/20 cursor-pointer block select-none mt-2"
                      >
                        Click here to write...
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Navigation & Page Number */}
              <div className="flex items-center justify-between border-t border-orange-100/40 pt-3 text-[10px] font-mono text-[#6b2d2d]/60 select-none">
                <span className="font-bold">{(pageGroup * 2) + 6}</span>
                <div>
                  {hasNextPageGroup && !isFormActive && (
                    <button
                      onClick={() => setPageGroup(prev => prev + 1)}
                      className="flex items-center gap-1 hover:text-accent-fire font-bold transition-colors cursor-pointer"
                    >
                      Next Page
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default HeroLedgerWidget;
