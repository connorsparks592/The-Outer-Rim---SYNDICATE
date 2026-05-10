import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Tv, Newspaper, Radio, Trophy, X, ChevronRight, Signal } from 'lucide-react';
import { CommandButton } from './Shared';
import { HOLONET_ARTICLES } from '../data';

interface HoloNetProps {
    onClose: () => void;
    onOpenTracker: () => void;
}

export const HoloNet: React.FC<HoloNetProps> = ({ onClose, onOpenTracker }) => {
    const [view, setView] = useState<'HOME' | 'NEWS' | 'SPORTS'>('HOME');

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[100] bg-black/98 flex flex-col items-center justify-center p-4 md:p-8 font-mono select-none"
        >
            {/* AMBIENT SCANLINES */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
            </div>

            <div className="max-w-3xl w-full h-[70vh] border-2 border-cyan-500/30 bg-cyan-950/10 rounded-3xl relative overflow-hidden flex flex-col shadow-[0_0_50px_rgba(6,182,212,0.1)]">
                {/* HEADER */}
                <div className="flex justify-between items-center p-6 border-b border-cyan-500/20 bg-cyan-900/10 backdrop-blur-sm relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-cyan-500/20 rounded-xl">
                            <Tv className="text-cyan-400" size={24} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-cyan-500 uppercase tracking-widest">Subscriber Content</span>
                            <span className="text-2xl text-white font-black tracking-tighter uppercase">HoloNet Premium</span>
                        </div>
                    </div>
                    
                    <button onClick={onClose} className="p-2 hover:bg-cyan-500/20 rounded-full transition-colors text-cyan-500">
                        <X size={24} />
                    </button>
                </div>

                {/* CONTENT AREA */}
                <div className="flex-1 overflow-y-auto p-8 news-scrollbar">
                    <AnimatePresence mode="wait">
                        {view === 'HOME' && (
                            <motion.div 
                                key="home"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-center"
                            >
                                <button 
                                    onClick={() => setView('NEWS')}
                                    className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all flex flex-col items-center text-center gap-4"
                                >
                                    <div className="p-6 bg-cyan-500/10 rounded-full group-hover:scale-110 transition-transform">
                                        <Newspaper size={48} className="text-cyan-400" />
                                    </div>
                                    <h3 className="text-xl text-white font-bold uppercase">Galactic News</h3>
                                    <p className="text-cyan-400/40 text-xs text-balance uppercase tracking-widest">Local and sector-wide intelligence reports.</p>
                                </button>

                                <button 
                                    onClick={() => setView('SPORTS')}
                                    className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all flex flex-col items-center text-center gap-4"
                                >
                                    <div className="p-6 bg-orange-500/10 rounded-full group-hover:scale-110 transition-transform">
                                        <Trophy size={48} className="text-orange-400" />
                                    </div>
                                    <h3 className="text-xl text-white font-bold uppercase">Arena Feeds</h3>
                                    <p className="text-orange-400/40 text-xs text-balance uppercase tracking-widest">Live statistics and podrace telemetry.</p>
                                </button>
                            </motion.div>
                        )}

                        {view === 'NEWS' && (
                            <motion.div 
                                key="news"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex flex-col gap-6"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <button onClick={() => setView('HOME')} className="text-cyan-500 hover:text-cyan-300 flex items-center gap-2 uppercase text-xs font-bold">
                                         Back
                                    </button>
                                    <div className="h-px flex-1 bg-cyan-500/20" />
                                    <div className="text-[10px] text-cyan-500/60 uppercase tracking-widest">Breaking Reports Service</div>
                                </div>

                                {HOLONET_ARTICLES.map(article => (
                                    <div key={article.id} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-colors relative group">
                                        <div className="flex justify-between items-start mb-3">
                                            <span className="text-[10px] text-cyan-500 font-bold uppercase tracking-widest px-2 py-1 bg-cyan-500/10 rounded">{article.source}</span>
                                            <span className="text-[10px] text-white/30 font-mono">TS: {article.date}</span>
                                        </div>
                                        <h4 className="text-lg text-white font-bold mb-2 group-hover:text-cyan-200 transition-colors">{article.headline}</h4>
                                        <p className="text-sm text-white/60 leading-relaxed font-sans">{article.body}</p>
                                        <ChevronRight size={16} className="absolute bottom-6 right-6 text-cyan-500/40 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {view === 'SPORTS' && (
                            <motion.div 
                                key="sports"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex flex-col h-full items-center justify-center gap-8 text-center"
                            >
                                <div className="p-12 rounded-full bg-orange-500/5 border-4 border-orange-500/10 animate-pulse relative">
                                    <Radio size={64} className="text-orange-500" />
                                    <Signal size={24} className="absolute -top-4 -right-4 text-orange-400 animate-bounce" />
                                </div>
                                <div className="max-w-sm">
                                    <h3 className="text-2xl text-white font-bold uppercase mb-2">Live Telemetry Available</h3>
                                    <p className="text-orange-400/60 text-sm mb-8 uppercase tracking-widest">Synchronize with local arena mainframe to view real-time racer coordinates and heat metrics.</p>
                                    <div className="flex gap-4 justify-center">
                                         <CommandButton label="Back" onClick={() => setView('HOME')} className="border-white/10 text-white/60" />
                                         <CommandButton label="Link Feed" onClick={onOpenTracker} className="bg-orange-600 border-none px-12" />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* STATUS BAR */}
                <div className="px-8 py-3 bg-cyan-500/5 border-t border-cyan-500/10 flex justify-between items-center text-[8px] text-cyan-500/40 uppercase tracking-[0.3em]">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> ENCRYPTED LINK</span>
                        <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" /> SATELLITE SYNC</span>
                    </div>
                    <span>PROTO: HN-66.02</span>
                </div>
            </div>
        </motion.div>
    );
};
